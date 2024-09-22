
import ClaimForm from "./Componants/Claim"
import ClaimsSideBar from "./Componants/ClaimsSideBar"
import Footer from "./Componants/Footer"
import NavBar  from "./Componants/NavBar"
import PolicyList from "./Componants/PolicyList"





function App() {


  return (
    <div className="font-sans">
    <NavBar/>
    <PolicyList/>
    {/* <ClaimForm/> */}
    
    <Footer/>
    </div>
  )
}

export default App
