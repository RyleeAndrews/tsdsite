
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './home/home.js';
import ScreenPrint from './home/screenprint.js';
import DTG from './home/dtg.js';
import Embroidered from './home/embroidered.js';
import Vinyl from './home/vinyl.js';
import GraphicDesign from './home/graphicdesign.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Profile from './profile/profiledashboard.js';
import EditProfile from './profile/editProfile.js';
import OrderDashboard from './orders/orderdashboard.js';
import PastOrders from './orders/pastorders.js';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>


        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/screenprint' component={ScreenPrint} />
          <Route exact path='/dtg' component={DTG} />
          <Route exact path='/embroidery' component={Embroidered} />
          <Route exact path="/vinyl" component={Vinyl} />
          <Route exact path="/graphicdesign" component={GraphicDesign} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/order" component={OrderDashboard} />
          <Route exact path="/pastorders" component={PastOrders} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
