import React from "react";
import RestaurantsComponent from "./RestaurantsComponent";
import { Title, Container, ReviewsTitleDateDiv } from "../Reviews/ReviewStyles";
import OrangeButton from "../../../Components/Button";
import { RestaurantButtonDiv } from "./RestaurantsComponent/RestaurantStyles";
import { NavLink } from "react-router-dom";

const Restaurant = () => {
  return (
    <div>
      <Container>
        <ReviewsTitleDateDiv>
          <Title>Restaurants</Title>
        </ReviewsTitleDateDiv>
        <RestaurantsComponent />
        <RestaurantButtonDiv>
          <NavLink to="/AddRestaurant/">
            <OrangeButton textInput={"Create Restaurant"} />
          </NavLink>
        </RestaurantButtonDiv>
      </Container>
    </div>
  );
};

export default Restaurant;
