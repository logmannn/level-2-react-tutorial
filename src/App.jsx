import React, { Component, Fragment, createContext } from "react";
import { Transition } from "react-spring";
import "./App.css";
import { Toggle } from "Utilities";
import { Modal, Card } from "Elements";
import logo from "./logo.svg";
import User from "./User";
import UserProvider from "./UserProvider";

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <User />
        <section>
          <Toggle>
            {({ on, toggle }) => (
              <Fragment>
                <button type="button" onClick={toggle}>
                  Show / Hide
                </button>
                <Transition
                  from={{ opacity: 0 }}
                  leave={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                >
                  {on && Header}
                </Transition>
              </Fragment>
            )}
          </Toggle>
        </section>
        <Toggle>
          {({ on, toggle }) => (
            <Fragment>
              <button type="button" onClick={toggle}>
                Login
              </button>
              <Modal on={on} toggle={toggle}>
                <h1>Still in modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    </UserProvider>
  );
};

const Header = styles => (
  <Card style={{ ...styles }}>
    <h1>Show me</h1>
  </Card>
);

export default App;
