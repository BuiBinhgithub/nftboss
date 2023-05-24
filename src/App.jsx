import './App.css'
import Auctions from './components/Auctions/auctions'
import Todo from './components/Todo/todo'
import Collection from './components/collections/collecttion'
import DigitalArt from './components/digitalart/digitalart'
import Explore from './components/explore/explore'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Trending from './components/trending/trending'

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <DigitalArt />
        <Auctions />
        <Collection />
        <Trending />
        <Todo />
        <Explore />
        <Footer />
      </div>
    </>
  )
}

export default App
