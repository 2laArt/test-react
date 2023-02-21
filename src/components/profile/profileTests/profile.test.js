import { render, screen } from "@testing-library/react";
import { StatusBlock } from "../addModules/blocks/profileBlocks/StatusBlock";
import '@testing-library/jest-dom';

describe('StatusBlock', () => {
	it('status input is not displayed ', () => {
		render(<StatusBlock status={'Hello'} editMode={true} />)
		expect(screen.getByRole('textbox')).toBeInTheDocument();
		expect(screen.getByDisplayValue(/Hello/i)).toBeInTheDocument();
	})
	it('status input is displayed ', async () => {
		render(<StatusBlock status={'Hello'} editMode={false} />)
		expect(screen.getByTestId('statusText')).toBeInTheDocument();
	})
})
