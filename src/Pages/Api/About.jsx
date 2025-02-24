import React from "react";

const About = () => {
  return (
    <section className="container py-5">
    <div className="row align-items-center">
        <div className="col-md-3">
            <img src="avatar.png" className="img-fluid rounded  " width="300px" alt="About Image" />
        </div>
        <div className="col-md-9">
            <h2 className="fw-bold">About Us</h2>
            <p className="text-muted">
                We are dedicated to providing the best solutions for your needs. Our team works with passion and expertise to bring creative ideas to life. Join us on our journey and experience innovation like never before.
            </p>
            <button className="btn btn-dark btn-lg">Learn More</button>
        </div>
    </div>
</section>
  );
};

export default About;
