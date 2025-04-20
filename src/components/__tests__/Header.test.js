import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

test('should render Header component with login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: '🔓 Login'});
    expect(loginButton).toBeInTheDocument();
});

test('should render cart items count in header', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText(/(0 items)/);
    expect(cartItems).toBeInTheDocument();
});

test('should change Login button to Logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: '🔓 Login'});
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', { name: '🔒 Logout'});
    expect(logoutButton).toBeInTheDocument();
})