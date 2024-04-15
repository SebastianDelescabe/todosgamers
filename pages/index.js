import React, { useEffect, useState } from "react"
import HappyAlert from "../components/home/HappyAlert"
import BreweryCard from "../components/home/BreweryCard"
import { fetchBrewerys } from "../helpers/fetchBrewerys"

export default function Home() {

  const [brewerys, setbrewerys] = useState([])

  useEffect(() => {
    if(brewerys.length <= 0){
      fetchBrewerys()
      .then(response => {
        setbrewerys(response)
      })
    }
  }, [brewerys])

  return (
    <section id="home">
      <HappyAlert/>
      <h1 className="app__title">Todas las opciones</h1>
      <div className="home__options">
        {
          brewerys && brewerys.map(brewery => (
            <BreweryCard key={brewery.breweryID} data={brewery}/>
          ))
      }
      </div>
      <h1 className="app__title" id='filterName'>Opciones en California</h1>
      <div className="home__options">
        <BreweryCard data={brewerys}/>
      </div>
    </section>
  )
}
