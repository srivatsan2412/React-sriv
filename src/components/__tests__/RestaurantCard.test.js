import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import mockRestaurantData from "../mocks/resCardMock.json";
import '@testing-library/jest-dom';
import { promotedRestuarantCard } from "../RestaurantCard";

test('should render RestaurantCard component with restaurant data', () => {
    
    render(
        <RestaurantCard resData={mockRestaurantData} />
    )
    const name = screen.getByText('Burger King');
    expect(name).toBeInTheDocument();
});

test('should render RestaurantCard component with promoted label', () => {
    const RestaurantCardPromoted = promotedRestuarantCard(RestaurantCard);
    render(
        <RestaurantCardPromoted resData={mockRestaurantData} />
    );
    const name = screen.getByText('Burger King');
    expect(name).toBeInTheDocument();
    const label = screen.getByText('Promoted');
    expect(label).toBeInTheDocument();
})