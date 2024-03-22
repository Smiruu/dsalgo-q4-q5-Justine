import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, searchProducts } from "../actions/productActions";
import Product from "../Components/Product";
import Loader from "../Components/Loader";
import Message from "../Components/Message";

function HomeScreen() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false); // State to track whether search has been performed
  const productList = useSelector((state) => state.productSearch); // Accessing productSearch state instead of productList
  const { products, loading, error } = productList;

  useEffect(() => {
    // Fetch all products when the component mounts
    dispatch(listProducts());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (query.trim() !== "") {
        dispatch(searchProducts(query));
        setSearched(true); // Set searched state to true when search is performed
      } else {
        // If query is empty, fetch all products again
        dispatch(listProducts());
        setSearched(false); // Set searched state to false when search is cleared
      }
    }
  };

  useEffect(() => {
    console.log("Products in state:", products); // Log the updated products state
  }, [products]); // Log the products array whenever it changes

  return (
    <div>
      <h1>Latest Products</h1>
      <input
        type="text"
        placeholder="Search Products..."
        value={query}
        onChange={handleSearchChange}
        onKeyPress={handleSearch} // Call handleSearch when Enter key is pressed
      />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          {searched && products.length === 0 && (
            <Message>No products found</Message>
          )}
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}

export default HomeScreen;
