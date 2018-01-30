import React from 'react'
import Link from 'gatsby-link'
import $ from 'jquery';

class Header extends React.Component {
    componentDidMount() {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#header').addClass('color-scrolled')
            }
            if ($(this).scrollTop() < 50) {
                $('#header').removeClass('color-scrolled')
            }
        });
    }

    render() {
        return (
            <header id="header" className="alt">
                <Link to="/" className="logo accent-wj">Webjomp</Link>
                <nav>
                    <a className="menu-link" onClick={this.props.onToggleMenu} href="javascript:;">Menu</a>
                </nav>
            </header>
        );
    }
}

Header.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Header
