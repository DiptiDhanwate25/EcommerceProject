import React, { useState } from "react";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Pagination,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function App() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate indexes for items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="m-2">
      <Container>
        <Row className="mb-3">
          {currentItems.map((item) => (
            <Col key={item.id} md>
              <Card>
                <Card.Img src={item.img} variant="top" alt="..." />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button onClick={() => dispatch(addToCart(item))}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Pagination */}
        <Pagination>
          {items.length > itemsPerPage &&
            Array(Math.ceil(items.length / itemsPerPage))
              .fill(null)
              .map((_, index) => (
                <Pagination.Item
                  key={index}
                  active={currentPage === index + 1}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
        </Pagination>
      </Container>
    </div>
  );
}
