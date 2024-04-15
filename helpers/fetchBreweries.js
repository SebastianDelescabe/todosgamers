export async function fetchBreweries(){
    try {
        const url = `https://api.openbrewerydb.org/v1/breweries`
    
        const response = await fetch(url)
        const breweriesApiInfo = await response.json()

        const breweriesAppData = breweriesApiInfo.map(brewery => {
            return{
                breweryID: brewery.id,
                breweryName: brewery.name,
                breweryAdress: brewery.address_1,
                breweryPhone:brewery.phone,
                breweryState:brewery.state
            }
        })
        
        return breweriesAppData.slice(0,10)

    } catch (error) {
        console.log(error)
    }
}
