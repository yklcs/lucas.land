import React, { useState, useContext } from "react"

import styles from "../../src/scss/bio.module.scss"

import { LocaleContext } from "./wrapper"

const Bio = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.bio}>
      <div className={styles.about}>
        <div className={styles.col}>
          <span>~/rocketll</span>
          <span>HAS</span>
        </div>
        <div className={styles.col}>
          <a href="mailto:me@lucas.land" className={styles.link}>me@lucas.land</a>
          <a href="https://github.com/rocketll" className={styles.link}>github</a>
        </div>
      </div>
    </div>
  )
}

export default Bio
