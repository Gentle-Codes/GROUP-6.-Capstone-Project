// src/App.js
import React from 'react';
import ContactForm from './components/ContactForm';
import './styles/ContactForm.css'; // make sure this path matches where you saved your CSS

function App() {
  return (
    <div className="App">
      <header style={{ textAlign: 'center', padding: '50px 20px' }}>
        <h1>Welcome to Planet Project</h1>
        <p>Reach out to us using the form below</p>
      </header>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}

export default App;