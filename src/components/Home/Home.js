import React from "react";
import Product from "../Product/Product";
import "./Home.css";
import images from '../../Image'

function Home() {
  return (
    <div className = 'home'>
      <div className = 'home_container'>
        <img className = 'home_image' src = {images['home_image.webp']} alt = ""/>
        <div className = 'home_row'>
            <Product title = 'Radish' price = {19.99}  image = {images['radish.jpeg']} rating = {3} id = '1150130'/>
            <Product title = 'Banana' price = {23.33} image = {images['banana.jpeg']} rating = {5} id = '1150129'/>
        </div>
        </div>
        <div className = 'home_container'>
        <img className = 'home_image' src = {images['home_image_1.webp']} alt = ""/>
        <div className = 'home_row'>
            <Product title = 'apple' price = {20.44} image = {images['apple.jpeg']} rating = {6} id = '1150131'/>
            <Product title = 'mango' price = {23.43} image = {images['mango.jpeg']} rating = {4} id = '1150132'/>
        </div>
      </div>
    </div>
  );
}

export default Home