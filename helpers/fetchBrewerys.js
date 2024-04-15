export async function fetchBrewerys(){
    try {
        const url = `https://api.openbrewerydb.org/v1/breweries`
    
        const response = await fetch(url)
        const brewerysApiInfo = await response.json()

        const breweryAppData = brewerysApiInfo.map(brewery => {
            return{
                breweryID: brewery.id,
                breweryName: brewery.name,
                breweryAdress: brewery.address_1,
                breweryPhone:brewery.phone,
            }
        })

        return breweryAppData.slice(0,10)

    } catch (error) {
        console.log(error)
    }
}
