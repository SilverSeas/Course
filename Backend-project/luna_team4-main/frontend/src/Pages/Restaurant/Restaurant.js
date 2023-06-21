import RatingStars from '../../Components/RatingStars/RatingStars.js';
import Button from '../../Components/Button/index';
import mapImg from '../../Assets/temp/restaurant-map.jpg';
import pinImg from '../../Assets/pin.svg';
import webImg from '../../Assets/web.svg';
import phoneImg from '../../Assets/phone.svg';
import moneyImg from '../../Assets/money.svg';
import clockImg from '../../Assets/clock.svg';
import { BodyContainer, ButtonsContainer, ButtonWraper, ButtonWraperSmall, Category, ContactContainer, ContactDetails, FilterBar, HeaderContainer, IconTextContainer, Name, NoReviewsText, RatingContainer, Separator, TitleContainer } from './RestaurantStyles.js';
import ReviewsList from './ReviewsList/ReviewsList.js';
import lunaAPI from '../../Axios/lunaApi.js';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateRestaurantData } from '../../Redux/Slices/restaurant.js';
import SearchFilterComponent from '../../Components/SearchFilterComponent/index.js';


const Restaurant = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { restaurantID } = useParams();
  const [restaurantData, setRestaurantData] = useState({})
  const [listOfReviews, setListOfReviews] = useState([]);
  const [listOfReviewsFiltered, setListOfReviewsFiltered] = useState([]);
  const [counter, setCounter] = useState(0);

  //------------- FILTER BAR -------------
  const handleFilterBar = (e) => {
    e.preventDefault();
    const searchText = e.target.value;
    if (searchText.length >= 2) {
      let listReviewsFiltered = SearchFilterComponent(searchText, listOfReviews);
      setListOfReviewsFiltered(listReviewsFiltered);
    } else {
      setListOfReviewsFiltered(listOfReviews);
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      return;
    }
    //------------ GET RESTAURANT BY ID --------------
    const getRestaurantByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`restaurants/${restaurantID}/`, config);
        setRestaurantData(response.data)
        dispatch(updateRestaurantData(response.data))
      } catch (error) {
        console.log(error);
      }
    }
    getRestaurantByID();

    //----------- GET REVIEWS BY RESTAURANT ID -------------
    const getReviewsFromRestaurantByID = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        };

        const response = await lunaAPI.get(`reviews/restaurant/${restaurantID}/`, config);
        setListOfReviews(response.data)
        setListOfReviewsFiltered(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsFromRestaurantByID();
  }, [counter]);

  const handleNewReviewComment = () => {
    setCounter((prev) => prev + 1);
  }

  const handleWriteReviewClick = () => {
    navigate(`/addreview/${restaurantData.id}/`)
  }

  return (
    <div>
      <HeaderContainer img={restaurantData?.image}>
        <TitleContainer>
          <Name>{restaurantData?.name}</Name>
          <Category>{restaurantData?.category}</Category>
          <RatingContainer>
            <RatingStars rating={restaurantData?.average_rating} isVoting={false} />
            <p>{restaurantData?.reviews?.length} reviews</p>
          </RatingContainer>
        </TitleContainer>
        <ContactContainer>
          <img src={mapImg}></img>
          <ContactDetails>
            <IconTextContainer>
              <img src={pinImg}></img>
              <p>{restaurantData.street}</p>
            </IconTextContainer>
            <IconTextContainer>
              <img src={phoneImg}></img>
              <p>{restaurantData.phone}</p>
            </IconTextContainer>
            <IconTextContainer>
              <img src={webImg}></img>
              <p>{restaurantData.website}</p>
            </IconTextContainer>
          </ContactDetails>
        </ContactContainer>
      </HeaderContainer>
      <BodyContainer>
        <div>
          <FilterBar>
            <input placeholder='Filter list...' onChange={handleFilterBar}></input>
            <ButtonWraperSmall>
              <Button textInput={'FILTER'} />
            </ButtonWraperSmall>
          </FilterBar>
          {
            restaurantData.reviews?.length !== 0 ?
              <ReviewsList restaurantID={restaurantID} reviews={listOfReviewsFiltered} onNewComment={handleNewReviewComment} />
              :
              <NoReviewsText>
                No reviews yet
              </NoReviewsText>
          }
        </div>
        <div>
          <IconTextContainer>
            <img src={clockImg}></img>
            <p>{restaurantData.opening_hours}</p>
          </IconTextContainer>
          <Separator />
          <IconTextContainer>
            <img src={moneyImg}></img>
            <p>Price: {restaurantData.price_range}</p>
          </IconTextContainer>
          <ButtonsContainer>
            <ButtonWraper>
              <Button textInput={'WRITE A REVIEW'} onClickAction={handleWriteReviewClick} />
            </ButtonWraper>
            <ButtonWraper>
              <Button textInput={'EDIT DATA'} />
            </ButtonWraper>
          </ButtonsContainer>
        </div>
      </BodyContainer >
    </div >
  );
}

export default Restaurant;  