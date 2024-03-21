import { render, screen } from "@testing-library/react";
import GenerateCards from "../components/BooklistComponent";
import { allGenres } from "../components/CardComponent";

const selectedGenre = 0;

test("renders booklist cards", () => {
  render(<GenerateCards selectedGenre={selectedGenre} />);
  const cardId = screen.getAllByTestId("cardtest");
  expect(cardId).toHaveLength(10);
});