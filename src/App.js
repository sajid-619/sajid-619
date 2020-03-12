import React from "react";
import logo from "./React.js_logo-512.png";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="App-title">React App</h1>;
        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a todo"
          />
          <button className="btn">Submit</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id="" />
                Record youtube video
              </li>
            </ul>
          </div>
        </div>
        <img src={logo} width="100" height="100" className="logo" alt="" />;
      </div>
    );
  }
}
export default App;
