import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
class App extends Component {
  state = {
    progress: 10,
  };
  setProgress=(progress)=> {
    this.setState({ progress: progress })
  }
  

  render() {
    return (
      <>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              key="business"
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  itemsPerPage={6}
                  country="in"
                  category="business"
                  key="business"
                />
              }
            />
            <Route
              key="entertainment"
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  itemsPerPage={6}
                  country="in"
                  category="entertainment"
                  key="entertainment"
                />
              }
            />
            <Route
              key="general"
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  itemsPerPage={6}
                  country="in"
                  category="general"
                  key="general"
                />
              }
            />
            <Route
              key="health"
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  itemsPerPage={6}
                  country="in"
                  category="health"
                  key="health"
                />
              }
            />
            <Route
              key="science"
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  itemsPerPage={6}
                  country="in"
                  category="science"
                  key="science"
                />
              }
            />
            <Route
              key="sports"
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  itemsPerPage={6}
                  country="in"
                  category="sports"
                  key="sports"
                />
              }
            />
            <Route
              key="technology"
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  itemsPerPage={6}
                  country="in"
                  category="technology"
                  key="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
