import axiosAdmin from "./axiosAdmin";

const DashBoardAPI = {
  getall: () => {
    const url = "/histories/dashboard";
    return axiosAdmin.post(url);
  },
};

export default DashBoardAPI;
