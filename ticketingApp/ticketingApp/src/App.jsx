import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { AuthProvider } from './context/AuthContext'; // Adjust the import path as needed
import AllRoutes from './Components/AllRoutes'; // Import AllRoutes
import Navbar from './Components/Navbar'; // Import Navbar

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar /> {/* Navbar component */}
        <AllRoutes /> {/* AllRoutes component */}
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;

