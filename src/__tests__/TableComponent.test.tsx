import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import axios, { AxiosResponse } from 'axios';
import TableComponent from "../components/TableComponent/TableComponent";

function renderTableComponent() {
    
    return render(<TableComponent />);
}
describe("<TableComponent />", () => {
    test("should display a table showing the past and upcoming launch details", async () => {
        const { findByTestId } = renderTableComponent();
        const tableComponent = await findByTestId("table-component");
        
        expect(tableComponent).toHaveClass("table", "table-striped", "table-dark");
        expect(tableComponent).toBeVisible();

    });
});

describe('Verify the axios rendered data', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test('should render the table', async () => {
        const mAxiosResponse = [
            { flight_number: 1, mission_name: 'FalconSat', launch_window: 0, launch_year: '2006', upcoming: 'false' }
        ] as unknown as AxiosResponse;
        jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
        render(<TableComponent />);
        expect(await screen.findByText('FalconSat')).toBeInTheDocument();
    });
});
