import '../styles/globals.css'
import '../styles/components/Header.css'
import Header from '../components/header/Header'

function MyApp({ Component, pageProps }) {  
  return (
    <div className='container'>
    <Header/>
    <main>
      <Component {...pageProps} />
    </main>
    </div>
  )
}

export default MyApp
