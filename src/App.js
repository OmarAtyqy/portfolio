import { ChakraProvider } from '@chakra-ui/react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Footer from './components/Footer'

// Main React component
export default function App() {
  return (
    <ChakraProvider>
      <div className="App divide-y-2 divide-emerald-500">
        {/* Navbr */}
        <Navbar id="Navbar" />

        {/* Body */}
        <Welcome id="Welcome" />
        <About id="About" />
        <Projects id="Projects" />
        <Contact id="Contact" />

        {/* Footer */}
        <Footer />
      </div>
    </ChakraProvider>
  );
}