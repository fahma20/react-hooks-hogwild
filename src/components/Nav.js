import React from "react";
import piggy from "../assets/porco.png";
import { Button, Dropdown } from "semantic-ui-react";

const Nav = ({ setFilterGreased, setSortBy }) => {
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">
        A React App for County Fair Hog Fans
      </span>
      <div className="controls">
        <Button onClick={() => setFilterGreased(prev => !prev)}>
          Toggle Greased
        </Button>
        <Dropdown
          options={[
            { key: 'name', text: 'Sort by Name', value: 'name' },
            { key: 'weight', text: 'Sort by Weight', value: 'weight' },
          ]}
          placeholder='Sort Hogs'
          selection
          onChange={(e, { value }) => setSortBy(value)} // Update sort criteria
        />
      </div>
    </div>
  );
};

export default Nav;
