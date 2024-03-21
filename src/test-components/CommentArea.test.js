import { render, screen } from "@testing-library/react";
import CommentArea from "../components/CommentArea";

test("renders booklist cards", () => {
  render(<CommentArea bookId={"asfafasf"} />);
  const headingElement = screen.getByText(/COMMENTS AREA/i);
  expect(headingElement).toBeInTheDocument();
});
