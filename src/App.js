import Home from "./components/routes/home/Home";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./components/routes/navigation/navbar";
import SignIn from "./components/routes/sign-in/SignIn";
import Shop from "./components/routes/shop/Shop";



function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
