import React, { createContext, useState, useEffect } from "react";
import AuthAPI from "../Axios/AuthAPI";
import axios from "axios";
const AuthContext = createContext();

const AuthcontextProvider = (props) => {
  const [loggedin, setLoggedin] = useState(undefined);
  const [user, setUser] = useState(undefined);

  const localID = localStorage.getItem("id_user") || undefined;
  async function checkLoggin(userID) {
    const req = await AuthAPI.check(userID);
    console.log(req);
    setLoggedin(req.status);
    setUser(req.user);
  }

  useEffect(() => {
    console.log("check");
    checkLoggin(localID);
  }, []);
  return (
    <AuthContext.Provider value={{ loggedin, checkLoggin, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
export { AuthcontextProvider };
