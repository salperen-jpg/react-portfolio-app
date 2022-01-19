import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects/Projects';
import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Home />
      <Skills />
      <Projects />
    </main>
  );
}

export default App;
