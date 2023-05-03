import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import axios, { AxiosResponse } from 'axios';
import ViewLaunchDetailsByIdComponent from "../components/ViewLaunchDetails/ViewLaunchDetails";


describe('Verify the ViewDetailsByLaunchComponent', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test('should render the ViewDetailsByIdComponent', async () => {
        const mAxiosResponse = [
            { flight_number: 1, mission_name: 'FalconSat', launch_window: 0, launch_year: '2006', upcoming: 'false' }
        ] as unknown as AxiosResponse;

        jest.spyOn(axios, 'get').mockResolvedValueOnce(mAxiosResponse);
        render(<ViewLaunchDetailsByIdComponent />);
        expect(await screen.findByText('Mission Name: FalconSat')).toBeInTheDocument();
    });
});