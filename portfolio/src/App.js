import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

export default function App() {

  return (
    <>
      <Navbar />
      <main id="main">
        <Landing />
        <About />
        <Technologies />
        <Projects />
      </main>
    </>
  );
}