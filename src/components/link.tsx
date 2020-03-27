import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

interface IProps {
	children: React.ReactNode
	to: string
	rel?: string
}

const Link = ({ children, to, rel }: IProps) => (
	<AniLink fade to={to} duration={0.5} hex="#e94e1b" rel={rel}>
		{children}
	</AniLink>
)

export default Link
