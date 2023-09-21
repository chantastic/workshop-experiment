import * as React from "react";
import * as ReactDOM from "react-dom/client";

function App() {
  return <div>Hello World</div>;
}

const rootEl = document.createElement("div");
document.body.append(rootEl);
ReactDOM.createRoot(rootEl).render(<App />);
