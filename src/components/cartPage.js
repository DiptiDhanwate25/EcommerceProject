import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import {
  Card,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <div>
      <section className="h-100 gradient-custom">
        <Container className="py-5">
          <Row className="d-flex justify-content-center my-4">
            <Col md={8}>
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </Card.Header>
                <Card.Body>
                  {cart?.map((data) => (
                    <div key={data.id} className="row">
                      <Col lg={3} md={12} className="mb-4 mb-lg-0">
                        <div className="bg-image hover-overlay hover-zoom ripple rounded">
                          <Card.Img
                            src={data.img}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                        </div>
                      </Col>

                      <Col lg={5} md={6} className="mb-4 mb-lg-0">
                        <p>
                          <strong>{data.title}</strong>
                        </p>

                        <Button
                          variant="primary"
                          size="sm"
                          className="me-1 mb-2"
                          onClick={() => dispatch(removeItem(data.id))}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>

                      <Col lg={4} md={6} className="mb-4 mb-lg-0">
                        <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <Button
                            variant="primary"
                            className="px-3 me-2"
                            onClick={() => dispatch(decreaseItemQuantity(data.id))}
                          >
                            <i className="fas fa-minus"></i>
                          </Button>

                          <div className="form-outline">
                            <input
                              id={`form-${data.id}`}
                              min="0"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null}
                            />
                            <label className="form-label" htmlFor={`form-${data.id}`}>
                            
                            </label>
                          </div>

                          <Button
                            variant="primary"
                            className="px-3 ms-2"
                            onClick={() => dispatch(increaseItemQuantity(data.id))}
                          >
                            <i className="fas fa-plus"></i>
                          </Button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong>{data.price}</strong>
                        </p>
                      </Col>
                      <hr className="my-4" />
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">Summary</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <Button
                    variant="primary"
                    size="lg"
                    block
                  >
                    Go to checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CartPage;
