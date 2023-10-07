import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import Experience from './components/Experience'

export default function App() {

  return (
    <>
      <Navbar />
      <main id="main">
        <Landing />
        <About />
        <Technologies />
        <Experience />
        <Projects />
      </main>
    </>
  );
}