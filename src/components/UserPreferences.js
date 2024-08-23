// components/UserPreferences.js
import React, { Component } from "react";

class UserPreferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureUnit: "celsius",
      theme: "light",
    };
  }

  componentDidMount() {
    const savedPreferences = localStorage.getItem("userPreferences");
    if (savedPreferences) {
      this.setState(JSON.parse(savedPreferences));
    }
  }

  handlePreferenceChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.savePreferences);
  };

  savePreferences = () => {
    localStorage.setItem("userPreferences", JSON.stringify(this.state));
  };

  render() {
    const { temperatureUnit, theme } = this.state;

    return (
      <div className="mt-6">
        <h3 className="text-xl font-bold mb-4">User Preferences</h3>
        <div className="mb-4">
          <label className="block mb-2">Temperature Unit:</label>
          <select
            name="temperatureUnit"
            value={temperatureUnit}
            onChange={this.handlePreferenceChange}
            className="w-full p-2 border rounded"
          >
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Theme:</label>
          <select
            name="theme"
            value={theme}
            onChange={this.handlePreferenceChange}
            className="w-full p-2 border rounded"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </div>
    );
  }
}

export default UserPreferences;
