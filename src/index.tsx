import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as ReduxProvider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "react-query";
import { SpreadoSetupProvider } from "spreado";
import {
  spreadoReduxReducerPack,
  SpreadoSetupForReduxReactQuery,
} from "spreado/for-redux-react-query";

const store = configureStore({
  reducer: spreadoReduxReducerPack,
  middleware: (m) => m({serializableCheck: false}),
});

const queryClient = new QueryClient();
// initial spreado setup with redux store and react-query client
const spreadoSetup = new SpreadoSetupForReduxReactQuery({ store, queryClient });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <SpreadoSetupProvider setup={spreadoSetup}>
          <App />
        </SpreadoSetupProvider>
      </QueryClientProvider>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
