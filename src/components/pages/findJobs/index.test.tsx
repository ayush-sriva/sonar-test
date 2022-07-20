import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import FindJobs from "./index";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import axios from "axios";
jest.mock("axios");
it("renders navbar", () => {
  render(
    <MemoryRouter>
      <FindJobs jobs={[]} setJobs={jest.fn()} />
    </MemoryRouter>
  );
  const testIcon = screen.getByTestId("findJobs");
  expect(testIcon).toBeInTheDocument();
});


