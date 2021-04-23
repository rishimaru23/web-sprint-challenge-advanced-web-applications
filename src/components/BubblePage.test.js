import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchColors as mockFetchColors} from '../helpers/fetchColors';

jest.mock('../helpers/fetchColors');
const testColors = {data: [{ color: 'aqua', code: { hex: '#00ffff'}}, { color: 'limegreen', code: { hex: '#99ddbc'}}]};

test("Renders BubblePage without errors", () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(testColors);
  render(<BubblePage/>);
});

test("Fetches data and renders the bubbles on mounting", async() => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(testColors);
  render(<BubblePage/>);

  const aqua = await screen.findByText(/aqua/i);
  expect(blue).toBeInTheDocument;

  const limegreen = await screen.findByText(/limegreen/i);
  expect(limegreen).toBeInTheDocument;

  const black = await screen.queryByText(/black/i);
  expect(black).not.toBeInTheDocument;

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading