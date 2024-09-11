import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { EuiProvider, EuiText } from "@elastic/eui";
import ModalChangePassword from "./components/ModalChangePassword";
import "@elastic/eui/dist/eui_theme_light.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      id="root"
      // loader={rootLoader}
      // action={loginAction}
      // element={<Root />}
    >
      <Route path="changepassword" element={<ModalChangePassword />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EuiProvider colorMode="light">
      <EuiText>
        {" "}
        <RouterProvider router={router} />
      </EuiText>
    </EuiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
