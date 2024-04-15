export async function breweriesByID(id){

    const url = `https://api.openbrewerydb.org/v1/breweries?by_ids=${id}`

    try {
        const response = await fetch(url)
        const breweryApiData = await response.json()
    
        const breweryData = breweryApiData.map(brewery => {
            return{
                breweryID: brewery.id,
                breweryName: brewery.name,
                breweryAdress: brewery.address_1,
                breweryPhone:brewery.phone,
            }
        })

        return breweryData;

    } catch (error) {
        console.log(error);
    }
}