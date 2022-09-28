import logo from './logo.svg';
import './App.css';
import All_Routes from "./Components/All_Routes"
import Navbar1 from './Components/Navbar1';
import Footer from '../src/Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar1 />
      <All_Routes />
      <Footer />
    </div>
  );
}

export default App;
