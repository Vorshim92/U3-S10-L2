import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { allGenres } from "./CardComponent";

function GenerateCards({ selectedGenre, onBookClick }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h2 className="my-3 text-center">Ecco i nostri Libri {allGenres[selectedGenre][0].category}!!</h2>
      <input type="text" className="mb-3 " placeholder="Cerca per titolo..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <Row className="justify-content-center">
        {allGenres[selectedGenre]
          .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .slice(0, 10)
          .map((book, i) => (
            <Col className="mb-3" xs={6} key={book.asin}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={book.img} style={{ height: "400px" }} />
                <Card.Body>
                  <Card.Title style={{ height: "100px", fontSize: "1.25rem" }}>{book.title}</Card.Title>
                  <Card.Text style={{ fontSize: "1rem", marginBottom: "1rem" }}>
                    Some quick example text to build on the card title and make up the bulk of the card's content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{book.category}</small>
                    <small className="text-muted">{book.price}€</small>
                  </div>
                  <div className="mt-2">
                    <Button variant="primary" onClick={(event) => onBookClick(book.asin, event)}>
                      VISUALIZZA
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  );
}
export default GenerateCards;
