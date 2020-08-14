import React, { useContext } from "react"
import styles from "../../src/scss/right.module.scss"
import { LocaleContext } from "./wrapper"
import { BsArrowUpRight } from "react-icons/bs"
import { useSprings, animated } from "react-spring"

const Links = () => {
  const [springs, set] = useSprings(3, () => ({
    transform: "translate(-1rem, 1rem)",
    opacity: 0,
    config: {
      tension: 200,
      friction: 20
    }
  }))

  const handleEnter = (n) => () => {
    set((i) => {
      if (i === n)
        return {
          transform: "translate(0px, 0px)",
          opacity: 1,
        }
    })
  }

  const handleLeave = (n) => () => {
    set((i) => {
      if (i === n)
        return {
          transform: "translate(-1rem, 1rem)",
          opacity: 0,
        }
    })
  }

  const Link = ({ children, to, i }) => (
    <a
      className={styles.link}
      href={to}
      onMouseEnter={handleEnter(i)}
      onMouseLeave={handleLeave(i)}
    >
      {children}
      <animated.i className={styles.icon} style={springs[i]}>
        <BsArrowUpRight size={"1.2rem"} />
      </animated.i>
    </a>
  )

  return (
    <div className={styles.links}>
      <Link to={"https://github.com/rocketll"} i={0}>github</Link>
      <Link to={"https://behance.net/rocketll"} i={1}>behance</Link>
    </div >
  )
}

const Right = () => {
  const { locale } = useContext(LocaleContext)

  return (
    <div className={styles.right}>
      <p className={styles.desc}>
        Seoul (KR) based developer and computer science student with a keen interest in design.
        Specializing in full-stack web development and computational science.
        <span className={styles.emph}> Available for projects.</span>
      </p>
      <Links />
    </div>
  )
}

export default Right
