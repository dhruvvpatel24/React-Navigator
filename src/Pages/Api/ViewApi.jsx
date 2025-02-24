import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEye,  } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const ViewApi = () => {
  const [products, setProduct] = useState([]);

  ////// search input //////

  const [search, setSearch] = useState("");

  ////// select price ////

  const [price, setPrice] = useState("");

  ///// sorting ////

  const [sortValue,setSort] = useState("")  

  const redirect = useNavigate();
  var URL = "https://67ab14b965ab088ea7e89349.mockapi.io/product";

  async function getProduct() {
    const res = await axios.get(URL);
    console.log(res.data);
    setProduct(res.data);
  }
  useEffect(() => {
    getProduct();
  }, []);

  ////// filter data //////

  const filterProduct = products
    .filter((products) => {
      console.log(products.p_category);

      ////// 1st Method ////
      // return products.p_category.toUpperCase().includes(search.toUpperCase());

      ////// 2nd Method ////
      const Category = products.p_category.toUpperCase();
      const SearchInput = search.toUpperCase();
      return Category.includes(SearchInput);
     })
    .filter((products) => {

      // 2 condition //
      // return price === 'lessThan2k' ? products.p_price <=2000 :  products.p_price > 2000

      /// Multiple Condition //

      if (price === "lessThan2k") {
        return products.p_price <= 2000;
      } else if (price === "moreThan2k") {
        return products.p_price > 2000;
      } else {
        return products;
      }

    })
    .sort((a,b)=>{
      if(sortValue==='asc'){
        return a.p_name.localeCompare(b.p_name)
      }else if(sortValue==='desc') {
        return b.p_name.localeCompare(a.p_name)
      }else{
        return products
      }

    })


  async function trash(id) {
    if (window.confirm("do you want to delete this product")) {
      try {
        await axios.delete(`${URL}/${id}`);
        getProduct();
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }
  return (
    <>
       <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <input
              type="search"
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter Category"
              className="form-control mt-5"
            />
          </div>

          <div className="col-lg-4">
            <select
              className="form-select mt-5"
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="">-- Select Price --</option>
              <option value="lessThan2k">{`price < 2000`}</option>
              <option value="moreThan2k">{`price > 2000`}</option>
            </select>
          </div>
          <div className="col-lg-4">
            <select
              className="form-select mt-5"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">-- Select Product --</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
        </div>
      </div> 
      <div className="container table-responsive  my-5">
        <table className="table table-striped table-hover table-dark">
          <thead className="table-dark">
            <tr>
              <th>Sr. No</th>
              <th>Product Category</th>
              <th>Name</th>
              <th>Price</th>
              <th>Date</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {/* filterProduct */}
            {filterProduct &&
             filterProduct .map((products, index) => (
                <tr key={products.id}>
                  <td>{index + 1}</td>
                  <td>{products.p_category}</td>
                  <td>{products.p_name}</td>
                  <td>{products.p_price}</td>
                  <td>{new Date(products.createdAt).toDateString()}</td>
                  <td>
                    <img src={products.p_url} width={100} height={100} alt="" />
                  </td>

                  <td>
                    <button
                      onClick={() => trash(products.id)}
                      className="btn btn-danger mx-2"
                    >
                      <MdDelete />
                    </button>
                    <NavLink
                      to={`/singleProduct/${products.id}`}
                      className="btn btn-warning "
                    >
                      <FaEye />
                    </NavLink>

                    <NavLink
                      to={`/update/${products.id}`}
                      className="btn btn-success mx-2"
                    >
                      <FaPencil />
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <button onClick={() => redirect(-1)} className="btn btn-dark w-25">
            back
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewApi;
