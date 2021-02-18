import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import FunctionContextComponent from './components/FunctionContextComponents';
const App = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
};
export default App;
