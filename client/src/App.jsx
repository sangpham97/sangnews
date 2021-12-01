import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import StayConnectAndSubscibe from './components/StayConnectAndSubscibe'
import About from './page/About'
import BussinesNews from './page/BussinesNews'
import Contact from './page/Contact'
import Entreprenurship from './page/Entreprenurship'
import Home from './page/Home'
import Invesments from './page/Invesments'
import SingleNews from './page/SingleNews'
import StartUps from './page/StartUps'
import StockMarket from './page/StockMarket'

function App() {
  return (
    <div className='px-3 lg:px-0 bg-gray-100'>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/business news'>
          <BussinesNews />
        </Route>
        <Route exact path='/entrepreneurship'>
          <Entreprenurship />
        </Route>
        <Route exact path='/investments'>
          <Invesments />
        </Route>
        <Route exact path='/startups'>
          <StartUps />
        </Route>
        <Route exact path='/stock market'>
          <StockMarket />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/:type/:id'>
          <SingleNews />
        </Route>
      </Switch>
      <StayConnectAndSubscibe />
      <Footer />
    </div>
  )
}

export default App
