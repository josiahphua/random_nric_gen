import { render } from '@testing-library/react';
import DisplayTable from "./DisplayTable";

describe("Display Table renders", () => {
    it("doesn't render h3", () => {
        const { queryByTestId } = render(<h3></h3>)
        const header = queryByTestId("header")
        expect(header).toBeFalsy();
    })
})