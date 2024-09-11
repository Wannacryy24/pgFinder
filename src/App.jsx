import LandingPage from "./Components/LandingPage";
import MainHeader from "./Components/Header/MainHeader";
import CardComponent from "./Components/CardComponent";
import IdleComponent from "./Components/IdleComponent/IdleComponent";
import { SearchContextProvider } from "./Components/Context/searchContext";
import Footer from "./Components/Footer/Footer";
import { useEffect, useState } from "react";
// import './server'
import './serverRoom' 

function App() {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/abodeData')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(dataMirage => {
        setRoomData(dataMirage);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to load data');
        setLoading(false);
      });

  }, []);

  return (
    <>
      <IdleComponent />
      <SearchContextProvider>
        <MainHeader />
        <LandingPage />
        {loading ? <p>Loading...</p> : error ? <p>{error}</p> : <CardComponent roomData={roomData} />}
      </SearchContextProvider>
      <Footer />
    </>
  );
}

export default App;
