import React from "react";
import Code from "./components/Code";

const JSCode = `const App = props => {
  return (
    <div>
      <h1> Prism JS </h1>
      <div>Awesome Syntax Highlighter</div>
    </div>
  );
};
`;

const htmlCode = `
    <div>
      <h1> PrismJS Tutorial </h1>
      <p>
      Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind.
      </p>
    </div>
`;

export default function App() {
  return (
    <div className="App">
      <Code code={JSCode} language="javascript" />
      <Code code={htmlCode} language="html" />
    </div>
  );
}
