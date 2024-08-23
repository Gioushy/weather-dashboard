// components/CityInputForm.js
import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { fetchWeatherData } from "../utils/api";
import { saveSearchToHistory } from "../utils/localStorage";

const validationSchema = Yup.object({
  city: Yup.string()
    .required("City is required")
    .matches(/^[a-zA-Z\s]+$/, "City name must contain only letters and spaces")
    .min(2, "City name must be at least 2 characters")
    .max(50, "City name must not exceed 50 characters"),
});

class CityInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
    };
  }

  handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    this.setState({ loading: true, error: null });
    try {
      const weatherData = await fetchWeatherData(values.city);
      this.props.onWeatherFetch(weatherData);
      if (this.props.loggedInUser) {
        saveSearchToHistory(values.city, this.props.loggedInUser);
      }
    } catch (error) {
      // setFieldError("city", "Failed to fetch weather data. Please try again.");
      this.setState({
        error: "City Not Found! Please provide correct city name.",
      });
      // const weatherData = null;
      // this.props.onWeatherFetch(weatherData);
    }
    this.setState({ loading: false });
    setSubmitting(false);
  };

  render() {
    return (
      <Formik
        initialValues={{ city: "" }}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="mt-4">
            <div className="mb-4">
              <Field
                name="city"
                type="text"
                placeholder="Enter city name"
                className={`w-full p-2 border rounded ${
                  touched.city && errors.city
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {touched.city && errors.city && (
                <div className="text-red-500 mt-1">{errors.city}</div>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-blue-500 text-white p-2 rounded ${
                this.state.loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-600"
              }`}
              disabled={this.state.loading}
            >
              {this.state.loading ? "Fetching..." : "Get Weather"}
            </button>
            {this.state.error && (
              <div className="text-red-500 mt-2">{this.state.error}</div>
            )}
          </Form>
        )}
      </Formik>
    );
  }
}

export default CityInputForm;
