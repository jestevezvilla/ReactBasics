import React from "react";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import resources from "../i18n/texts.js";

i18n.init({
  // we init with resources
  resources,
  fallbackLng: "en",
  debug: true,
  // have a common namespace used around the full app
  ns: ["translations", "footer"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    formatSeparator: ","
  },
  lng: "es",
  react: {
    wait: true
  }
});

import {
  // NOTE no more browserHistory https://reacttraining.com/react-router/web/api/BrowserRouter
  BrowserRouter as Router,
  Route
  // NOTE Hello react-router-dom!
} from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

const Root = ({ store }) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Route path="/:filter?" component={App} />
      </Router>
    </I18nextProvider>
  </Provider>
);

export default Root;
