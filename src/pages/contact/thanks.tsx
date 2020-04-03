import React from 'react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as Icon from '../../components/icons'

const Thanks = () => (
  <Layout>
    <SEO title="Thank you!" />
    <div className="container" style={{ marginTop: '2rem' }}>
      <h2>
        Thank you<span className="accent">.</span>
      </h2>
      <p>
        Your message was sent. I'll get back to you as soon as I can.
        <br />
        In the meantime, please feel free to explore my social media profiles:
      </p>

      <a href="https://github.com/njomb" target="_blank" rel="noopener noreferrer" title="Github">
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
  </Layout>
)

export default Thanks
