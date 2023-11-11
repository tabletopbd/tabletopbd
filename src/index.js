import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import ReactGA from "react-ga4";


function renderReactDom() {
    const container = document.getElementById("root");
    const root = createRoot(container);
    ReactGA.initialize("G-CQ4QD8LZT0");
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
                  minBreakpoint="xxs">
                  <App />
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    );

}
const SendAnalytics = ()=> {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
    });
}

if (window.cordova) {
    document.addEventListener('deviceready', () => {
        renderReactDom();
        if(window.localStorage.getItem("loggedIn") != 1) {
            // Running for the first time.
            window.localStorage.setItem("loggedIn", 1);
            console.log("1st time");
        } else {
            //Already run this app before.
            console.log("running this for more than one time");
        }
    }, false);
} else {
    renderReactDom();
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(SendAnalytics);
