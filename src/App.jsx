import LandingPage from "./Components/LandingPage"
import MainHeader from "./Components/Header/MainHeader"
import CardComponent from "./Components/CardComponent"
import IdleComponent from "./Components/IdleComponent/IdleComponent"
import { SearchContextProvider } from "./Components/Context/searchContext"
import Footer from "./Components/Footer/Footer"
import { useEffect, useState } from "react"
import './server'

function App() {
  const [roomData , setRoomData] = useState({ rooms: [] });
  useEffect(()=>{
    fetch('/api/abodeData')
    .then(res => res.json())
    .then(dataMirage=> setRoomData(dataMirage))
  },[])
  console.log(roomData.rooms);
  return (
    <>
    <SearchContextProvider>
      <MainHeader/> 
      <LandingPage/>
      <CardComponent roomData={roomData}/>
    </SearchContextProvider>
    <Footer/>
    </>
  )
}

export default App
