import React from "react";

interface Props {
    logo?: string,
    logotext?: string,
}

export const Navbar: React.FC<Props> = ({ logo, logotext }) => {
    return (
        <nav>
            <a href="/" title="Nerdee.io Home">
                <img src={ logo } alt="Logo"/>
                <h1>{ logotext }</h1>
            </a>
        </nav>
    )
}