import { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle";
function App() {
  const theme={
    colors : {
      heading: "#ff0000",
      footer_bg:"#0a1435"
    },
    media: {
      mobile:"768px",
      tab:"998px"
    }
  }

  return (
  
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <BrowserRouter>
      <Header/>
      <div className="App">
        <Routes>
          <Route path="/Form" element={<Form/>}/>
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
      </ThemeProvider>

    
    
    
  );
}



export default App;
