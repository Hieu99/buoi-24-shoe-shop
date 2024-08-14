import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ShoeDetailPage from "./pages/ShoeDetailPage";
import MainTemplate from "./templates/MainTemplate";
import { createContext, useEffect, useReducer, useState } from "react";
import { message } from "antd";

export const GlobalContext = createContext();

const inititalState = {
  data: [],
  message: "N/A",
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload };
    case "UPDATE_MESSAGE":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, inititalState);
  const [messageAPI, contextHolder] = message.useMessage();

  useEffect(() => {
    if (state.message != "N/A") {
      messageAPI.error(state.message);
    }
  }, [messageAPI, state.message]);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {contextHolder}
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainTemplate />}>
            <Route path="" element={<HomePage />} />
            <Route path="shoe-detail/:id" element={<ShoeDetailPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
