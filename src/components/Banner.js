import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major" style={{ backgroundImage: `url(${props.background})` }}>
        <div className="inner">
            <header className="major">
                <h1>Le Web, <span className="accent-wj fade-in">repensé</span></h1>
            </header>
            <div className="content">
                <p>
                    Création de sites web, d'applications mobiles et <br />
                    conseils pour solutions d'affaires.
                </p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">En savoir plus</a></li>
                </ul>
            </div>
        </div>
    </section>
);

export default Banner;
