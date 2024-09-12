import LandingPage from "./Components/LandingPage";
import MainHeader from "./Components/Header/MainHeader";
import CardComponent from "./Components/CardComponent";
import IdleComponent from "./Components/IdleComponent/IdleComponent";
import { SearchContextProvider } from "./Components/Context/searchContext";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
// import './server'
 

function App() {

  const [error, setError] = useState(null);

  return (
    <>
      <IdleComponent />
      <SearchContextProvider>
        <MainHeader />
        <LandingPage />
        <CardComponent/>
      </SearchContextProvider>
      <Footer />
    </>
  );
}

export default App;
