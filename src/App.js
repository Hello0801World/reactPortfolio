import logo from './logo.svg';
import './App.css';
import{ Navbar, MainPage, Skills, Experience} from './components/index';
import {skills} from './data/skillList.js'


function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Skills />
      <Experience />
    </>
    
  );
}

export default App;
