import React from 'react'
import BreweryData from '../components/vip/BreweryData'
import BreweryReviews from '../components/vip/BreweryReviews'

export default function vip() {
  return (
    <section id='vip'>
      <h1 className="app__title">Bar Nim</h1>
      <BreweryData/>
      <h1 className="app__title">Opiniones</h1>
      <BreweryReviews/>
    </section>
  )
}
