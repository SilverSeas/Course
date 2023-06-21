import { Outlet } from "react-router-dom";
import arrow from "../../Assets/arrow.svg";
import { Grid, Main, MainMenu, SearchBar, SearchBarContainer, SearchCategory, Tab } from "./SearchStyles";
import { useEffect, useState } from "react";
import lunaAPI from "../../Axios/lunaApi";
import SearchFilterComponent from "../../Components/SearchFilterComponent";
import CategoryList from "./CategoryList";

const Search = () => {

  // looks for search input
  const [searchText, setSearchText] = useState('')
  // Restaurants
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [listOfRestaurantFiltered, setListOfRestaurantsFiltered] = useState([])
  // Users
  const [listOfUsers, setListOfUsers] = useState([])
  const [listOfUsersFiltered, setListOfUsersFiltered] = useState([])
  // Reviews
  const [listOfReviews, setListOfReviews] = useState([])
  const [listOfReviewsFiltered, setListOfReviewsFiltered] = useState([])

    //Click on Category
    const [categoryClicked, setCategoryClicked] = useState(false)
    const [category, setCategory] = useState("Select Category")

    const [qtyReviews, setQtyReviews] = useState({})

    const handleCategoryClicked = () => {
        setCategoryClicked(!categoryClicked)
    }


  const searchHandler = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
      if(searchText.length >= 2){
          let listRestFiltered = SearchFilterComponent(searchText, listOfRestaurants)
          setListOfRestaurantsFiltered(listRestFiltered)
          let listUsFiltered = SearchFilterComponent(searchText, listOfUsers)
          setListOfUsersFiltered(listUsFiltered)
          let listRevFiltered = SearchFilterComponent(searchText, listOfReviews)
          setListOfReviewsFiltered(listRevFiltered)
      } else {
          setListOfRestaurantsFiltered(listOfRestaurants)
          setListOfUsersFiltered(listOfUsers)
          setListOfReviewsFiltered(listOfReviews)
      }

  }

  const obtainAllRestaurants = async () => {
    let response = await lunaAPI.get(`/restaurants/`)
    try {
      setListOfRestaurants(response.data)
      setListOfRestaurantsFiltered(response.data)
    } catch (error) {
      console.log(error)
    }
  }

    const obtainAllUsers = async () => {
    let response = await lunaAPI.get(`/search/?search_string=&type=users`)
        try {
            setListOfUsers(response.data)
            setListOfUsersFiltered(response.data)

        } catch (error) {
            console.log(error)
        }
    }

  const obtainAllReviews = async () => {
      let response = await lunaAPI.get(`/search/?search_string=&type=reviews`)
        try {
            setListOfReviews(response.data)
            setListOfReviewsFiltered(response.data)
            setReviewsByUser(await Promise.all(response.data))
        } catch (error) {
            console.log(error)
        }

    }

    const filterByCategory = (category) =>{
        if (category == "ALL"){
            setListOfRestaurantsFiltered(listOfRestaurants)
            setCategory("Select Category")
        } else {
            let toSearch = category.toLowerCase()
            setCategory(category)
            let listFiltered = []
            for(let i=0; i<listOfRestaurants.length; i++) {
                if(String(listOfRestaurants[i]['category']).toLowerCase().includes(toSearch)) {
                  listFiltered.push(listOfRestaurants[i]);
            }
        }
        setListOfRestaurantsFiltered(listFiltered)
        }

    }

    const setReviewsByUser = (list) => {
        const reviewsByUser = {
        }
        for (let i = 0; i <= list.length -1;i++){
            if (reviewsByUser.hasOwnProperty(list[i].reviewed_by_user.id)){
                reviewsByUser[list[i].reviewed_by_user.id] += 1
            } else {
                reviewsByUser[list[i].reviewed_by_user.id] = 1
            }
        }
        setQtyReviews(reviewsByUser)
    }

  useEffect(() => {
    obtainAllRestaurants()
    obtainAllUsers()
    obtainAllReviews()

  }, [])

  return (
    <div>
      <SearchBarContainer>
        <SearchBar>
          <input placeholder="Search..." onChange={searchHandler} />
        </SearchBar>
        <SearchCategory onClick={handleCategoryClicked}>
          <p>{category}</p>
          <img src={arrow}></img>
        </SearchCategory>
          {categoryClicked ?
          <CategoryList categoryFunction={filterByCategory}/>:
          ""}
      </SearchBarContainer>
      <Main>
        <MainMenu>
          <Tab to='restaurants'>Restaurants</Tab>
          <Tab to='reviews'>Reviews</Tab>
          <Tab to='users'>Users</Tab>
        </MainMenu>
        <Grid>
          <Outlet context={[listOfRestaurantFiltered, listOfUsersFiltered, listOfReviewsFiltered, qtyReviews]} />
        </Grid >
      </Main >
    </div >
  );
}

export default Search;

