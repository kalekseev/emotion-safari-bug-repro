/** @jsxImportSource @emotion/react */
import * as React from "react";
import { css } from "@emotion/react";

const App = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      {!open && (
        <div
          css={css`
            background-color: red;
          `}
        >
          xxx
        </div>
      )}
      {open && (
        <div
          css={css`
            background-color: green;
          `}
        >
          yyy
        </div>
      )}
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </div>
  );
};

export default App;
