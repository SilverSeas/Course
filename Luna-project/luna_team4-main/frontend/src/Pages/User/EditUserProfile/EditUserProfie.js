import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditTitle, Container, Form, Label, Input, TextArea, SaveButton } from './EditUserProfileStyles';
import OrangeButton from "../../../Components/Button";
import {updateUserData} from "../../../Redux/Slices/user";
import lunaApi from "../../../Axios/lunaApi";


const EditUserProfile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user.userData)
  const [username, setUsername] = useState(currentUser.username);
  const [firstName, setFirstName] = useState(currentUser.first_name);
  const [lastName, setLastName] = useState(currentUser.last_name);
  const [email, setEmail] = useState(currentUser.email);
  const [location, setLocation] = useState(currentUser.location);
  const [phone, setPhone] = useState(currentUser.phone);
  const [thingsILove, setThingsILove] = useState(currentUser.things_i_love);
  const [description, setDescription] = useState(currentUser.description);

  const [user, setUser] = useState(currentUser);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const newProfileData = {
      username: username,
      first_name: firstName,
      last_name: lastName,
      email: email,
      location: location,
      phone: phone,
      things_i_love: thingsILove,
      description: description,
    }

    const response2 = await lunaApi.patch("/users/me/", newProfileData,
      {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
'             Content-Type': 'application/json'
          }
      })
    try {
      console.log(response2.data)
      dispatch(updateUserData(response2.data))
      // setUser(user);
    } catch (error) {
        throw error.response.data;
        // console.log(error)
    }

  };

  /*
useEffect(() => {
        setUsername(user.username);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
        setLocation(user.location);
        setPhone(user.phone);
        setThingsILove(user.things_i_love);
        setDescription(user.description);
      }, [user]);
*/

  return (
    <Container>
      <EditTitle>EDIT USERPROFILE</EditTitle>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label htmlFor="first-name">First name</Label>
        <Input
          type="text"
          id="first-name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <Label htmlFor="last-name">Last name</Label>
        <Input
          type="text"
          id="last-name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <Label htmlFor="email">E-Mail</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label htmlFor="location">Location</Label>
        <Input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <Label htmlFor="phone">Phone</Label>
        <Input
          type="text"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <Label htmlFor="things-i-love">Things I love</Label>
          <Input
            type="text"
            id="things-i-love"
            defaultValue={currentUser.things_i_love || ''}
            onChange={(e) => setThingsILove(e.target.value)}/>


        <Label htmlFor="description">Description</Label>
        <TextArea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <SaveButton>
          <OrangeButton textInput={'Save'} type="submit"></OrangeButton>
        </SaveButton>
        </Form>
    </Container>
  );
};

export default EditUserProfile;

