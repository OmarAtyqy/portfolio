import { ChakraProvider } from '@chakra-ui/react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar'
import About from './components/About';


// Main React component
export default function App() {
  return (
    <ChakraProvider>
      <div className="App divide-y-2 divide-emerald-500">
        <Welcome id="Welcome"/>
        <About id="About"/>
        <Navbar id="Navbar"/>
      </div>
    </ChakraProvider>
  );
}