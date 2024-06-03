import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import images from "../../Image"

function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className = 'header'>
      <Link to = '/'>
      <img className = 'header_logo' src = {images['logo.png']} alt = ""/>
      </Link>
    <div className = 'header_search'>
        <input className = 'header_searchInput' type = 'text'/>
        <SearchIcon className = 'header_searchIcon'/>
    </div>
    <div className = 'header_nav'>
    <Link to = '/login' style = {{textDecoration : 'none'}}>
      <div className = 'header_option'>
          <span className = 'header_optionLineOne'>
            Hello Guest
          </span>
          <span className = 'header_optionLineTwo'>
            Sign In
          </span>
      </div>
      </Link>
      <Link to = '/orders' style = {{textDecoration : 'none'}}>
      <div className = 'header_option'>
      <span className = 'header_optionLineOne'>
            Returns
          </span>
          <span className = 'header_optionLineTwo'>
            & Orders
          </span>
      </div>
      </Link>
      <div className = 'header_optionBasket'>
        <Link to = '/checkout' style = {{textDecoration : 'none'}}><ShoppingCartIcon /></Link>
        <span className = "header_optionLineTwo header_basketCount"> {basket?.length} </span>
      </div>
    </div>
    </div>
  )
}

export default Header