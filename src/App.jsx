import { Route, Routes } from "react-router-dom";
import "./style/main.css";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/HomePage/Home";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";
import Technology from "./pages/Technology/Technology";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination/>} />
          <Route path="crew" element={<Crew/>}/>
          <Route path="technology" element={<Technology/>}/>
        </Route>
      </Routes>
    </>
  );
}
export default App;