import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }

  },[isDarkMode])

  return (
    <>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>

    </>
  ); 
}
