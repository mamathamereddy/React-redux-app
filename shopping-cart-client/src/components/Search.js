import React from 'react'
import searchAction from  "../actions/searchAction"
import { connect } from "react-redux";

const Search = (props) => {
    console.log(props)
    return (
        <input type="text"  placeholder=" Search for..."
        onChange={(e)=>searchAction(e.target.value)}/>
    )
}

const mapStateToProps = (state) => ({
    productsProps: state.search,
  });

export default connect(mapStateToProps,{searchAction}) (Search)