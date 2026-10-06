import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./Registration";

function Reg() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
    terms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    alert("Registration Successful!");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="mb-4">Registration Form</h2>

            <form onSubmit={handleSubmit}>
              <label className="form-label">Name</label>

              <input
                type="text"
                name="name"
                className="form-control mb-3"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              <label className="form-label">Email</label>

              <input
                type="email"
                name="email"
                className="form-control mb-3"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <label className="form-label">Phone</label>

              <input
                type="tel"
                name="phone"
                className="form-control mb-3"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />


              <label className="form-label">City</label>

              <input
                type="text"
                name="city"
                className="form-control mb-3"
                value={form.city}
                onChange={handleChange}
                placeholder="Enter your city"
              />

              <label className="form-label">Gender</label>

              <select
                name="gender"
                className="form-select mb-3"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  name="terms"
                  className="form-check-input"
                  checked={form.terms}
                  onChange={handleChange}
                />

                <label className="form-check-label">
                  I accept the Terms and Conditions
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-md-6">
          {submitted && <Registration form={form} />}
        </div>
      </div>
    </div>
  );
}

export default Reg;
