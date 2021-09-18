import Navbar from '../Navbar/Navbar';
import About from '../about/about'
import Home from '../home/Home';
import Offers from '../offers/Offers';
import Feedback from '../feedback/Feedback';
import Admin from '../admin/Admin';
import Footer from '../footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/offers" component={Offers} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/admin" component={Admin} />
      </Switch>
      {/* <Home/>/ */}
      {/* <About/> */}
      {/* <Offers/>
    <Feedback/>
    <Admin/> */}
      <Footer />
    </Router>
  )
};

export default App;
