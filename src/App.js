import Hero from './components/hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import GoToTheTop from './components/GoToTheTop';
import Skills from './components/Skills';
import Footer from './components/footer';
import ContactMe from './components/ContactMe';
import NavBar from './components/navbar';


function App() {
  return (
    <>
    <NavBar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
      <GoToTheTop />
    </>
  );
}

export default App;
