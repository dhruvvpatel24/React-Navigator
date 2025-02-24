import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  console.log(id);

  const redirect = useNavigate()


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  var URL = "https://67ab14b965ab088ea7e89349.mockapi.io/product";

  async function singleProduct() {
    const res = await axios.get(`${URL}/${id}`);
    console.log(res.data);
    reset(res.data);
  }

  useEffect(() => {
    singleProduct();
  }, []);


  async function update(data) {
    await axios.put(`${URL}/${id}`,data)
    .then((res)=>{
        console.log(res.data)
        alert("Your Data Updated ☠️")
        redirect('/viewApi')
    })
    .catch((err)=>{
        console.log(err)
    })
  }


  return (
    <>
      <form
        method="post"
        className=" col-lg-6 mx-auto my-5 p-5 shadow bg-dark "
        onSubmit={handleSubmit(update)}
      >
        <h1 className="text-center text-white">Create-Api</h1>

        {/* Product-category */}

        <div className="mt-4">
          <select
            {...register("p_category", {
              required: {
                value: true,
                message: "Please select Product Category",
              },
            })}
            className="form-select"
          >
            <option value="">--Select Category--</option>
            <option value="Cloths">Cloths</option>
            <option value="Electronics">Electronics</option>
            <option value="Kids">Kids</option>
            <option value="Other">Other</option>
          </select>
          <p className="text-danger">{errors?.p_category?.message}</p>
        </div>

        {/* product name */}

        <div className="mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Product Name"
            {...register("p_name", {
              required: {
                value: true,
                message: "Please Enter Product Name ",
              },
              minLength: { value: 3, message: "Minimum 3 characters" },
              maxLength: { value: 20, message: "Maximum 20 characters" },
              pattern: {
                value: /^[A-Za-z]/,
                message: "Only characters allowed",
              },
            })}
          />
          <p className="text-danger">{errors?.p_name?.message}</p>
        </div>

        {/* price */}

        <div className="mt-4">
          <input
            type="number"
            className="form-control"
            placeholder="Enter Your Product Price"
            {...register("p_price", {
              required: {
                value: true,
                message: "Please enter price",
              },
              minLength: {
                value: 3,
                message: "Minimum 3 characters",
              },
            })}
          />
          <p className="text-danger">{errors?.p_price?.message}</p>
        </div>

        {/* image URl */}

        <div className="mt-4">
          <input
            className="form-control"
            placeholder="Enter Your Image Url"
            type="text"
            {...register("p_url", {
              required: {
                value: true,
                message: "Please select image url",
              },
            })}
          />

          <p className="text-danger">{errors?.p_url?.message}</p>
        </div>
        {/* button */}

        <div className="mt-4">
          <button className="btn btn-outline-warning">Update</button>
        </div>
      </form>
    </>
  );
};

export default UpdateProduct;
