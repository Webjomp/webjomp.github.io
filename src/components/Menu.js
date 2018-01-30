import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Accueil</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/apropos">À propos</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/services">Nos services</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#contact">Contact</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
