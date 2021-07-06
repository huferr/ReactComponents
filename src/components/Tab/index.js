import React, { useState } from "react";
import './styles.css'

const Tab = () => {

    const [ToggleState, setToggleState] = useState(1)
    
  return (
    <div className="container">
      <ul className="tab-list">
        <li className="tabs active-tabs">Tab 1</li>
        <li className="tabs">Tab 2</li>
        <li className="tabs">Tab 3</li>
      </ul>
      <div className="content-container">
        <div className="content active-content"><h2>Lorem</h2></div>
        <div className="content"><h2>Ipsum</h2></div>
        <div className="content"><h2>Dolor</h2></div>
      </div>
    </div>
  );
};

export default Tab;
