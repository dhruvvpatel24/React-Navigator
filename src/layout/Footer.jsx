import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white text-center text-lg-start mt-5">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="text-uppercase">Company Name</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='text-center p-3 bg-secondary'>
          © 2025 Your Company. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
