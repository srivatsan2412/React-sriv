import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import MockData from "../mocks/mockResList.json";
import Body from "../Body";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MockData);
        }
    })
})

test('should search restlist for pizza input', async () => {
    await act(() => {
        render(
        <BrowserRouter>  
         <Body />
        </BrowserRouter>
    );
    })
    const restaurantCards = screen.getAllByTestId('rest-card');
   
    expect(restaurantCards.length).toBe(8);
    const searchButton = screen.getByRole('button', { name: 'Search' });
    // const searchInput = screen.getByPlaceholderText('Search for restaurants and dishes');
    const searchInput = screen.getByTestId('search-input')
    fireEvent.change(searchInput, {
        target: {
            value: 'pizza'
        }
    });
    fireEvent.click(searchButton);
    const updatedRestCards = screen.getAllByTestId('rest-card');
   
    expect(updatedRestCards.length).toBe(2);
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
});

test('should filter top rated restuants', async () => {
    await act(() => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    });
    const restaurantCards = screen.getAllByTestId('rest-card');
    expect(restaurantCards.length).toBe(8);
    const topRatedButton = screen.getByRole('button', { name: 'Top Rated Restaurants' });
    fireEvent.click(topRatedButton);
    const updatedRestCards = screen.getAllByTestId('rest-card');
    expect(updatedRestCards.length).toBe(6);
})