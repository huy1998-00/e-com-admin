import axiosAdmin from "./axiosAdmin";

const AuthAPI = {
  login: (data) => {
    const url = `/users/signin`;
    return axiosAdmin.post(url, {}, { params: data });
  },
  check: (userID) => {
    const url = `/users/checklogin`;
    return axiosAdmin.post(url, { userID });
  },
  clientInfo: (userid) => {
    const url = `/users/${userid}`;
    return axiosAdmin.get(url);
  },
};

export default AuthAPI;
