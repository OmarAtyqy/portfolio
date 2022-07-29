import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Welcome from './components/Welcome';


// Main React component
export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Welcome />
      </div>
    </ChakraProvider>
  );
}