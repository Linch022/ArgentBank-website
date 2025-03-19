import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import SignIn from "./pages/SignIn";
import Menu from "./containers/Menu";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </Router>
    )
}
export default App;