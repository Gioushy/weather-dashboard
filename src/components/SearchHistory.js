// components/SearchHistory.js
import React, { Component } from "react";
import { getSearchHistory } from "../utils/localStorage";

class SearchHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    this.updateHistory();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loggedInUser !== this.props.loggedInUser) {
      this.updateHistory();
    }
  }

  updateHistory() {
    const { loggedInUser } = this.props;
    if (loggedInUser) {
      this.setState({ history: getSearchHistory(loggedInUser) });
    } else {
      this.setState({ history: [] });
    }
  }

  render() {
    const { loggedInUser } = this.props;

    if (!loggedInUser) {
      return (
        <div className="bg-white shadow-md rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-bold mb-4">Search History</h2>
          <p>Please log in to view your search history.</p>
        </div>
      );
    }

    return (
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-2xl font-bold mb-4">Search History</h2>
        {this.state.history.length > 0 ? (
          <ul className="list-disc pl-5">
            {this.state.history.map((city, index) => (
              <li key={index} className="mb-2">
                {city}
              </li>
            ))}
          </ul>
        ) : (
          <p>No search history available.</p>
        )}
      </div>
    );
  }
}

export default SearchHistory;
