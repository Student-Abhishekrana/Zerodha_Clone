import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    try {
      const response = await api.post("/auth/user_SignUp", formData);
      if (response.data.success) {
        window.location.assign(
          `${process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"}/`,
        );
      } else {
        setFormError("Unable to create your account. Please try again.");
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      setFormError(
        error.response?.data?.message ||
          "Unable to create your account. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row w-100 text-center">
        <div className="p-5">
          <h3 className="fw-bold">
            Open a free demat and trading account online
          </h3>
          <p className="fs-4">
            Start investing brokerage free and join a community of 1.8+ crore
            investors and traders
          </p>
        </div>

        <div className="text-center">
          <div className="m-3">
            <h2 className="fw-bold">Signup now</h2>
            <p className="fst-italic">Or track your existing application</p>
          </div>

          <form
            className="needs-validation mx-auto shadow-lg p-4 rounded"
            style={{ maxWidth: "400px", background: "#fff" }}
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="username" className="form-label fw-semibold">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">
                Enter correct email address.
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <div className="invalid-feedback">Enter correct password.</div>
            </div>

            {formError && (
              <p className="auth-error" role="alert">
                {formError}
              </p>
            )}
            <button
              className="btn btn-dark w-100 fw-bold"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating account..." : "Sign Up"}
            </button>
          </form>

          <p>
            already have an account <Link to="/Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
