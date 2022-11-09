import './Variables.css';
import './App.css';
import './Components/NavigationHeader';
import React from 'react';
import NavigationHeader from './Components/NavigationHeader';

export default function App() {

  return (
    <div className="App">

      <NavigationHeader links = {['About', 'Works', 'Contact']}/>
      {/* <NavigationHeader></NavigationHeader> */}
      {/* <header className="App-header">
        <nav>
          <ul>
            <li><a href='#About' className='Link-about'> About </a></li>
            <li><a href='#Works' className='Link-works'> Works </a></li>
            <li><a href='#Contact'className='Link-contact'> Contact me </a></li>
          </ul>
        </nav>
      </header> */}

      <div className="App-page">
      
      {/* About section */}

        <section id='About'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>Hi I'm Noé.</h1>
            <p>
              A game programmer student at ISART Digital, at Paris.
            </p>
          </div>
        </section>

        {/* Work section */}

        <section id='Works'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>WORKS</h1>
            
          </div>
        </section>
        
        {/* Contact section */}

        <section id='Contact'>
          <div className = 'Section-container'>
            <h1 className = 'Section-title'>CONTACT</h1>
          </div>

        </section>


      </div>
    </div>
  );
}