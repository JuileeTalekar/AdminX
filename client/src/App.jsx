import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { Navbar} from "./components/Navbar";
import { Logo } from "./pages/Logo";
import { PublicLayout } from "./components/layouts/Public-Layout";
import AdminLayout from "./components/layouts/Admin-Layout";
import AdminUsers from "./pages/Admin-Users";
import AdminContacts from "./pages/Admin-Contacts";
import Hook from "./pages/Hook";


const App = () => {
  return (
    <Router>
      <Routes>
        
       
        <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Hooks" element={<Hook />} />
            <Route path="*" element={<Error />} />
        </Route>

        {/* ADMIN ROUTES (No Public Navbar) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/users" element={<AdminUsers/>}/>
          <Route path="/admin/contacts" element={<AdminContacts/>}/> 
          <Route path="/admin/service" element={<Service/>}/>
        </Route>

      </Routes>
    </Router>
  );
};
export default App;
