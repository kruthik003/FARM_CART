import React from "react";
import "./Product.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 345,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
});

function Product({ id, title, image, price, rating }) {
  const classes = useStyles();

  return (
    <Card className="product" variant="outlined">
      <CardContent className="product__info">
        <Typography>{title}</Typography>
        <Typography className="product__price">
          <small>Rp.</small>
          <strong>{price}</strong>
        </Typography>
        <Typography className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </Typography>
      </CardContent>

      <img src={image} />

      <button>Add to Basket</button>
    </Card>
  );
}

export default Product;
