import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Skill from '../components/skill'
import * as Flag from '../components/flags'

const Uses = () => (
  <Layout>
    <SEO title="Uses" />
    <div className="container" style={{ marginTop: '2rem' }}>
      <h2>
        Nate uses<span className="accent">...</span>
      </h2>
      <div className="grid">
        <div className="column a">
          <p>
            Welcome to my &quot;Uses&quot; page, that lists some of the hardware and software I use
            on a daily basis.
          </p>
          <h2>Development Tools</h2>
          <ul>
            <li>
              <strong>VS Code</strong> with the <strong>Night Owl</strong> theme and{' '}
              <strong>Operator Mono</strong> font
            </li>
            <li>
              <strong>Hyper</strong> Terminal
            </li>
            <li>
              <strong>Sourcetree</strong> for version control beyond the command line
            </li>
            <li>
              <strong>Postman</strong> to test API's
            </li>
          </ul>

          <h2>Design Tools</h2>
          <ul>
            <li>
              <strong>Sketch</strong>
            </li>
            <li>
              <strong>Figma</strong>
            </li>
            <li>
              <strong>Affinity Photo</strong>, <strong>Affinity Designer</strong>,{' '}
              <strong>Affinity Publisher</strong>
            </li>
          </ul>

          <h2>Productivity</h2>
          <ul>
            <li>
              <strong>Notion</strong> for notes and to-do lists
            </li>
            <li>
              <strong>Jira</strong> for project management
            </li>
            <li>
              <strong>Slack</strong> for communication
            </li>
            <li>
              <strong>G-Suite</strong> for email, calendars and Google Drive
            </li>
          </ul>

          <h2>Various other software</h2>
          <ul>
            <li>
              <strong>Google Chrome</strong> (Canary) for development
            </li>
            <li>
              <strong>1Password</strong> as my password manager
            </li>
            <li>
              <strong>Backblaze</strong> for constant backups of my machines
            </li>
            <li>
              <strong>Magnet</strong> to manage windows
            </li>
          </ul>

          <h2>Hardware</h2>
          <ul>
            <li>
              <strong>Macbook Pro 15"</strong> (2.9 GHz i7, 16 GB 2133 MHz LPDDR3)
            </li>
            <li>
              <strong>Apple Magic Keyboard 2</strong>
            </li>
            <li>
              <strong>Apple Magic Trackpad 2</strong>
            </li>
            <li>
              <strong>LG 27UK850</strong> 4K monitor
            </li>
            <li>
              <strong>Rain Design mStand</strong>
            </li>
            <li>
              <strong>iPhone 11 Pro</strong> (256 GB)
            </li>
            <li>
              <strong>Bose 700</strong> headphones
            </li>
            <li>
              <strong>Google Home</strong> to control my smart home
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Uses
