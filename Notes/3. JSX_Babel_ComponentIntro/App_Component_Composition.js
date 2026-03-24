import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'

// React element
const element = (
  <div className='element'>
    <h2>React element printed using paranthesis</h2>
  </div>
)

const HeaderComponent = () => {
    return (
    <div id='header'>
      <h1 className='headerComp'>
        Header from Functional component
      </h1>
      {element}
    </div>
  );
}
const TitleComponent = () => (
  <div className='Title'>
    <h1 className='heading' tabIndex="5">
      Heading
    </h1>
    <HeaderComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<TitleComponent /> );