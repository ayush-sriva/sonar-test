import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import FilterChips from "./index";
it("renders mui icons", () => {
  render(<FilterChips text="UI/UX Designer" />);
  const testIcon = screen.getByTestId("chips");
  expect(testIcon).toBeInTheDocument();
});