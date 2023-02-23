import axiosAdmin from "./axiosAdmin";

const ProductAPI = {
  // get all product
  getAPI: (q) => {
    const url = `/products?q=${q}`;
    return axiosAdmin.get(url);
  },
  //update
  update: (data) => {
    const url = `/products/editproduct`;
    return axiosAdmin.post(url, data);
  },
  //delete

  delete: (id) => {
    const url = `/products/delete/${id}`;
    return axiosAdmin.delete(url);
  },

  // get product by ID
  getDetail: (id) => {
    const url = `/products/${id}`;
    return axiosAdmin.get(url);
  },
  // get product and pagination
  getPagination: (query) => {
    const url = `/products/pagination${query}`;
    return axiosAdmin.post(url);
  },
};

export default ProductAPI;
