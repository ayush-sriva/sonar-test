import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import JobSearch from "./index";

it("renders Job Search Bar", () => {
  render(<JobSearch />);
  const testIcon = screen.getByTestId("jobsearch");
  expect(testIcon).toBeInTheDocument();
});
