// components/UserProfile.js
import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRegistering: false,
    };
  }

  handleSubmit = (values, { setSubmitting }) => {
    this.props.onLogin(values);
    setSubmitting(false);
  };

  toggleRegistration = () => {
    this.setState((prevState) => ({ isRegistering: !prevState.isRegistering }));
  };

  render() {
    const { loggedInUser, onLogout } = this.props;
    const { isRegistering } = this.state;

    if (loggedInUser) {
      return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">User Profile</h2>
          <p>
            Welcome, {loggedInUser.firstName} {loggedInUser.lastName}!
          </p>
          <p>Email: {loggedInUser.email}</p>
          <button
            onClick={onLogout}
            className="mt-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      );
    }

    return (
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">
          {isRegistering ? "Register" : "Login"}
        </h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={this.handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              {isRegistering && (
                <>
                  <div className="mb-4">
                    <Field
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full p-2 border rounded"
                    />
                    {touched.firstName && errors.firstName && (
                      <div className="text-red-500 mt-1">
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="mb-4">
                    <Field
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full p-2 border rounded"
                    />
                    {touched.lastName && errors.lastName && (
                      <div className="text-red-500 mt-1">{errors.lastName}</div>
                    )}
                  </div>
                </>
              )}
              <div className="mb-4">
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border rounded"
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 mt-1">{errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border rounded"
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 mt-1">{errors.password}</div>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                {isRegistering ? "Register" : "Login"}
              </button>
            </Form>
          )}
        </Formik>
        <button
          onClick={this.toggleRegistration}
          className="mt-4 text-blue-500 hover:text-blue-600"
        >
          {isRegistering
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </button>
      </div>
    );
  }
}

export default UserProfile;
