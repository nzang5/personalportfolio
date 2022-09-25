import './App.css';
import  NavBar from "./components/navbar"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Banner from "./components/banner";
import Skills from "./components/skills";
import Projects from './components/projects';


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <Skills/>
    <Projects/>
    </div>
  );
}

export default App;
