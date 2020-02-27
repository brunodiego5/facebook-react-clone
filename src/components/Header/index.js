import React, { Component } from 'react';

import logo from '../../assets/images/logo.svg'
import profile from '../../assets/images/profile.jpg'
import './styles.css';

import '../../App.css';

class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <img src={logo} />
        <div className="side">
          <span>Meu perfil</span>
          <img src={profile}></img>
        </div>
      </header>
    );
  }
}

export default Header;