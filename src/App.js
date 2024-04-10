import { useState } from 'react';
import './App.css';
import Home from './home/Home';
import Footer from './footer/footer';
function App() {
const [futer, setFuter] = useState("");
  const childToParentFunction = (childData) =>{
setFuter(childData);
  }

  const naslov= "Moja prva aplikacija";

  return (
  <>
  <Home naslov={naslov} funkcija = {childToParentFunction}></Home>
  <Footer futer={futer}></Footer>
  </>)
  ;
}

export default App;
