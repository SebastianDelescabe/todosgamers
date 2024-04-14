import React from "react"
import HappyAlert from "../components/home/HappyAlert"
import BreweryCard from "../components/home/BreweryCard"

export default function Home() {
  return (
    <section id="home">
      <HappyAlert/>
      <h1 className="app__title">Todas las opciones</h1>
      <div className="home__options">
        <BreweryCard/>
        <BreweryCard/>
      </div>
      <h1 className="app__title">Opciones en California</h1>
      <div className="home__options">
        <BreweryCard/>
        <BreweryCard/>
      </div>
    </section>
  )
}
