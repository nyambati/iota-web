import React from 'react';
import SearchGithub from './searchGithub';

class Main extends React.Component {
  render() {
    return(
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2">
            <SearchGithub />
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default Main;
