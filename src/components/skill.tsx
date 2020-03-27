import React from "react"

interface IProps {
	color?: string
	children: React.ReactNode
}

const Skill = ({ color, children }: IProps) => (
	<span className={`skill ${color ? color : "default"}`}>{children}</span>
)

export default Skill
