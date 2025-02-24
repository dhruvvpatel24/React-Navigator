import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const redirect = useNavigate();
  // const data = useParams();
  // console.log(data)  object , key product id
  const { id } = useParams();
  console.log(id);

  var URL = "https://67ab14b965ab088ea7e89349.mockapi.io/product";
  async function singleData() {
    try {
      const res = await axios.get(`${URL}/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log("error: ", error);
    }
  }

  useEffect(() => {
    singleData();
  }, []);
  return (
    <>
      {/* <div className="col-lg-8 mx-auto my-5 p-5 shadow bg-dark text-white">
        <div className="row">
          <div className="col-lg-4" >
            <img src={product.p_url} alt="" className="w-100 img-thumbnail"  />
          </div>
          <div className="col-lg-8 ">
            <h3>{product.p_name}</h3>
            <ul>
              <li>{product.p_category}</li>
              <li>{product.p_price}</li>
              <li>{new Date(product.createdAt).toDateString()}</li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="container my-5">
        <div className="card shadow-lg bg-dark text-white">
          <div className="row g-0">
            <div className="col-md-4">
            <img src={product.p_url} alt="" className="img-fluid rounded-start w-100 img-thumbnail "  />
              {/* <img
                src="{product.p_url}"
                className="img-fluid rounded-start h-100"
                alt="Product Image"
              /> */}
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{product.p_name}</h3>
                <ul className="list-group list-group-flush bg-dark text-white">
                  <li className="list-group-item bg-dark text-white">
                    <strong>Category:</strong> {product.p_category}
                  </li>
                  <li className="list-group-item bg-dark text-white">
                    <strong>Price:</strong> ₹{product.p_price}
                  </li>
                  <li className="list-group-item bg-dark text-white">
                    <strong>Added on:</strong>{" "}
                    {new Date(product.createdAt).toDateString()}
                  </li>
                </ul>
                <button className="btn btn-warning mt-3">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center ">
        <button onClick={() => redirect(-1)} className="btn btn-dark w-25 ">
          back
        </button>
      </div>
    </>
  );
};

export default SingleProduct;
