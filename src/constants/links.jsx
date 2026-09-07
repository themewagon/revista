import React from 'react'
import { sitePath } from '../utils/sitePath'

const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href={sitePath('/')} className="page-link">
          Home
        </a>
      </li>
      <li>
        <a href={sitePath('/about')} className="page-link">
          About
        </a>
      </li>
      <li>
        <a href={sitePath('/categories')} className="page-link">
          Categories
        </a>
      </li>
      <li>
        <a href={sitePath('/contact')} className="page-link">
          Contact
        </a>
      </li>
    </ul>
  )
}

export default Links
