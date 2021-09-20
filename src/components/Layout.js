import { Link,useStaticQuery,graphql } from 'gatsby'
import React from 'react'
import {heading,container,navLinkItem,navLinkText,navLinks} from "./layout.module.css"

function Layout({pageTitle,children}) {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `);

    return (
        <div className={container}>
            <title> {data.site.siteMetadata.title}| {pageTitle}</title>
            <header>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>               
        </div>
    )
}

export default Layout
    