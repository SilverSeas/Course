import React from 'react'
import { SiteWrapper } from './AddRestaurant.styled'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'
import CreateRestaurant from '../../Components/CreateRestaurant/CreateRestaurant'
import {ButtonRegistrationDiv} from "../Registration/Signup/Signup.style";
import OrangeButton from "../../Components/Button";

const AddRestaurant = () => {
  return (
    <SiteWrapper>
      <CreateRestaurant/>
    </SiteWrapper>
  )
}

export default AddRestaurant
