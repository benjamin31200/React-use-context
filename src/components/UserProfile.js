import React from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = React.useContext(UserContext);

  const setConnexion = () => {
    setIsOnline(!isOnline);
  };
  console.log(isOnline);
  return (
    <>
      <div>User is {!isOnline ? "Online" : "Offline"};</div>

      <button onClick={setConnexion}>click to change user status </button>
    </>
  );
}

export default UserProfile;
