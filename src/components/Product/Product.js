import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
const open = () =>{
  window.open('./Product.html',"self");
}
function Product({ id,title,image,price,rating }) {
  const [{basket},dispatch] = useStateValue();
  console.log("This is basket",basket);
  const addToBasket = () => {

        console.log("Add to basket clicked!!");
        dispatch ({
        type : 'ADD_TO_BASKET',
        item : {
          id : id,
          title : title,
          image : image,
          price : price,
          rating : rating,
        },
      });
  };
  return (
    <div className = "product">
      <img src = {image} alt = ""/>
      <div className = 'product_info'>
        <p>{title}</p>
        <p className = 'product_price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className = 'product_rating'>
          {Array(rating)
          .fill().map((_,i) => (
            <p>⭐</p>
          ))}
        </div>
      </div>
      <button onClick = {addToBasket} >Add to basket</button>
    </div>
  );
}

export default Product;