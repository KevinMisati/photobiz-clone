import   './App.css';
import Home from "./pages/Home"
import Websites from "./pages/Websites/Websites"
import Header from "./Components/Header/Header"
import MobileHeader from "./Components/Header/MobileHeader"
import Footer from "./Components/Footer"
import {
  Switch,
  Route
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header>
        <div class="large-screen">
          <Header />
        </div>
        <div class="small-screen">
          <MobileHeader />
        </div>

      </header>

<section>
      <Switch>
        <Route path="/websites">
          <Websites />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </section>
   
     
    </div>
  );
}

export default App;
