import { render, screen, fireEvent } from "@testing-library/react";
import GenerateCards from "../components/BooklistComponent";

const selectedGenre = 0;

test("renders booklist cards", () => {
  render(<GenerateCards selectedGenre={selectedGenre} />);
  const cardId = screen.getAllByTestId("cardtest");
  expect(cardId).toHaveLength(10);
});

test("renders booklist cards filtered by title", () => {
  render(<GenerateCards selectedGenre={0} />);
  const searchInput = screen.getByPlaceholderText("Cerca per titolo...");
  fireEvent.change(searchInput, { target: { value: "A Reaper at the Gates (Ember Quartet, Book 3)" } });
  const cardId = screen.getAllByTestId("cardtest");
  expect(cardId).toHaveLength(1);
});
