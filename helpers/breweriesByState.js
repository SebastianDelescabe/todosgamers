export async function breweriesByState(titleBrewery){

    const url = `https://api.openbrewerydb.org/v1/breweries?by_state=${titleBrewery}&per_page=5`

   try {

    const response = await fetch(url)
    const filteredApiBreweries = await response.json()

    const filteredBreweries = filteredApiBreweries.map(brewery => {
        return{
            breweryID: brewery.id,
            breweryName: brewery.name,
            breweryAdress: brewery.address_1,
            breweryPhone:brewery.phone,
            breweryState:brewery.state
        }
    })
    
    return filteredBreweries

   } catch (error) {
    console.log(error);
   }
}