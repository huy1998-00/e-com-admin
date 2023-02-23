import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faDollarSign,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import DashBoardAPI from "../Axios/DashBoardAPI";
import convertMoney from "../convertmoney";
const Dasboard = () => {
  const [history, setHistory] = useState([]);
  const [user, setUser] = useState("");
  const [order, setOder] = useState("");
  const [total, setTotal] = useState("");
  const fetchdata = async () => {
    const req = await DashBoardAPI.getall();
    console.log(req);
    setUser(req.countUser);
    setOder(req.countOrder);
    setTotal(req.total);
    setHistory(req.order);
  };

  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="w-11/12 h-screen mt-5 ml-10 bg-slate-50">
      <div className="text-start mt-5 ml-5 text-gray-400">
        <h1>Dashboard</h1>
      </div>
      <div className="bg-white flex h-32 w-11/12 mt-10 ml-5 shadow-lg">
        <div className="w-1/3 relative border-r border-r-slate50 text-start">
          <div className=" ml-6 mt-8">
            <h1 className="font-bold text-3xl">{user}</h1>
            <h3 className="text-gray-300">Client</h3>
          </div>
          <FontAwesomeIcon
            icon={faUserPlus}
            className="absolute top-12 right-4 text-2xl text-slate-300"
          />
        </div>
        <div className="w-1/3 relative border-r border-r-slate50 text-start">
          <div className=" ml-6 mt-8">
            <h1 className="font-bold text-3xl">{convertMoney(total)}</h1>
            <h3 className="text-gray-300">Earning of Month</h3>
          </div>
          <FontAwesomeIcon
            icon={faDollarSign}
            className="absolute top-12 right-4 text-2xl text-slate-300"
          />
        </div>
        <div className="w-1/3 relative border-r border-r-slate50 text-start">
          <div className=" ml-6 mt-8">
            <h1 className="font-bold text-3xl">{order}</h1>
            <h3 className="text-gray-300">Orders</h3>
          </div>
          <FontAwesomeIcon
            icon={faFile}
            className="absolute top-12 right-4 text-2xl text-slate-300"
          />
        </div>
      </div>
      <div className="bg-white flex flex-wrap w-11/12 mt-10 ml-5 shadow-lg">
        <div className="mt-5 w-full text-start ml-3 font-bold">
          <h1>History</h1>
        </div>
        <div className=" mt-10 flex justify-center">
          <table class="table-fixed border-collapse border border-slate-200 text-sm text-gray-500 w-[96%] ">
            <thead>
              <tr>
                <th className="border border-slate-200 w-3/12 py-3">ID User</th>
                <th className="border border-slate-200 w-1/12">Name</th>
                <th className="border border-slate-200 w-1/12">Phone</th>
                <th className="border border-slate-200 w-2/12">Address</th>

                <th className="border border-slate-200 w-1/12">Total</th>
                <th className="border border-slate-200 w-2/12">Delivery</th>
                <th className="border border-slate-200 w-2/12">Status</th>
                <th className="border border-slate-200 w-1/12">Detail</th>
              </tr>
            </thead>
            <tbody>
              {history &&
                history.map((h) => {
                  return (
                    <tr className=" even:bg-white odd:bg-slate-50">
                      <td className="border border-slate-200  ">{h.idUser}</td>
                      <td className="border border-slate-200">{h.fullname}</td>
                      <td className="border border-slate-200">{h.phone}</td>
                      <td className="border border-slate-200">{h.address}</td>
                      <td className="border border-slate-200">{h.total}</td>
                      <td className="border border-slate-200">
                        {!h.delivery ? "Chưa vận chuyển" : "Đang vận chuyển"}
                      </td>
                      <td className="border border-slate-200">
                        {!h.status ? "Chưa thanh toán" : "Đã thanh toán"}
                      </td>

                      <td className="border border-slate-200">
                        <button className="bg-green-700 text-white p-1 rounded-sm m-1">
                          View
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
