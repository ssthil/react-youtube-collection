import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top App-header">
            <div className="container-fluid">
              <a className="navbar-brand" >{this.props.title}</a>
            </div>
          </nav>
        )
    }
}

export default Header;