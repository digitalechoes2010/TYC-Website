import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="200805530561-u6lhmvq23ri5to13pirpnbmr032fjna5.apps.googleusercontent.com">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ToastContainer />
          <App />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
