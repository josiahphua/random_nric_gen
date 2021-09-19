import React from 'react';
import { render, screen } from '@testing-library/react';
import Generator from './Generator';

describe("Render Button Component", () => {
    it("shows text", () => {
        render(<Generator />);
        const textRegex = screen.getByText(/generate nric/i);
        expect(textRegex).toBeInTheDocument();
    })
})


