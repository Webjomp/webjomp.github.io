import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <ul className="icons">
                    <li><a href="https://twitter.com/fxlemire" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="https://www.facebook.com/webjomp/" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="https://github.com/fxlemire" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="https://www.linkedin.com/in/fxlemire/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
                <ul className="copyright">
                    <li>&copy; Webjomp 2018</li>
                </ul>
            </div>
            <div>
                <ul style={{ listStyle: 'none' }}>
                    <li><a style={{ borderBottom: 'none' }} href="/">Accueil</a></li>
                    <li><a style={{ borderBottom: 'none' }} href="/apropos">À propos</a></li>
                    <li><a style={{ borderBottom: 'none' }} href="/services">Nos services</a></li>
                    <li><a style={{ borderBottom: 'none' }} href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer
