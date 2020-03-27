import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import * as Icon from "../../components/icons"

const Thanks = () => (
	<Layout>
		<SEO title="Thank you!" />
		<div className="container" style={{ marginTop: "2rem" }}>
			<h2>
				Thank you<span className="accent">.</span>
			</h2>
			<p>
				Your message was sent. I'll get back to you as soon as I can.
				<br />
				In the meantime, please feel free to explore my social media
				profiles:
			</p>

			<a
				href="https://github.com/jakeherp"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon.Github />
			</a>
			<a
				href="https://www.linkedin.com/in/jacobherper"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon.Linkedin />
			</a>
			<a
				href="https://twitter.com/jakeherp"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon.Twitter />
			</a>
			<a
				href="https://instagram.com/jakeherp"
				target="_blank"
				rel="noopener noreferrer"
			>
				<Icon.Instagram />
			</a>
		</div>
	</Layout>
)

export default Thanks
