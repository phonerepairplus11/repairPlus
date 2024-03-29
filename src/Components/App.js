import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Android from "./Android";
import Vape from "./Vape";
import OurServices from "./OurServices";
import Iphone from "./Iphone";
import Ipad from "./Ipad";
import ScrollToTop from "./ScrollToTop";
import ItemScreen from "./ItemScreen";
import NavBar from "./NavBar";
import BrandModels from "./BrandModels";
import MacBook from "./MacBook";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <NavBar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                <Route path="/Android" component={Android} />
                <Route path="/Iphone" component={Iphone} />
                <Route path="/Ipad" component={Ipad} />
                <Route path="/Vape" component={Vape} />
                <Route path="/Macbook" component={MacBook} />
                <Route path="/Services" component={OurServices} />
                <Route path="/Phone/:Model" component={ItemScreen} />
                <Route path="/BrandModel/:Brand" component={BrandModels} />
                <Redirect to="/" />{" "}
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
