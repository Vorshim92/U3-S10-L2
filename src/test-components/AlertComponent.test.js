import { render, screen } from "@testing-library/react";
import AlertComponent from "../components/AlertComponent";

test("renders welcome message", () => {
  render(<AlertComponent />);
  const headingElement = screen.getByText(/Benvenuto nel nostro negozio!/i);
  expect(headingElement).toBeInTheDocument();
});
