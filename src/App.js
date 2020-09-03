import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h2>Welcome</h2>
            </Route>
          </Switch>
          {/* Chat Screen(React Router) */}
        </div>
      </Router>
    </div>
  );
}

export default App;
