import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Photos from "./Components/Photos/photos"
import Exprience from "./Components/Exprience/Exprience";
import Testemony from "./Components/Testemony/Testemony";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import './App.css';

function App() {
  return (
    <div className="App" >
       <Header/>
      <Hero/>
      <About/>
      <Photos/>
      <Exprience/>
      <Testemony/>
      <Contact/>
      <Footer/>
      
     

   </div>
  );
}

export default App;
