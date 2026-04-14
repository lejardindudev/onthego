import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Assets
import "./index.css";
// Components
import App from "./App.jsx";
import PageNotFound from "./pages/PageNotFound";
import SingleNotePage from "./pages/SingleNotePage";
import Dashboard from "./pages/Dashboard";
import EditNotePage from "./pages/EditNotePage";
import CreateNotePage from "./pages/CreateNotePage";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/note/add" element={<CreateNotePage />} />
          <Route path="/note/:id" element={<SingleNotePage />} />
          <Route path="/note/:id/edit" element={<EditNotePage />} />

          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </Provider>,
);
