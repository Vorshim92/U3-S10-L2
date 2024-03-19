import React, { useState } from "react";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import romance from "../json/romance.json";
import fantasy from "../json/fantasy.json";
import horror from "../json/horror.json";
import history from "../json/history.json";
import scifi from "../json/scifi.json";
import GenerateCards from "./BooklistComponent";
import CommentArea from "./CommentArea";

const allGenres = [romance, fantasy, horror, history, scifi];

const DropdownList = () => {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedButton, setSelectedButton] = useState("Seleziona una Categoria");

  const handleItemClick = (index) => {
    setSelectedGenre(index);
    setSelectedBook(null);
  };

  const handleBookClick = (book, event) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.remove("selected");
    });

    const card = event.target.closest(".card");
    if (card) {
      card.classList.add("selected");
    }
    setSelectedBook(book);
  };

  const handleChange = (event) => {
    setSelectedButton(event.target.innerText);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedButton}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(0);
              handleChange(e);
            }}
          >
            Romance
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(1);
              handleChange(e);
            }}
          >
            Fantasy
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(2);
              handleChange(e);
            }}
          >
            Horror
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(3);
              handleChange(e);
            }}
          >
            History
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => {
              handleItemClick(4);
              handleChange(e);
            }}
          >
            Sci-fi
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Container>
        <Row className="justify-content-center">
          <Col sm={6}>{selectedGenre !== null && <GenerateCards selectedGenre={selectedGenre} onBookClick={(book, event) => handleBookClick(book, event)} />}</Col>
          <Col sm={6}>{selectedBook !== null && <CommentArea bookId={selectedBook} />}</Col>
        </Row>
      </Container>
    </>
  );
};

export { allGenres };
export default DropdownList;
