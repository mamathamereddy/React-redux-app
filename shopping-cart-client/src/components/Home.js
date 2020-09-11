import React from 'react';
import{card} from 'react-bootstrap';
import dress from '../images/shopping.png';
import {connect} from 'react-redux';
import {addToBasket} from '../actions/addAction'

const Home=(props)=> {
  console.log(props)
   return (
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
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
</Card>
   )
}

export default connect(null,{addToBasket}) (Home);



