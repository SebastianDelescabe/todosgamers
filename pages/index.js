import React, { useEffect, useState } from "react";
import HappyAlert from "../components/home/HappyAlert";
import BreweryCard from "../components/home/BreweryCard";
import { fetchBreweries } from "../helpers/fetchBreweries";
import { breweriesByState } from "../helpers/breweriesByState";

export default function Home() {
  const [breweries, setBreweries] = useState(false);
  const [filteredBreweries, setFilteredBreweries] = useState(false);
  const [loading, setLoading] = useState(true);

  const filterStateName = "California";

  useEffect(() => {
    if (!breweries) {
      fetchBreweries().then((response) => {
        setBreweries(response);
      });
    }
  }, [breweries]);

  useEffect(() => {
    if (!filteredBreweries && breweries) {
      breweriesByState(filterStateName).then((response) => {
        setFilteredBreweries(response);
        setTimeout(() => {
          setLoading(false);
        }, 300);
      });
    }
  }, [breweries]);

  if (loading) {
    return (
      <div className="loader">
        <div className="lds-dual-ring"></div>
      </div>
    );
  } else {
    return (
      <section id="home">
        <div className="home__container">
          <HappyAlert />
          <h1 className="app__title">Todas las opciones</h1>
          <div className="home__options">
            {breweries &&
              breweries.map((brewery) => (
                <BreweryCard key={brewery.breweryID} data={brewery} />
              ))}
          </div>
          <h1 className="app__title">Opciones en {filterStateName}</h1>
          <div className="home__options">
            {filteredBreweries && filteredBreweries.map((brewery) => (
                <BreweryCard key={brewery.breweryID} data={brewery} />
              ))}
          </div>
        </div>
      </section>
    );
  }
}
