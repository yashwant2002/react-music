import { Route, Router, Routes } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { Searchbar } from "./pages/Searchbar"
import { Discover } from "./pages/Discover"

function App() {

  return (
    <>
     <div className="relative flex">
      <Sidebar/>
      <div>
        <Searchbar/>
        <div>
          <Routes>
            <Route path="/" element={<Discover/>} />
          </Routes>
        </div>

      </div>
     </div>
    </>
  )
}

export default App
