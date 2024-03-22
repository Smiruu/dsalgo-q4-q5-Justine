import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function Product({ product }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Link to={`/product/${product._id}`}>
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.name}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>

          <Typography className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="#f8e825"
            />
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="my-2">
            Category: {product.category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Brand: {product.brand}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Product;
