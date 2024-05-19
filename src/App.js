import logo from './logo.svg';
import './App.css';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <div className='container'>
      <div className='row'>
      <Home />
      </div>
      <div className='row mt-5'>
        <About />
      </div>
      <div className='row mt-auto'>
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App;
