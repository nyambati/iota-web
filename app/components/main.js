import React from 'react';
import routerUtils from '../utils/routerUtils.js';

var config = {
  apiKey: "AIzaSyCcNiQFgbohJ6BOTYu6uGm9lQLgLYDk3vE",
  authDomain: "iota-80f35.firebaseapp.com",
  databaseURL: "https://iota-80f35.firebaseio.com",
  storageBucket: "iota-80f35.appspot.com",
};
firebase.initializeApp(config);
var database = firebase.database();

class Main extends React.Component {
  render() {
    return(
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2">
            IOTA
          </div>
        </nav>
        <div>
          {routerUtils.childrenWithProps(this.props.children, {database: database})}
        </div>
      </div>
    )
  }
};

export default Main;

