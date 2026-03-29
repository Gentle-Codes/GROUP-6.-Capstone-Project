import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Planets from './components/Planets';
import PlanetTable from './components/PlanetTable';
import ContactForm from './components/ContactForm';
import Footer from './components/footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />
      <Planets />
      <PlanetTable />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;