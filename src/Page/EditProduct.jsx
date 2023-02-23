import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductAPI from "../Axios/ProductAPI";
import axios from "axios";
const EditProduct = () => {
  const navi = useNavigate();
  const { id } = useParams();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [shortDesc, setShortDesc] = useState();
  const [longDesc, setLongDesc] = useState();
  const [detail, setDetail] = useState();

  const url = `http://localhost:3000/product/${id}`;
  useEffect(() => {
    fetchData();
  }, [url]);

  // func get infor product
  const fetchData = async () => {
    const req = await ProductAPI.getDetail(id);
    console.log(req);
    setDetail(true);
    setName(req.product.name);
    setPrice(req.product.price);
    setCategory(req.product.category);
    setShortDesc(req.product.short_desc);
    setLongDesc(req.product.long_desc);
  };

  //send update
  const handleSend = async (e) => {
    e.preventDefault();
    const editproduct = {
      _id: id,
      name: name,
      category: category,
      price: price,
      shortDesc: shortDesc,
      longDesc: longDesc,
    };
    console.log(editproduct);
    const req = await ProductAPI.update(editproduct);
    navi("/product");
  };

  return (
    <div className="mb-4 w-[90%]  h-[90%] mt-16 ml-10 text-start text-gray-500 ">
      {detail && (
        <form>
          <h1 className="mb-5 font-bold text-lg">Product Name</h1>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full py-2"
            type="text"
            placeholder="Enter Product Name"
          />
          <h1 className="mb-5 font-bold text-lg">Category</h1>
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mb-4 w-full py-2"
            placeholder="Enter Category"
          ></input>
          <h1 className="mb-5 font-bold text-lg">Price</h1>
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mb-4 w-full py-2"
            placeholder="Enter Price"
          ></input>
          <h1 className="mb-5 font-bold text-lg">Short Description</h1>
          <textarea
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            className="mb-4 w-full h-20"
            placeholder="Enter Short Description"
          ></textarea>
          <h1 className="mb-5 font-bold text-lg">Long Description</h1>
          <textarea
            value={longDesc}
            onChange={(e) => setLongDesc(e.target.value)}
            className="mb-4 w-full h-40"
            placeholder="Enter long Description"
          ></textarea>

          <button className="text-white bg-violet-600 p-2" onClick={handleSend}>
            {" "}
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default EditProduct;
