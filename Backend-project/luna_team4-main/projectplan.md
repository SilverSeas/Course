# Project Plan for The Luna Project

## Overview

The Luna Project is a web application that allows users to create and view restaurants, write reviews, and leave comments.
The project will be developed using Django and React and will follow the wireframes provided by Constructor.
## Tech Stack
### Frontend:

- React with Redux
- Styled Components
### Backend:

- Django
- Django REST framework
- PostgreSQL (Database)
### Web Ops:

- GitLab
- Docker
- DigitalOcean
### Server:

- Nginx
- Ubuntu

## Features

Features:

1. User authentication and account management
- A user can create an account with only an email address.
- A user can update their profile with their username, first name, last name, email, password, location, phone, and profile description.
- A user can log in, log out, and delete their account.
2. Anonymous user actions
- View the list of restaurants
- View the details of a restaurant
- View the contact page of the Luna project
- View the about page of the Luna project
- Search/filter for restaurants by string or category
- Search/filter for reviews by string or category of the restaurant
3. Registered user actions
- Create a restaurant
- Create a review of a restaurant
- View/update/delete restaurant reviews (only ones that the registered user wrote)
- Like/remove like a restaurant review
- Create a comment on a restaurant review
- Like/remove like a comment
- Reset their password
- Update their user profile
- Delete their profile
- Delete the restaurant they created

## Backend task breakdown and estimation

1. Database design (4 hours)
- Create UML diagram for database tables and relationships
- Implement tables and relationships in Django models

2. User authentication and email validation (4-5 hours)
- Create user registration and email validation endpoints
- Integrate daveque/django-rest-framework-simplejwt for JWT authentication
- Implement password reset with email validation

3. User profile management (4-5 hours)
- Create user profile endpoint for getting and updating user information

4. Restaurant creation, viewing, updating, and deletion (1 day)
- Create restaurant creation and viewing endpoints
- Implement restaurant updating and deletion with owner or admin permission

5. Restaurant search (2-3 hours)
- Implement post search endpoint

6. Like restaurants and like restaurant reviews (2-3 hours)
- Implement post liking and sharing endpoints

7. Comment on restaurant reviews (3-4 hours)
- Implement comment creation and viewing endpoints

8. Testing plan (undefined)
- Write unit tests for each endpoint
- Write integration tests for each feature
- Test email notification system

9. Deployment plan (1 day)
- Configure Docker containers for application, Nginx, and Postgres
- Set up environment variables and configuration files
- Test deployment process

## Frontend Task Breakdown and Estimation

1. Setup and Basic Components (8 hours)
- Setup development environment and create React app (2 hours)
- Create basic components: header, footer, navigation, and landing page (6 hours)
2. User Authentication and Account Management (16 hours)
- Create login and signup pages with form validation (8 hours)
- Integrate Redux for state management (2 hours)
- Implement authentication flow with JWT (6 hours)
3. Restaurant and Review Views (16 hours)
- Create Restaurant and Review pages to display details (8 hours)
- Create search/filter functionality for restaurants and reviews (6 hours)
- Implement pagination for long lists of restaurants and reviews (2 hours)
4. Restaurant and Review Creation (16 hours)
- Create forms for creating new restaurants and reviews (8 hours)
- Implement form validation and error handling (4 hours)
- Integrate Redux for state management (4 hours)
5. Likes and Comments (16 hours)
- Create like and unlike buttons for reviews (4 hours)
- Create comment section for reviews (6 hours)
- Integrate Redux for state management (2 hours)
- Implement form validation and error handling for comments (4 hours)
6. Final Touches and Testing (8 hours)
- Add finishing touches to UI design and UX (4 hours)
- Write unit tests and integration tests (4 hours)

## Assignments

- 

## Deadlines

-
