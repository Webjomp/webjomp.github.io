import React from 'react'
import Img from 'gatsby-image';
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const Apropos = (props) => (
    <div id="about">
        <Helmet>
            <title>À propos de Webjomp</title>
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>À propos de Webjomp</h1>
                    </header>
                    <span className="image left"><img src={props.data.file.childImageSharp.responsiveResolution.src} alt="François-Xavier Lemire" /></span>
                    <p>
                        Fondateur de Webjomp, François-Xavier Lemire obtient un diplôme en informatique avec une majeure en génie logiciel à l'Université McGill en 2016. Il est aussi diplômé en droit de l'Université de Montréal depuis 2010 et membre du Barreau du Québec depuis 2011, auparavant praticien au sein du cabinet <a href="http://www.lemireavocat.com">Lemire Lemire avocats, s.e.n.c</a>
                    </p>
                    <p>
                        François-Xavier a développé ses talents d'ingénieur logiciel en touchant à plusieurs disciplines, dont la <i>FinTech</i> chez <a href="http://www.morganstanley.com/">Morgan Stanley</a>, les jeux vidéo (<i>Skylanders : SuperChargers</i>) chez <a href="http://beenox.com/">Activision (Beenox)</a>, et la publicité mobile chez <a href="https://vungle.com/">Vungle</a>, à San Francisco.
                    </p>
                    <p>
                        S'il n'est pas en train de réfléchir à sa prochaine application, il est soit en train de pratiquer la trompette, de déguster un bon scotch ou bien de boxer!
                    </p>
                    <p>
                        N'hésitez pas à rester connecté!

                        <ul className="icons inline">
                            <li><a href="https://twitter.com/fxlemire" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                            <li><a href="https://www.linkedin.com/in/fxlemire/" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                            <li><a href="https://github.com/fxlemire" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                        </ul>
                    </p>
                </div>
            </section>
        </div>

    </div>
)

export default Apropos

export const pageQuery = graphql`
    query GatsbyImageQuery {
        file(relativePath: { eq: "fx.png" }) {
            childImageSharp {
                responsiveResolution {
                    src
                }
            }
        }
    }
`
