import Link from 'gatsby-link';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';

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
    const { onToggleMenu } = this.props;

    return (
      <header id="header" className="alt">
        <Link to="/" className="logo accent-wj">
          Webjomp
        </Link>
        <nav>
          <button type="button" className="menu-link" onClick={onToggleMenu}>
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
