import logo from './logo.svg';
import './App.css';
import{ Navbar, MainPage, Skills} from './components/index';
import {skills} from './data/skillList.js'


function App() {
  return (
    <>
      <Navbar />
        <MainPage />
        {skills.map((skill, key)=>{
          console.log(skill)
          return(
            <>
            <Skills key={key} 
              skillName={skill.skillName} 
              url={skill.url} />
              <img src={skill.url} alt="shit" />
              </>
          )
          
      })
      }
    </>
    
  );
}

export default App;
