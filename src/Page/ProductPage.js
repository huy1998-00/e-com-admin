import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductAPI from "../Axios/ProductAPI";
import convertMoney from "../convertmoney";
const ProductPage = () => {
  const [products, setProduct] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // fetch all product
  useEffect(() => {
    const fetchData = async () => {
      const request = await ProductAPI.getAPI(query);

      console.log(request);
      setProduct(request.products);
    };
    fetchData();
  }, [query]);
  //handle update

  const updateHandle = (e) => {
    const { value } = e.target;
    navigate(`/product/${value}`);
  };

  //handle delete

  const Delete = async (e) => {
    const { value } = e.target;
    console.log(value);
    if (window.confirm("You sure want delete this product?") == true) {
      const req = await ProductAPI.delete(value);
    }
    return;
  };
  return (
    <div className="bg-white w-11/12 h-screen ml-12 mt-5 flex flex-col flex-warp">
      <div className="block w-1/4 mt-5">
        <h2 className="pr-20 text-2xl font-bold ">Product</h2>
        <input
          placeholder="Enter Search"
          className="mt-5 border border-slate-300 outline-none pl-6"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <div className="w-11/12 mt-5 ml-8">
        <table class="table-fixed border-collapse border border-slate-200 text-sm text-gray-500">
          <thead>
            <tr>
              <th className="border border-slate-200 w-3/12 py-3">ID</th>
              <th className="border border-slate-200 w-4/12">Name</th>
              <th className="border border-slate-200 w-1/12">Price</th>
              <th className="border border-slate-200 w-1/12">Image</th>

              <th className="border border-slate-200 w-1/12">Category</th>
              <th className="border border-slate-200 w-2/12">Edit</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((p) => {
                return (
                  <tr className=" even:bg-white odd:bg-slate-50">
                    <td className="border border-slate-200  ">{p._id}</td>
                    <td className="border border-slate-200">{p.name}</td>
                    <td className="border border-slate-200">
                      {convertMoney(p.price)}
                    </td>
                    <td className="border border-slate-200">
                      <img src={p.img1}></img>
                    </td>
                    <td className="border border-slate-200">{p.category}</td>
                    <td className="border border-slate-200">
                      <button
                        value={p._id}
                        onClick={(e) => updateHandle(e)}
                        className="bg-green-700 text-white p-1 rounded-sm m-1"
                      >
                        Update
                      </button>
                      <button
                        value={p._id}
                        onClick={(e) => Delete(e)}
                        className="bg-red-700  text-white p-1 rounded-sm m-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPage;
