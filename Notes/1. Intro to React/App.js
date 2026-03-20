const heading = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World From React",
);

const heading2 = React.createElement(
  "h2",
  {
    id: "heading2",
    onclick: () => {
      alert("heading 2 clicked");
    },
  },
  "Hello World from Heading2",
);

const heading3 = React.createElement(
  "h3",
  {
    id: "heading3",
  },
  "Hello World from Heading3",
);

const container = React.createElement(
  "div",
  {
    id: "container-div",
  },
  [heading, heading2, heading3],
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
