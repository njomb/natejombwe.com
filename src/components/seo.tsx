import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

interface IProps {
  description?: string
  lang?: string
  meta?: any
  keywords?: string[] | undefined
  title: string
}

function SEO({ description, lang, meta, keywords, title }: IProps) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description || data.site.siteMetadata.description
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`${data.site.siteMetadata.title} | Cloud Engineer in Perth » %s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `author`,
                content: `Nate Jombwe`,
              },
              {
                property: `og:title`,
                content: `Web Developer Nate Jombwe in Perth`,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                name: `og:image`,
                content: `https://res.cloudinary.com/jacobherper/image/upload/c_scale,q_60,w_1200/v1550769296/website.jpg`,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: `https://herper.io/`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:image`,
                content: `https://res.cloudinary.com/jacobherper/image/upload/c_scale,q_60,w_1200/v1550769296/website.jpg`,
              },
              {
                name: `twitter:title`,
                content: `Web Developer Nate Jombwe in Perth`,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : [],
              )
              .concat(meta)}
            script={[
              {
                type: `application/ld+json`,
                innerHTML: `{"@context":"http://schema.org","@type":"WebSite","name":"herper.io","alternateName":"Nate Jombwe","url":"https://herper.io/","description":"Front End Web Developer with a passion for all things digital. I have more than 10 years experience working in web development.","image":"https://res.cloudinary.com/jacobherper/image/upload/c_scale,q_60,w_1200/v1550769296/website.jpg"}`,
              },
              {
                type: `application/ld+json`,
                innerHTML: `{"@context":"http://schema.org","@type":"Person","image":"https://res.cloudinary.com/jacobherper/image/upload/c_scale,w_600/v1550749234/jacob_herper.jpg","name":"Nate Jombwe","alternateName":"JakeHerp","url":"https://herper.io/","jobTitle":["Front End Web Developer","Web Developer","Frontend Engineer"],"hasOccupation":{"@type":"Occupation","name":"Web Developer","occupationLocation":{"@type":"City","name":"Perth"},"estimatedSalary":[{"@type":"MonetaryAmountDistribution","name":"base","currency":"GBP","unitText":"HOUR","percentile10":"74","percentile25":"80","median":"90","percentile75":"100","percentile90":"106"}],"description":"Develops websites and applications using HTML5 and JavaScript.","skills":"HTML5, CSS, JavaScript, React, PHP, Sass, Less, Node.js, Express.js, Vue.js, Gatsby, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, Joomla, Drupal, E-Commerce","alternateName":["Frontend Developer","Full Stack Developer","Frontend Engineer"],"responsibilities":["Web Design","Website Development","JavaScript Development","WordPress Development","CMS Development","Frontend Development","Full Stack Development","Online Marketing","SEO Services","Web Developer","Website Maintenance"]},"sameAs":["http://linkedin.com/in/jacobherper","http://twitter.com/jakeherp","https://github.com/jakeherp","https://www.facebook.com/jakeherp","https://instagram.com/jakeherp"],"brand":[{"@type":"Brand","name":"Web Developer","alternateName":"Frontend Engineer"},{"@type":"Brand","name":"JakeHerp","alternateName":"Nate Jombwe"}],"memberOf":[{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency"},{"@type":"Organization","url":"https://raconteur.net/","name":"Raconteur","alternateName":"Raconteur Media"}],"homeLocation":{"@type":"City","name":"Perth"},"owns":{"@type":"Organization","url":"https://creativ.agency/","name":"Creativ Agency Ltd","alternateName":"Creativ Advertising Agency","sameAs":"https://www.linkedin.com/company/creativ.agency"},"alumniOf":{"@type":"Organization","url":"https://www.thespecialistworks.com/","name":"The Specialist Works"},"nationality":{"@type":"Country","name":"Germany"},"birthDate":"1990-11-06","birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Oelsnitz","postalCode":"08606","addressCountry":"Germany"}},"parent":[{"name":"Norbert Jombwe","jobTitle":"Chef","birthDate":"1967-08-22"},{"name":"Anne-Kristin Jombwe","birthDate":"1968-02-26"}],"spouse":{"name":"Cinthia Cid Paz","birthDate":"1990-09-19","nationality":{"@type":"Country","name":"Mexico"},"birthPlace":{"@type":"Place","address":{"@type":"PostalAddress","addressLocality":"Toluca","addressCountry":"Mexico"}}}}`,
              },
            ]}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
