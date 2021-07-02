import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './styles.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick() {
    this.setState({ clicked: !this.state.clicked });
  }

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo"> Exemplo </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
