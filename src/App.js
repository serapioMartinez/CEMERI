import logo from './logo.svg';
import './App.css';

import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect } from 'react';
import BlogContent from './Components/BlogContent';

function App() {
  useEffect(()=>{
    const check = document.getElementById("check");
    check.onchange =  ()=>{
      const component = document.querySelector('.bottom');
      console.log(check.checked)
      if(check.checked==true){
        component.classList.remove("hidden");
      }else{
        component.classList.add("hidden");
      }
    }
    
    window.onscroll= ()=>{

      if(window.innerWidth<=770){
        return;
      }
      const component = document.querySelector('.bottom');
      if(window.pageYOffset > component.offsetTop){
        component.classList.add("sticky");
      }else{
        component.classList.remove("sticky");
      }
      
    }
    
    
  },[]);
  return (
    <div className="App">
      <Header/>
      <BlogContent/>
      <ul>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        <li>asdasd</li>
        
      </ul>
    </div>
  );
}

export default App;
