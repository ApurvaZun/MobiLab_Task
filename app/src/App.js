import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./App.css";

import imageFilterReducer from "./store/reducer/imageFilterReducer";
import DisplayImages from "./components/DisplayImages/DisplayImages";
import Header from "./components/Header/header";

const store = createStore(imageFilterReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <DisplayImages />
      </div>
    </Provider>
  );
}

export default App;
