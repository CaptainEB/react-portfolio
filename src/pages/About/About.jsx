import React from 'react'
import hero from '/hero-picture.jpg?url'
import Styles from './About.module.css'

export default function About() {
  return (
    <section>
      <section className={Styles.hero}>
        <img src={hero} alt="Sam's picture" />
        <h1>Developer</h1>
      </section>
      <section className={Styles.about_me}>
        <h2>About Me</h2>
        <p>
          I'm a developer based in the USA, I have a passion for creating
          websites and applications that are both functional and visually
          appealing. <br />
          I have experience working with JavaScript, React, Node, Express, and other full stack technologies.
        </p>
      </section>
    </section>
  )
}
