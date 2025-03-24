import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import User from "../pages/userPage/UserPage";
import SignIn from "../pages/signIn/SignIn";
import Menu from "../containers/menu/Menu";
import Footer from "../containers/footer/Footer";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/user" element={<User />} />
            </Routes>
            <Footer />
        </Router>
    );
};
export default App;