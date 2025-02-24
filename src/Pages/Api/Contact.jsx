import React from "react";

const Contact = () => {
  return (
    <section  className="py-5">
      <div className="container mt-5">
        <h2 className="text-center">Contact Us</h2>
        <div className="col-md-6 mx-auto">
          <form >
            <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" required />
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" rows="4" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
