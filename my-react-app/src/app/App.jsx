import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import User from "../pages/userPage/UserPage";
import SignIn from "../pages/signIn/SignIn";
import Menu from "../containers/menu/Menu";
import Footer from "../containers/footer/Footer";
import ProtectedRoute from "../utils/ProtectedRoute";

function App() {
    return (
        <Router>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/sign-in" element={<SignIn />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/user" element={<User />} />
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
};
export default App;