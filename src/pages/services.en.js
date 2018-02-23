import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

const getImageSrc = (data, name) => data[name].childImageSharp.responsiveResolution.src;

const Services = ({ data }) => (
  <div>
    <Helmet>
      <title>Webjomp - Services</title>
      <meta name="description" content="Création de sites Web, d'applications mobiles et conseils pour solutions d'affaires." />
    </Helmet>

    <section id="banner" className="style2">
      <div className="inner">
        <header className="major">
          <h1>Nos services</h1>
        </header>
        <div className="content">
          <p>Création de sites Web, d&apos;applications mobiles et conseils pour solutions d&apos;affaires.</p>
        </div>
      </div>
    </section>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Plus que des sites Web</h2>
          </header>
          <p>En plus de la création de sites Web, Webjomp offre une gamme variée de services, comme la conception d&apos;applications
            mobiles pour Android, iOS et Windows Phones, ou encore la création de logiciels personnalisés aux besoins de votre industrie.
          </p>
          <ul className="actions">
            <li><Link to="#two" className="button scrolly">En savoir plus</Link></li>
          </ul>
        </div>
      </section>
      <section id="two" className="spotlights services-two">
        <section id="websites">
          <div className="image" style={{ backgroundImage: `url(${getImageSrc(data, 'websites')})` }} />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Sites Web</h3>
              </header>
              <ul className="services-websites--list">
                <li>Plateforme de commerce électronique</li>
                <li>Sites adaptatifs</li>
                <li>Blogues</li>
                <li>Référencement (SEO)</li>
                <li>Envoi massif de courriels</li>
                <li>Rédaction, révision et traduction</li>
                <li>Conceptions originales et refontes</li>
                <li>Pages statiques et dynamiques</li>
                <li>Intégration de cartes, d&apos;agendas et de réseaux sociaux</li>
                <li>Plateforme de messagerie et formulaires de contact</li>
                <li>Analyse de données</li>
                <li>Publicité</li>
                <li>Acquisition de domaine et hébergement Web</li>
                <li>Hébergement web</li>
              </ul>
              <p>Vos besoins ne se retrouvent pas dans cette liste? N&apos;hésitez pas à <a href="/#contact">communiquer avec nous</a>!</p>
            </div>
          </div>
        </section>
        <section id="apps">
          <div className="image" style={{ backgroundImage: `url(${getImageSrc(data, 'mobileapps')})` }} />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Applications mobiles</h3>
              </header>
              <p>Nous développons pour Android, iOS et Windows Phones.</p>
              <p>
                Vous avez une idée d&apos;application en tête? Nous vous aidons à la concrétiser à travers ces étapes: cerner les requis,
                concevoir le look, développer et tester les fonctionnalités, publier l&apos;application.
              </p>
              <p>
                Le travail ne s&apos;arrête pas là! Nous garantissons le bon fonctionnement de votre application en la maintenant à jour
                et en améliorant la conception et les fonctionnalités grâce à l&apos;analyse de données de vos usagers.
              </p>
            </div>
          </div>
        </section>
        <section id="consulting">
          <div className="image" style={{ backgroundImage: `url(${getImageSrc(data, 'consulting')})` }} />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Solutions d&apos;affaires</h3>
              </header>

              <p>Concentrez-vous sur les tâches dont vous seul êtes le professionnel.</p>

              <h4>Développement de logiciels personnalisés</h4>
              <p>Visualisation de données, automatisation de tâches routinières</p>

              <h4>Installation de logiciels</h4>
              <p>Facturation, bureautique, comptabilité, salaires, gestion de projet, gestion de clients</p>

              <h4>Gestion de projet</h4>
              <p>
                Présentations clients, gestion de l&apos;échéancier, contrôle de qualité et satisfaction, maintien de relations
                d&apos;affaires
              </p>

              <h4>Stratégies d&apos;affaires</h4>
              <p>Publicité, référencement, analyse de données, adoption de technologies, conseils pour croissance rapide</p>
            </div>
          </div>
        </section>
      </section>
    </div>

  </div>
);

Services.propTypes = {
  data: PropTypes.objectOf( // eslint-disable-line function-paren-newline
    PropTypes.shape({
      childImageSharp: PropTypes.shape({
        responsiveResolution: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired, // eslint-disable-line function-paren-newline
};

export default Services;

export const imageQuery = graphql`
  query ServicesEnQuery {
    websites: file(relativePath: { eq: "services-site-web.png" }) {
      ...ServiceImage
    }
    mobileapps: file(relativePath: { eq: "mobile-app.jpg" }) {
      ...ServiceImage
    }
    consulting: file(relativePath: { eq: "consulting.jpg" }) {
      ...ServiceImage
    }
  }
`;
