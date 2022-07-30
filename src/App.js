import { ChakraProvider } from '@chakra-ui/react';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar'


// Main React component
export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <Welcome />
      </div>
    </ChakraProvider>
  );
}