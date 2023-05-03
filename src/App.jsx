import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Info from './components/Info';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';


function App() {


  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Info />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
