import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TogetherSince from './components/TogetherSince';
import Footer from './components/Footer';

function App() {
  return (
    <container>
      <Navbar/>
      <Banner/>
      <TogetherSince/>
      <Footer/>
    </container>
  );
}

export default App;
