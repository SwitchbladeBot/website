import { Link } from "gatsby"
import * as React from "react"
import Helmet from 'react-helmet'
import Alexa from "../components/Alexa"

export default function Index () {
  return (
    <main>
      <Helmet>
        <title>The only bot you'll ever need | Switchblade</title>
      </Helmet>
      <Alexa/>
      <Link to='about'>aaaaaaaa</Link>
    </main>
  )
}
