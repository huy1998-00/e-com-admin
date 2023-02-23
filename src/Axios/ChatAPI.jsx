import axiosAdmin from "../Axios/axiosAdmin";

const ChatAPI = {
  fecthConver: (userid) => {
    const url = `/chatrooms/getroomid`;
    return axiosAdmin.get(url);
  },

  getmess: (roomid) => {
    const url = `/chatrooms/getById?roomId=${roomid}`;
    return axiosAdmin.get(url);
  },

  postmess: (data) => {
    const url = `/chatrooms/addMessage`;
    return axiosAdmin.post(url, data);
  },
};

export default ChatAPI;
