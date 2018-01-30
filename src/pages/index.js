import React from 'react';
import Link from 'gatsby-link';
import $ from 'jquery';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import Contact from '../components/Contact';

import aaiard from '../assets/images/aaiard.png';
import eprintit from '../assets/images/eprintit.svg';
import evolvingweb from '../assets/images/evolvingweb.svg';
import kopi from '../assets/images/kopi.png';
import seahub from '../assets/images/seahub.svg';
import t10labs from '../assets/images/t10labs.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick.js';

class HomeIndex extends React.Component {
    componentDidMount() {
        $('.clients-carousel').slick({
            arrows: false,
            autoplay: true,
            centerMode: true,
            centerPadding: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            swipe: false,
            touchMove: false,
        });
    }

    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;
        const siteDescription = this.props.data.site.siteMetadata.description;
        const getImageSrc = (name) => this.props.data[name].childImageSharp.responsiveResolution.src;

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner background={getImageSrc('banner')}/>

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${getImageSrc('moderne')})` }}>
                            <header className="major">
                                <h3>Des sites Web modernes</h3>
                                <p>Attrayez votre clientèle avec un look frais et captivant.</p>
                            </header>
                        </article>
                        <article style={{ backgroundImage: `url(${getImageSrc('agile')})` }}>
                            <header className="major">
                                <h3>Agiles</h3>
                                <p>Soyez impliqué dans les itérations menant à la création du site afin d'obtenir le résultat que vous recherchez.</p>
                            </header>
                        </article>
                        <article style={{ backgroundImage: `url(${getImageSrc('beton')})` }}>
                            <header className="major">
                                <h3>Bétons</h3>
                                <p>Nous adoptons les meilleures pratiques établies par l'industrie afin de vous fournir un site performant, sans failles, à l'épreuve du temps.</p>
                            </header>
                        </article>
                        <article style={{ backgroundImage: `url(${getImageSrc('adaptatif')})` }}>
                            <header className="major">
                                <h3>Adaptatifs</h3>
                                <p>Ayez un site attrayant, tant sur mobile que sur ordinateur.</p>
                            </header>
                        </article>
                        <article style={{ backgroundImage: `url(${getImageSrc('clair')})` }}>
                            <header className="major">
                                <h3>Que vous comprendrez</h3>
                                <p>Nous prenons le temps nécessaire pour répondre à toutes vos questions.</p>
                            </header>
                        </article>
                        <article style={{ backgroundImage: `url(${getImageSrc('abordable')})` }}>
                            <header className="major">
                                <h3>À des prix réalistes</h3>
                                <p>Nous minimisons les frais accessoires tels que l'hébergement et acquisition de domaine.</p>
                            </header>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major" style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
                                <h2 style={{ width: 'auto' }}>Nos services</h2>
                            </header>
                            <div className="services">
                                <a className="service" href="/services#websites">
                                    <i className="icon fa fa-3x fa-globe"></i>
                                    <h3>Sites Web</h3>
                                </a>
                                <a className="service" href="/services#apps">
                                    <i className="icon fa fa-3x fa-mobile"></i>
                                    <h3>Applications</h3>
                                </a>
                                <a className="service" href="/services#consulting">
                                    <i className="icon fa fa-3x fa-briefcase"></i>
                                    <h3>Solutions d'affaires</h3>
                                </a>
                            </div>
                            <ul className="actions" style={{ paddingTop: '3em', textAlign: 'center' }}>
                                <li><a href="/services" className="button next">En savoir plus</a></li>
                            </ul>
                        </div>
                    </section>
                    <section id="three" style={{ paddingBottom: '1em' }}>
                        <div className="inner">
                            <header className="major" style={{ display: 'flex', justifyContent: 'center', width: 'auto' }}>
                                <h2 style={{ width: 'auto' }}>Quelques-uns de nos clients</h2>
                            </header>
                            <div className="clients-carousel">
                                <div><img style={{ margin: '0 auto', height: '4em' }} src={aaiard} /></div>
                                <div><img style={{ margin: '0 auto', height: '4em' }} src={eprintit} /></div>
                                <div><img style={{ margin: '0 auto', height: '4em' }} src={evolvingweb} /></div>
                                <div><img style={{ margin: '0 auto', height: '4em' }} src={kopi} /></div>
                                <div><img style={{ margin: '0 auto', height: '4em' }} src={seahub} /></div>
                                <div><img style={{ margin: '0 auto', height: '4em' }} src={t10labs} /></div>
                            </div>
                        </div>
                    </section>
                </div>

                <Contact />
            </div>
        )
    }
}

export default HomeIndex;

export const imageNarrowFragment = graphql`
    fragment ImageNarrow on File {
        childImageSharp {
            responsiveResolution(width: 600, quality: 90) {
                src
            }
        }
    }
`;

export const imageWideFragment = graphql`
    fragment ImageWide on File {
        childImageSharp {
            responsiveResolution(width: 900, quality: 90) {
                src
            }
        }
    }
`;

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }

        moderne: file(relativePath: { eq: "moderne.jpg" }) {
            ...ImageNarrow
        }

        agile: file(relativePath: { eq: "agile.jpg" }) {
            ...ImageWide
        }

        beton: file(relativePath: { eq: "beton.jpg" }) {
            ...ImageNarrow
        }

        adaptatif: file(relativePath: { eq: "adaptatif.jpg" }) {
            ...ImageWide
        }

        clair: file(relativePath: { eq: "clair.jpg" }) {
            ...ImageNarrow
        }

        abordable: file(relativePath: { eq: "abordable.jpg" }) {
            ...ImageWide
        }

        banner: file(relativePath: { eq: "banner-webjomp.jpg" }) {
            childImageSharp {
                responsiveResolution(width: 1920, quality: 40) {
                    src
                }
            }
        }
    }
`;
