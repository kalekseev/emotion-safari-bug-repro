import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Shadow = ({ children }) => {
  const [options, setOption] = React.useState(null);
  const callback = React.useCallback((ref) => {
    setOption(
      createCache({
        container: ref,
        key: "xxx",
        speedy: true,
      })
    );
  }, []);
  return (
    <div>
      <div ref={callback} />
      {options && <CacheProvider value={options}>{children}</CacheProvider>}
    </div>
  );
};

const root = document.getElementById("root");
const shadow = root.attachShadow({ mode: "open" });

ReactDOM.render(
  <Shadow>
    <App />
  </Shadow>,
  shadow
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
