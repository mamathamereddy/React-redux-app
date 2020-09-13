import React,{useEffect} from 'react';
import{Card} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addToBasket} from '../actions/addAction';
import {getProducts} from '../actions/getProducts'

const Home=({productsProps,getProducts,addToBasket})=> {
  // {productsProps,getProducts}
   console.log(productsProps)

  useEffect(()=>{
    getProducts();
  },[])
   return (
<div className="container">
   
   {productsProps.productsList?
      productsProps.productsList.map(product=>{
        return(
          <div className="image">
          <Card style={{ width: '15rem',marginLeft: ' 1rem',marginTop:'2rem'}}>
        <Card.Img variant="top" src= {product.image} alt={product.className} width="60%" height="150px"/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Title>{product.brand}</Card.Title>
          <Card.Text>{product.price} DKK</Card.Text>
        <Card.Text>{product.description}</Card.Text>
        <a onClick={addToBasket} className="addtocart cart1" href="#">Add to cart</a>
        </Card.Body>
        
        </Card>
        </div>
        )

      }):null
      } 
  

</div>



    )} 

  







/*<div className="container">
<div className="image">
            <img src={dress} alt="dress"/>
            <h3>hoodie</h3>
            <h3>230Dkk</h3>
            <a onClick={props.addToBasket} className="addtocart cart1" href="#">Add to cart</a>
  
</div>
<div className="image">
            <img src={dress} alt="dress"/>
            <h3>hoodie</h3>
            <h3>230Dkk</h3>
            <a onClick={props.addToBasket} className="addtocart cart2"href="#" >Add to cart</a>
  
</div>
<div className="image">
            <img src={dress} alt="dress"/>
            <h3>hoodie</h3>
            <h3>230Dkk</h3>
            <a onClick={props.addToBasket} className="addtocart cart3" href="#" >Add to cart</a>
  
</div>

</div>*/
 
   

const mapStateToProps=state=>({
  productsProps:state.productsState

})
export default connect(mapStateToProps,{addToBasket,getProducts}) (Home);



