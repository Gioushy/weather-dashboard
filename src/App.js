// App.js
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import CityInputForm from "./components/CityInputForm";
import WeatherDisplay from "./components/WeatherDisplay";
import UserProfile from "./components/UserProfile";
import SearchHistory from "./components/SearchHistory";
import UserPreferences from "./components/UserPreferences";
import { clearSearchHistory } from "./utils/localStorage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: null,
      loggedInUser: null,
    };
  }

  handleWeatherData = (data) => {
    this.setState({ weatherData: data });
  };

  handleLogin = (user) => {
    this.setState({ loggedInUser: user });
  };

  handleLogout = () => {
    clearSearchHistory(this.state.loggedInUser);
    this.setState({ loggedInUser: null });
  };

  render() {
    return (
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar
            loggedInUser={this.state.loggedInUser}
            onLogout={this.handleLogout}
          />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <CityInputForm
                      onWeatherFetch={this.handleWeatherData}
                      loggedInUser={this.state.loggedInUser}
                    />
                    <WeatherDisplay weatherData={this.state.weatherData} />
                  </>
                }
              />
              <Route
                path="/profile"
                element={
                  <>
                    <UserProfile
                      loggedInUser={this.state.loggedInUser}
                      onLogin={this.handleLogin}
                      onLogout={this.handleLogout}
                    />
                    {this.state.loggedInUser && <UserPreferences />}
                  </>
                }
              />
              <Route
                path="/history"
                element={
                  <SearchHistory loggedInUser={this.state.loggedInUser} />
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
