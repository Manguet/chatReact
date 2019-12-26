import React from 'react';
import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
      <div>
        <Contact online
            name="Jackson Evans"
            image="https://randomuser.me/api/portraits/men/36.jpg"
            isOnline={true}
        />
        <Contact
            name="Arron Day"
            image="https://randomuser.me/api/portraits/men/22.jpg"
            isOnline={false}
        />
        <Contact online
            name="Tracey Cruz"
            image="https://randomuser.me/api/portraits/women/32.jpg"
            isOnline={true}
        />
      </div>
  );
}

export default App;
