# Weather Dashboard

## Description

Weather Dashboard is a React-based web application that allows users to check weather information for different cities. It features user authentication, search history tracking, and customizable user preferences.

## Features

- Real-time weather data fetching
- User registration and login
- Search history tracking for logged-in users
- Customizable user preferences
- Responsive design using Tailwind CSS

## Installation

1. Clone the repository:
   git clone https://github.com/yourusername/weather-dashboard.git
   cd weather-dashboard

2. Install dependencies:

- npm install

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:

4. Start the development server:

- npm start

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- On the homepage, enter a city name to get current weather information.
- Register or log in to save your search history.
- Visit your profile page to view and edit your information and preferences.
- Check your search history to quickly access previously searched cities.

## Technologies Used

- React
- React Router
- Formik & Yup for form handling and validation
- Tailwind CSS for styling
- OpenWeatherMap API for weather data

## Project Structure

weather-dashboard/
├── public/
├── src/
│ ├── components/
│ │ ├── CityInputForm.js
│ │ ├── Navbar.js
│ │ ├── SearchHistory.js
│ │ ├── UserPreferences.js
│ │ ├── UserProfile.js
│ │ └── WeatherDisplay.js
│ ├── utils/
│ │ ├── api.js
│ │ └── localStorage.js
│ ├── App.js
│ └── index.js
├── .env
├── package.json
└── README.md
