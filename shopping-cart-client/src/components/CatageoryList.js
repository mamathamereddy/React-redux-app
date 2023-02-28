import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getCatageoryList } from "../redux/actions/getCatageoryList";
import { addToBasket } from "../redux/actions/addAction";
import Card from "../components/Card";
import Fade from "react-reveal";
import Button from "./Button";

function CatageoryList(props) {
  console.log(props);

  const { getCatageoryList, addToBasket } = props;
  const { categoryList } = props.productsProps;
  console.log(categoryList);
  const { CategorySlug, genderSlug } = useParams();
  // console.log(CategorySlug);
  // console.log(genderSlug);

  useEffect(() => {
    getCatageoryList(CategorySlug, genderSlug);
  }, [CategorySlug, getCatageoryList]);

  return (
    <Fade bottom cascade>
      <div className="container">
        {categoryList
          ? categoryList.map((product) => {
              return (
                <div className="products_container">
                  <Card products={product} />
                  <Button
                    type="button"
                    onClick={addToBasket}
                    text="Add to cart"
                    className="cart"
                  />
                </div>
              );
            })
          : `Sorry cannot find any products for this category`}
      </div>
    </Fade>
  );
}
const mapStateToProps = (state) => ({
  productsProps: state.productsState,
});

export default connect(mapStateToProps, { addToBasket, getCatageoryList })(
  CatageoryList
);
