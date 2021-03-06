/* global graphql */

import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Separator from './../components/Separator';
import Menu from './../components/Menu';
import MetaTags from './../components/MetaTags';

export default function About({ data }) {
  return (
    <div>
      <MetaTags
        siteUrl={data.site.siteMetadata.siteUrl}
        title={`About`}
        path={`/about`}
        description={'Hey, I am Kostas. Nice having you here.'}
        noIndex={false}
        tags=""
      />
      <Menu />
      <section className="blog container about">
        <div className="medium-8 medium-offset-2 large-10 large-offset-1">
          <header className="header">
            <div className="row text-center">
              <Img sizes={data.file.childImageSharp.sizes} className="header-avatar" />
              <h1>Hey, I am Kostas. Nice having you here.</h1>
            </div>
          </header>
          <Separator />
          <main role="main">
            <div className="row about-section">
              <div className="medium-2 about-section-title">INTRO</div>
              <div className="medium-10">
                <p>
                  I design software architectures, APIs and databases to serve the rest of an
                  application. I am a full stack engineer but I love taking a specific field in my
                  hands and getting the juice out of it. I am always interested in being a part of a
                  team that builds great software and getting things done.
                </p>
                <p>
                  I like things like Node.js, Express.js, React.js, Webpack, Gulp, MySQL, MongoDB,
                  Mocha, Jest, AWS, Ansible, Git and a whole lot more.
                </p>
                <p>
                  I like <a href="http://slides.com/kostasbariotis">speaking</a> to meetups and
                  conferences about things that tried and also talking with others on my{' '}
                  <a href="http://devastation.tv">podcast</a>. I created{' '}
                  <a href="https://janitr.net">Janitr</a> and{' '}
                  <a href="http://gityeller.com">GitYeller</a> You can find more code samples and my
                  contributions on <a href="https://github.com/kbariotis">Github</a>. Along with
                  some folks, we are organizing the local{' '}
                  <a href="www.meetup.com/Thessaloniki-Node-js-Meetup/">Nodejs meetup</a> and{' '}
                  <a rel="noopener noreferrer" href="http://devit.org" target="_blank">
                    DEVit Conf
                  </a>, the biggest web development conference in northern Greece. We are also known
                  as{' '}
                  <a rel="noopener noreferrer" href="http://skgtech.io" target="_blank">
                    SKGtech
                  </a>.
                </p>
                <p>
                  This site is being generated using Gatsby.js and you can find the source on{' '}
                  <a href="https://github.com/kbariotis/kostasbariotis.com"> GitHub</a>.
                </p>
                <p>
                  I am currently living in Thessaloniki, Greece. Have you ever been? Take a look, I
                  am sure you will fall in love with the amazing beaches of Chalkidiki.
                </p>
              </div>
            </div>
            <div className="row about-section">
              <div className="medium-2 about-section-title">BIO</div>
              <div className="medium-10">
                <div className="row">
                  <div className="medium-2 bio-date">2018</div>
                  <div className="medium-10 text-right">
                    Started working with <a href="https://geekbot.io">Geekbot</a>, a fully remote
                    company with a mission to change the way we do standup meetings.
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2017</div>
                  <div className="medium-10 text-right">
                    Started working with <a href="https://quotelier.com">Quotelier</a>. A amazing
                    product on the hospitality industry.
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2017</div>
                  <div className="medium-10 text-right">
                    Released <a href="https://janitr.net">Janitr.net</a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2016</div>
                  <div className="medium-10 text-right">
                    Started the first ever{' '}
                    <a href="http://devastation.tv">Podcast for greek developers</a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2015</div>
                  <div className="medium-10 text-right">
                    Started working with <a href="http://goodvid.io">Goodvidio</a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2014</div>
                  <div className="medium-10 text-right">
                    Won the first place at{' '}
                    <a href="http://www.startuplive.org/events/thessaloniki-1/">
                      Thessaloniki Startup Live
                    </a>{' '}
                    with the <a href="http://tunedeck.navideck.com/">Tunedeck Team</a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2014</div>
                  <div className="medium-10 text-right">
                    <a href="http://stargento.com">Stargento</a> is on the air
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2014</div>
                  <div className="medium-10 text-right">
                    Started working with a local web design agency. Lots of E-Commerce, Magento
                    based, projects
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2013</div>
                  <div className="medium-10 text-right">This blog is born</div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2013</div>
                  <div className="medium-10 text-right">
                    Started working with <a href="http://dtek.gr">DTek</a>. A lot of nice projects
                    born from there like <a href="http://carfinder.gr">Carfinder.gr</a> and{' '}
                    <a href="http://viralcontestapp.com">Viral Contest App</a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2013</div>
                  <div className="medium-10 text-right">
                    Fulfilled my military service as defined by the Greek Constitution (nine months)
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2012</div>
                  <div className="medium-10 text-right">
                    Graduated from{' '}
                    <a href="http://it.teithe.gr">
                      A.T.E.I. Thessalonikis with the BsC of Computer Science
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2005</div>
                  <div className="medium-10 text-right">
                    Started Web Development using raw HTML, CSS, JS
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2002</div>
                  <div className="medium-10 text-right">
                    Started Web Development using Flash, Dreamweaver and MS Web Publisher
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2001</div>
                  <div className="medium-10 text-right">
                    Wrote my first app (Lucky Seven) using Visual Basic
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">2000</div>
                  <div className="medium-10 text-right">
                    Bought my first computer. Since then I have formatted every hard disk of my
                    close friends
                  </div>
                </div>
                <div className="row">
                  <div className="medium-2 bio-date">1988</div>
                  <div className="medium-10 text-right">
                    Bing Bang happens somewhere in Thessaloniki, Greece.
                    <a href="https://en.wikipedia.org/wiki/Millennials">
                      Generation Y got upgraded
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row about-section">
              <div className="medium-2 about-section-title">PROJECTS</div>
              <div className="medium-10">
                <div className="row">
                  <div className="medium-4">
                    <a rel="noopener noreferrer" href="https://janitr.net" target="_blank">
                      Janitr
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    A Slack bot that welcomes news members on your team
                  </div>
                </div>
                <div className="row">
                  <div className="medium-4">
                    <a rel="noopener noreferrer" href="https://gityeller.com" target="_blank">
                      GitYeller (Dead)
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    Subscribe to your favorite GitHub repository and get notified by email for new
                    issues with specific labels.
                  </div>
                </div>
                <div className="row">
                  <div className="medium-4">
                    <a rel="noopener noreferrer" href="http://stargento.com" target="_blank">
                      Stargento (Dead)
                    </a>
                  </div>
                  <div className="medium-8 text-right">
                    PHP sandbox powered up with the latest Magento installation to test your Magento
                    skills
                  </div>
                </div>
              </div>
            </div>

            <div className="row about-section">
              <div className="medium-2 about-section-title">TALKS</div>
              <div className="medium-10">
                <div className="row">
                  <div className="medium-4">
                    <a
                      rel="noopener noreferrer"
                      href="http://slides.com/kostasbariotis/javascript-101"
                      target="_blank"
                    >
                      JavaScript 101
                    </a>
                  </div>
                  <div className="medium-8 text-right">A JavaScript journey for beginners</div>
                </div>
                <div className="row">
                  <div className="medium-4">
                    <a
                      rel="noopener noreferrer"
                      href="https://slides.com/kostasbariotis/microservices"
                      target="_blank"
                    >
                      Micro Services Architecture
                    </a>
                  </div>
                  <div className="medium-8 text-right">How do I scale my codebase</div>
                </div>
                <div className="row">
                  <div className="medium-offset-4 medium-8 text-right">Find all my presentation slides at <a rel="noopener noreferrer"
                    target="_blank"href="https://slides.com/kostasbariotis/">Slides.com</a></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
}

About.propTypes = {
  data: PropTypes.object,
};

export const aboutPageQuery = graphql`
  query AboutPageSiteMetadata {
    site {
      siteMetadata {
        siteUrl
      }
    }
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;
