import React from "react";

const Home = () => {
  return (
    <>
      <header className=" text-dark text-center py-5 mt-5 ">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <img
                src="avatar.png"
                alt="Home Image"
                className="img-fluid home-image"
              />
            </div>
          </div>
        </div>
        <div className="container">
        <h1 className="display-3 fw-bold">Welcome to Our Website</h1>
            <p className="lead">Experience the best services with our amazing platform.</p>
            <a href="#services" className="btn btn-dark btn-lg">Explore More</a>
        </div>

       
      </header>
    </>
  );
};

export default Home;
