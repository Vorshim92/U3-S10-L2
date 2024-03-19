import React, { Component } from "react";
import { Dropdown, Container, Row, Col } from "react-bootstrap";
import romance from "../json/romance.json";
import fantasy from "../json/fantasy.json";
import horror from "../json/horror.json";
import history from "../json/history.json";
import scifi from "../json/scifi.json";
import GenerateCards from "./BooklistComponent";
import CommentArea from "./CommentArea";

const allGenres = [romance, fantasy, horror, history, scifi];

class DropdownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGenre: null,
      selectedBook: null,
      selectedButton: "Seleziona una Categoria",
    };
  }

  handleItemClick = (index) => {
    this.setState({
      selectedGenre: index,
      selectedBook: null,
    });
  };

  handleBookClick = (book, event) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.remove("selected");
    });

    const card = event.target.closest(".card");
    if (card) {
      card.classList.add("selected");
    }
    this.setState({
      selectedBook: book,
    });
  };

  handleChange = (event) => {
    this.setState({
      selectedButton: event.target.innerText,
    });
  };

  render() {
    const { selectedGenre, selectedBook, selectedButton } = this.state;

    return (
      <>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedButton}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item
              onClick={(e) => {
                this.handleItemClick(0);
                this.handleChange(e);
              }}
            >
              Romance
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => {
                this.handleItemClick(1);
                this.handleChange(e);
              }}
            >
              Fantasy
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => {
                this.handleItemClick(2);
                this.handleChange(e);
              }}
            >
              Horror
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => {
                this.handleItemClick(3);
                this.handleChange(e);
              }}
            >
              History
            </Dropdown.Item>
            <Dropdown.Item
              onClick={(e) => {
                this.handleItemClick(4);
                this.handleChange(e);
              }}
            >
              Sci-fi
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Container>
          <Row className="justify-content-center">
            <Col sm={6}>{selectedGenre !== null && <GenerateCards selectedGenre={selectedGenre} onBookClick={(book, event) => this.handleBookClick(book, event)} />}</Col>
            <Col sm={6}>{selectedBook !== null && <CommentArea bookId={selectedBook} />}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export { allGenres };
export default DropdownList;
