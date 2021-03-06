import React from 'react'
import { navigate } from 'gatsby-link'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import * as Icon from '../../components/icons'

function encode(data: any) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Contact extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e: any) => {
    e.preventDefault()
    const form = e.target
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <Layout>
        <SEO title="Contact" />
        <div className="container" style={{ marginTop: '2rem' }}>
          <h2>
            Contact<span className="accent">.</span>
          </h2>
          <p>
            Wanna talk? Send me an email through the form below or get in touch through my social
            media.
          </p>

          <form
            name="contact"
            method="post"
            action="/contact/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" onChange={this.handleChange} />
            <div className="field">
              <label htmlFor="name">
                Name <span className="accent">*</span>
              </label>
              <input
                className="input"
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
              />
            </div>
            <div className="field">
              <label htmlFor="email">
                Email <span className="accent">*</span>
              </label>
              <input
                className="input"
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={true}
              />
            </div>
            <div className="field">
              <label htmlFor="message">
                Message <span className="accent">*</span>
              </label>
              <textarea
                className="textarea"
                name={'message'}
                onChange={this.handleChange}
                id={'message'}
                required={true}
              />
            </div>
            <div className="actions">
              <button type="submit" className="special">
                Send message &raquo;
              </button>
            </div>
          </form>

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
      </Layout>
    )
  }
}

export default Contact
