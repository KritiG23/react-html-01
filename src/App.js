
//react element 
import React from 'react'
import ReactDOM from "react-dom/client";
import Header from './common/header/Header';
import Body from './components/body/Body';
import"./App.css"
const App = ()=> {
  return (
    <div>
      <Header />
      <Body />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)