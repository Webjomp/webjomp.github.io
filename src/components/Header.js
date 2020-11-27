import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import $ from 'jquery';

class Header extends React.Component {
  componentDidMount() {
    $(window).scroll(function makeHeaderOpaqueOnScroll() {
      if ($(this).scrollTop() > 50) {
        $('#header').addClass('color-scrolled');
      }

      if ($(this).scrollTop() < 50) {
        $('#header').removeClass('color-scrolled');
      }
    });
  }

  render() {
    return (
      <header id="header" className="alt">
        <Link to="/" className="logo accent-wj">
          Webjomp
        </Link>
        <nav>
          <button className="menu-link" onClick={this.props.onToggleMenu}>
            Menu
          </button>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default Header;
