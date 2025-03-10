// const heading = React.createElement(
//     "h1",
//     {id: "title"},
//     "Hello from React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/Rcard";
import SearchBar from "./components/Search";


// Assignment 3

//Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const headerelement = React.createElement("div", { className: "title" }, [
//   React.createElement("h1", {}, "H1 Element"),
//   React.createElement("h2", {}, "H2 Element"),
//   React.createElement("h3", {}, "H3 Element"),
// ]);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(headerelement);

///////////////////////////////////////////

//Q: Create a functional component of the same with JSX

const FunctionalHeader = () => (
  <div className='title'>
    <h1>H1 Element Functional</h1>
    <h2>H2 Element Functional</h2>
    <h3>H3 Element Functional</h3>
  </div>
);
//const root1 = ReactDOM.createRoot(document.getElementById("root1"));
//root1.render(<FunctionalHeader />);

///////////////////////////////////////////

const jsxheading = <h1 id='title'>Hello from React</h1>;
const heading = React.createElement("h1", { id: "title" }, "Hello from React");
//const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const Title = () => <h1 className='title'>Hello from React</h1>;
const Age = () => <h2 className='age'>Age: 25</h2>;

const Heading1 = () => (
  <div id='container'>
    <Title />
    <Age />
    <h1 id='title'>Hello from React1</h1>
  </div>
);
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<Heading1 />);

///// Food Delivering App

//Header



//Search Bar




//Restaurant Card





//Body




const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      {/* <SearchBar /> */}
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
