import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import './App.css';

function App() {
  return (
    <>
      <section className="min-h-screen sm::bg-green-900">
        <Navbar />
        <Header />
        <Skills />
        <Projects />
        <Footer />
      </section>
    </>
  );
}

export default App;
