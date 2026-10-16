import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
const Login = () => {
  const [formData, setFormData] = useState({
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
      const response = await api.post("/auth/user_Login", formData);
      if (response.data.success) {
        window.location.assign(
          `${process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001"}/`,
        );
      } else {
        setFormError("Unable to log in. Please check your details and try again.");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      setFormError(
        error.response?.data?.message || "Unable to log in. Please try again.",
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
            <h2 className="fw-bold">Login now</h2>
            <p className="fst-italic">Or track your existing application</p>
          </div>

          <form
            className="needs-validation mx-auto shadow-lg p-4 rounded"
            style={{ maxWidth: "400px", background: "#fff" }}
            onSubmit={handleSubmit}
          >
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
              {isSubmitting ? "Logging in..." : "Login"}
            </button>
          </form>

          <p>
            already have an account <Link to="/Signup">Signup</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
