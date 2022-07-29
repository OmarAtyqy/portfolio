import './App.css';
import { ChakraProvider } from '@chakra-ui/react';


// Main React component
export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1 class="text-3xl font-bold">
          Hello world!
        </h1>
      </div>
    </ChakraProvider>
  );
}