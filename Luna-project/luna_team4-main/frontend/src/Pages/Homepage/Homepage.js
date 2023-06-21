import { SearchWraper, ButtonWraper, Grid, HomeBanner, HomeBody, Main, Underline, SearchResults, SearchedRestaurant, Street, Name } from "./HomepageStyles";
import { useEffect, useState } from "react";
import lunaAPI from "../../Axios/lunaApi";
import RestaurantCard from "../Search/RestaurantsGrid/RestaurantCard/RestaurantCard";
import Button from '../../Components/Button'
import SearchFilterComponent from "../../Components/SearchFilterComponent";
import RatingStars from "../../Components/RatingStars/RatingStars";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfRestaurantFiltered, setListOfRestaurantsFiltered] = useState([]);


  //------------- GET ALL RESTAURANTS -------------
  useEffect(() => {
    const getFourBestRatedRestaurants = async () => {
      try {
        const response = await lunaAPI.get(`/restaurants/`)
        setListOfRestaurants(response.data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getFourBestRatedRestaurants();
  }, [])

  //------------- SORT AND FILTER 4 TOP RATED RESTAURANTS -------------
  const sortedList = listOfRestaurants?.sort((a, b) => b.average_rating - a.average_rating);
  const topFourList = sortedList?.slice(0, 4);

  //------------- SEARCH BAR -------------
  const searchHandler = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    if (searchText.length >= 2) {
      let listRestFiltered = SearchFilterComponent(searchText, listOfRestaurants);
      setListOfRestaurantsFiltered(listRestFiltered);
    } else {
      setListOfRestaurantsFiltered(listOfRestaurants);
    }
  }

  //------------- CLICK ON SEARCHED RESTAURANT AND NAVIGATE TO RESTAURANT PAGE-------------
  const handleSearchedRestaurantClick = (restaurantID) => {
    navigate(`/restaurant/${restaurantID}/`)
  }

  return (
    <Main>
      <HomeBanner>
        <div>
          <SearchWraper>
            <input placeholder='Search...' onChange={searchHandler}></input>
            <ButtonWraper>
              <Button textInput={'Search'} />
            </ButtonWraper>
          </SearchWraper>
          {
            listOfRestaurantFiltered.length > 0 ?
              <SearchResults>
                {
                  listOfRestaurantFiltered.map(restaurant => {
                    return <SearchedRestaurant key={restaurant.id} onClick={() => handleSearchedRestaurantClick(restaurant.id)}>
                      <div>
                        <Name>{restaurant.name}</Name>
                        <Street>{restaurant.street}</Street>
                      </div>
                      <RatingStars rating={restaurant.average_rating} isVoting={false} />
                    </SearchedRestaurant>
                  })
                }
              </SearchResults>
              :
              null
          }
        </div>
      </HomeBanner>

      <HomeBody>
        <p>Best rated restaurants</p>
        <Underline></Underline>
        <Grid>
          {
            topFourList?.map(restaurant => {
              return <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            })
          }
        </Grid>
      </HomeBody>
    </Main >
  );
}

export default Homepage;