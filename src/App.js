import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Layout } from "./Components/Layout";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import AllProjects from "./Components/AllProjects";
import ScrollToTop from "./Components/projectTemplate/ScrollToTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [img, setImg] = useState(false);
  return (
    <div
      className="App"
      style={{
        backgroundImage: darkMode
          ? "linear-gradient(to top, #343534 0%, #343534 100%)"
          : "linear-gradient(45deg, #ffffff 0%, #e6e9f0 30%, #eef1f5 100%)",
        color: darkMode ? "rgb(211, 211, 211)" : "#4e4e4e",
      }}
    >
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  setDarkMode={setDarkMode}
                  darkMode={darkMode}
                  img={img}
                  setImg={setImg}
                />
              )}
            />
            <Layout>
              <Route
                path="/AllProjects"
                render={(props) => (
                  <AllProjects {...props} darkMode={darkMode} />
                )}
              />
            </Layout>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
