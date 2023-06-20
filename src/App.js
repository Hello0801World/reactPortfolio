import logo from './logo.svg';
import './App.css';
import{ Navbar, MainPage, Skills, Experience, Projects, Intro} from './components/index';
import {skills} from './data/skillList.js'


function App() {
  return (
    <>
      <Navbar />
      <MainPage />
      <Skills />
      <Experience />
      <Projects />
      <Intro />
    </>
    
  );
}

export default App;
