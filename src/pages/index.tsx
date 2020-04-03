import React from 'react'
import Typed from 'react-typed'
import * as Icon from '../components/icons'
import Layout from '../components/layout'
import Link from '../components/link'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = () => {
  const headshot = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/nate_jombwe.jpeg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `web developer`,
          `cloud engineer`,
          `consultant`,
          `IT consultant`,
          `nate jombwe`,
          `nathan jombwe`,
          `developer`,
          `perth`,
        ]}
      />
      <section id="home" style={{ display: 'flex' }}>
        <Img fixed={headshot.file.childImageSharp.fixed}></Img>
        <div className="container" style={{ position: `relative`, zIndex: 1 }}>
          <h2>
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Nate Jombwe</span>.",
                "I'm a <span class='accent'>Cloud Engineer</span>.",
                "I'm a <span class='accent'>Consultant</span>.",
                "I'm a <span class='accent'>Web Developer</span>.",
                "I'm a <span class='accent'>Musician</span>.",
                "I'm a <span class='accent'>Photographer</span>.",
              ]}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              className="typed"
              style={{ fontSize: '0.71em', marginTop: '-2em' }}
            />
          </h2>
          <p>
            I am passionate about technology and its effect on the world we live in. You can find me
            at{' '}
            <a href="https://www.mechanicalrock.io">
              <strong>Mechanical Rock</strong>
            </a>{' '}
            delivering industry leading cloud infrastructure and applications.
            <br />
            <br />
            I'm also an{' '}
            <Link to="/Photography">
              <strong>amatuer photographer</strong>
            </Link>
            ,{' '}
            <Link to="Music">
              <strong>musician</strong>
            </Link>
            , and{' '}
            <Link to="Blog">
              <strong>aspiring blogger</strong>.
            </Link>
            <br />
            <br />
            <Link to="/contact/">
              <strong>Get in touch</strong>
            </Link>{' '}
            to discuss how we can work together.
          </p>
          <a
            href="https://github.com/njomb"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <Icon.Github />
          </a>
          <a
            href="https://www.linkedin.com/in/nathan-w-jombwe/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <Icon.Linkedin />
          </a>
          <a
            href="https://instagram.com/natejombs"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <Icon.Instagram />
          </a>
          <a
            href="https://open.spotify.com/artist/5J1y3fW7hjTy04KlRPjflD?si=diClEIRLRoeK4bGHkGDVxQ"
            target="_blank"
            rel="noopener noreferrer"
            title="Spotify"
          >
            <Icon.Spotify />
          </a>
          <a
            href="https://soundcloud.com/jombs"
            target="_blank"
            rel="noopener noreferrer"
            title="SoundCloud"
          >
            <Icon.SoundCloud />
          </a>
        </div>
      </section>
    </Layout>
  )
}
//
export default IndexPage
