import LandingPage from "./Components/LandingPage";
import MainHeader from "./Components/Header/MainHeader";
import CardComponent from "./Components/CardComponent";
import IdleComponent from "./Components/IdleComponent/IdleComponent";
import { SearchContextProvider } from "./Components/Context/searchContext";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
import {BrowserRouter as  Router , Routes  , Route} from "react-router-dom"; 
import ActiveComponent from "./Components/ActiveComponent";
import Experiences from "./Components/Experience/Experiences";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
    <Router>
      <SearchContextProvider>  
        <Routes>
          <Route path="/abode" element={<><MainHeader/><h1>Abode Page</h1></>} />
          <Route path="/" element={<><IdleComponent /> <MainHeader /><LandingPage /> <CardComponent/> <Footer /></>}/>
          <Route path="/card/:id" element={<><MainHeader/><LandingPage /><ActiveComponent /><Footer/></>} />
          <Route path="//experience" element={<><MainHeader/><Experiences/></>}/>
          <Route path='/*' element={<PageNotFound/>}/>
        </Routes>
      </SearchContextProvider>
    </Router>
    </>
  );
}
export default App;