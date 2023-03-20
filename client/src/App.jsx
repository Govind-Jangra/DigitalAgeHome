import { Routes, Route, Navigate,BrowserRouter } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Home from "./frontend/components/Home.jsx"
import SignIn from "./frontend/components/SignIn.jsx"
import SignUp from "./frontend/components/SignUp.jsx"
import ProblemsUpdate from "./frontend/components/ProblemsUpdate.jsx"
function App() {
  return (
      <Routes>
        <Route exact path="/dashboard/*" element={<Dashboard />} />
        <Route exact path="/auth/*" element={<Auth />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn/>} />
      <Route exact path="/signup" element={<SignUp/>} />
      <Route exact path="/problems" element={<ProblemsUpdate />} />
        {/* <Route exact path="/" element={<Navigate to="/dashboard/home" replace />} /> */}
      </Routes>
  );
}

export default App;
