import LandingPage from "./Components/LandingPage"
import MainHeader from "./Components/Header/MainHeader"
import CardComponent from "./Components/CardComponent"
import IdleComponent from "./Components/IdleComponent/IdleComponent"
import { SearchContextProvider } from "./Components/Context/searchContext"

function App() {
  return (
    <>
    <SearchContextProvider>
      <MainHeader/> 
      <LandingPage/>
      <CardComponent/>
      <IdleComponent/>
    </SearchContextProvider>
    </>
  )
}

export default App
