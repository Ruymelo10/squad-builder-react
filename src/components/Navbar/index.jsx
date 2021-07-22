import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './styles.css';
import P from 'prop-types';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
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
          {this.props.name &&
            MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          <li className="nav-route-links">
            <a href="/login">Entrar</a>
          </li>
          <li className="nav-route-links">
            <a href="/signup">Cadastrar</a>
          </li>
        </ul>
      </nav>
    );
  }
}
Navbar.propTypes = {
  name: P.string,
  role: P.string,
};
const mapStateToProps = (state) => state.user;

export default connect(mapStateToProps)(Navbar);
