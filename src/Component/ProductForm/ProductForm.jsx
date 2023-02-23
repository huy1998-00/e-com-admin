import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ProductForm = () => {
  const navi = useNavigate();
  const { register, handleSubmit } = useForm();

  // submit
  const handleSend = async (data) => {
    console.log(data.files);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("shortDesc", data.short);
    formData.append("longDesc", data.long);

    for (const file of data.files) {
      formData.append("files", file);
    }
    const request = await axios.post(
      `http://localhost:5000/products/addproduct`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    navi("/product");
  };
  return (
    <div className="mb-4 w-[90%]  h-[90%] mt-16 ml-10 text-start text-gray-500 ">
      <form onSubmit={handleSubmit(handleSend)}>
        <h1 className="mb-5 font-bold text-lg">Product Name</h1>
        <input
          {...register("name")}
          className="mb-4 w-full py-2"
          type="text"
          placeholder="Enter Product Name"
        />
        <h1 className="mb-5 font-bold text-lg">Category</h1>
        <input
          {...register("category")}
          className="mb-4 w-full py-2"
          placeholder="Enter Category"
        ></input>
        <h1 className="mb-5 font-bold text-lg">Price</h1>
        <input
          {...register("price")}
          className="mb-4 w-full py-2"
          placeholder="Enter Price"
        ></input>
        <h1 className="mb-5 font-bold text-lg">Short Description</h1>
        <textarea
          {...register("short")}
          className="mb-4 w-full h-20"
          placeholder="Enter Short Description"
        ></textarea>
        <h1 className="mb-5 font-bold text-lg">Long Description</h1>
        <textarea
          {...register("long")}
          className="mb-4 w-full h-40"
          placeholder="Enter long Description"
        ></textarea>
        <h2 className="mb-5">{`Upload image (5 images)`}</h2>
        <input
          {...register("files")}
          className="mb-4 w-full"
          type="file"
          accept=".jpg, .jpeg, .png"
          multiple
        ></input>
        <button className="text-white bg-purple-400 p-2"> Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
