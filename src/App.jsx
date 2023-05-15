import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AboutUs from "./pages/aboutUs-page";
import './App.css';
import Gallery from "./pages/gallery-page";
import Masters from "./pages/masters-page";
import Contacts from "./pages/contacts-page";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <MainPage />
        </Route>
        <Route exact path='/about'>
          <AboutUs />
        </Route>
        <Route exact path='/gallery'>
          <Gallery />
        </Route>
        <Route exact path='/masters'>
          <Masters />
        </Route>
        <Route exact path='/masters'>
          <Contacts />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

