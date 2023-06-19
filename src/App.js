import logo from './logo.svg';
import './App.css';
import{ Navbar, MainPage, Skills, Experience, Projects} from './components/index';
import {skills} from './data/skillList.js'


function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Skills />
      <Experience />
      <Projects />
    </>
    
  );
}

export default App;
