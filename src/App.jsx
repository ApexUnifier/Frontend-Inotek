import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import FindJob from "./pages/FindJob";
import Chat from "./pages/Chat";
import JobDetails from "./pages/JobDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="findjob" element={<FindJob/>}/>
        <Route path="chat" element={<Chat/>}/>
        <Route path="jobdetails" element={<JobDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}
