import React, { useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthAPI from "../Axios/AuthAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [logedin, setlogedin] = useState(false);
  const { checkLoggin } = useContext(AuthContext);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setpassword(e.target.value);
  };

  //login
  const handleSubmit = async () => {
    const data = {
      email: email,
      password: password,
    };
    const request = await AuthAPI.login(data).catch((err) => {
      console.log("toast");
      toast(err.response.data.message);
    });

    console.log(request);
    if (request.role === "customer") {
      toast("You cant login with this account");
      return Promise.reject("Not Authorize");
    } else {
      localStorage.setItem("id_user", request.userId);
      localStorage.setItem("role", request.role);
      localStorage.setItem("token", request.token);
      await checkLoggin(request.userId);
      setlogedin(true);
    }
  };

  return (
    <div className="bg-black w-screen h-screen flex justify-center ">
      <div className="bg-neutral-700 flex h-3/6 w-7/12  mt-20 justify-center">
        <div className="flex flex-col w-4/5  h-full">
          <div className="flex my-10">
            <h1 className="justify-items-start text-4xl text-white">Login</h1>
          </div>
          <div className="flex flex-wrap mb-6 ">
            <label htmlFor="" className="justify-items-start text-gray-400 ">
              USERNAME
            </label>
            <input
              type=""
              className=" basis-full mt-4 py-2 outline-none border-b bg-neutral-700  border-b-gray-400 text-white"
              onChange={handleEmail}
            />
          </div>
          <div className="flex flex-wrap mb-6">
            <label htmlFor="" className="justify-items-start text-gray-400 ">
              PASSWORD
            </label>
            <input
              type="password"
              className="basis-full mt-4 py-2 outline-none border-b bg-neutral-700 border-b-gray-400 text-white"
              onChange={handlePassword}
            />
          </div>
          <div className="flex mt-14 ">
            <button
              className="justify-items-start p-4 bg-green-600 rounded-sm text-white"
              onClick={handleSubmit}
            >
              SUBMIT{" "}
            </button>
          </div>
        </div>
      </div>
      {logedin && <Navigate to="/" />}
      <ToastContainer className="z-1"></ToastContainer>
    </div>
  );
};

export default Login;
