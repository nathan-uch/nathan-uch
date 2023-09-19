import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'

export default function App() {

  return (
    <>
      <Navbar />
      <main id="main">
        <Landing />
        <About />
      </main>
    </>
  );
}