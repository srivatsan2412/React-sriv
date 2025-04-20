import { render, screen } from "@testing-library/react";
import Contact from "../Contact"
import '@testing-library/jest-dom';

describe('Contact Us page test cases', () => {
    test('should load contact us component', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });

    test('should load button inside Contact component', () => {
        render(<Contact />);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    });

    test('should load input inside Contact component', () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText('Name');
        expect(input).toBeInTheDocument();
    });

    test('should load 2 input boxes on the contact component', () => {
        render(<Contact />);
        const input = screen.getAllByRole('textbox');
        expect(input.length).toBe(3);
    })
});