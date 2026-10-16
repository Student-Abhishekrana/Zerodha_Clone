import { render, screen } from "@testing-library/react";
import Summary from "./components/Summary";

test("renders the dashboard summary", () => {
  render(<Summary />);
  expect(screen.getByText("Summary")).toBeInTheDocument();
  expect(screen.getByText("Available margin")).toBeInTheDocument();
});
