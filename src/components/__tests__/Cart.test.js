import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { act } from "react"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test('should Load Restaurant Menu Component', async () => {
    await act(() => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header />
                    <RestaurantMenu />
                    <Cart />
                </BrowserRouter>
             </Provider>
        )
    });

    const accordionHeader = screen.getByText('Recommended (15)');
    fireEvent.click(accordionHeader);
    const foodItems = screen.getAllByTestId('food-item');
    expect(foodItems.length).toBe(15);

    const addBtn = screen.getAllByRole('button', { name: 'ADD +' });
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
    const cartItems = screen.getByText(/2 item/);
    expect(cartItems).toBeInTheDocument();
    const cartPageItems = screen.getAllByTestId('food-item');
    expect(cartPageItems.length).toBe(17);
})