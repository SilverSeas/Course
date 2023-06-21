import { Navigate } from "react-router-dom";

export default function Protection(props) {

   // A Higher Order Component (HOC) to protect routes from unauthorized access
  return (
    localStorage.getItem('token')? props.route : <Navigate to={'/login'}/>
  )

}
