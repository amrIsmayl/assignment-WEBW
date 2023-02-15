import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Section2 from './Section2';
import BestPlatform from './BestPlatform';
import Overview from './Overview';
import Section3 from './Section3';
import Acceleration from './Acceleration';
import Take from './Take';
import Footer from './Footer';

function App() {
  return (
    <>
      <div className=' container'>
        <Navbar />
        <Home />
        <Section2 />
        <BestPlatform />
        <Overview />
        <Section3 />
        <Acceleration />
        <Take />

      </div>
      <Footer />
    </>
  );
}

export default App;
