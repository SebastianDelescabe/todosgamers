import '../styles/globals.css'
//Estilos componentes
import '../styles/components/header/Header.css'
import '../styles/components/home/HappyAlert.css'
import '../styles/components/home/Home.css'
import '../styles/components/footer/Footer.css'
import '../styles/components/home/BreweryCard.css'
import '../styles/components/vip/BreweryData.css'
import '../styles/components/locationAndPhone/LocationAndPhone.css'
import '../styles/components/vip/Vip.css'
import '../styles/components/vip/BreweryImages.css'
import '../styles/components/vip/BreweryReviews.css'

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


function MyApp({ Component, pageProps }) {  
  return (
    <div className='container'>
      <Header/>
        <main id='app'>
          <Component {...pageProps} />
        </main>
      <Footer/>
    </div>
  )
}

export default MyApp
