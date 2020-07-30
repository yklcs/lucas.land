import React from "react"
import { Helmet } from "react-helmet"

import Bio from "../../src/components/bio"
import Vis from "./_vis"

import styles from "../../src/scss/layout.module.scss"

const Index = () => (
  <div className={`${styles.layout} ${styles.large}`}>
    <Helmet
      bodyAttributes={{
        class: "index"
      }}
    />
    <Bio />
    <Vis />
  </div>
)

export default Index
