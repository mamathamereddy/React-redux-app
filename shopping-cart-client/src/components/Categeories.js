import React from "react";
//import { connect } from "react-redux";
// import { getNumbers } from "../actions/getAction";
import {Link} from 'react-router-dom';
import Search from '../components/Search'
import "../App.css";

const Categeories = () => {
  
  return (
    <div className="category-items">
        <ul>
          <li>
            <Link to="/search/jeans/" className="category-items-list">Jeans</Link>
          </li>
          <li>
            <Link to="/search/watches" className="category-items-list">Watches</Link>
          </li>
          <li>
            <Link to="/search/jackets" className="category-items-list">Jackets</Link>
          </li>
          <li>
            <Link to="/search/shoes" className="category-items-list">shoes</Link>
          </li>
          <li>
            <Link to="/search/bags" className="category-items-list">Handbags</Link>
          </li>
          <li>
          <Search />
          </li>
         </ul>
      
    </div>
  );
};

export default Categeories;
