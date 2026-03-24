// src/App.js
import React from 'react';
import ContactForm from './components/ContactForm';
import './styles/ContactForm.css'; // make sure this path matches where you saved your CSS

function App() {
  return (
    <div className="App">
      

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default App;