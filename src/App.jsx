import './App.css'
import Nav from './components/Nav'
import AboutHelpi from './pages/AboutHelpi/AboutHelpi'
import Hellow from './pages/Hellow/Hellow'
import PlansAndPricing from './pages/PlansAndPricing/PlansAndPricing'
import { LayoutResponsive } from './styled-components'

function App() {

  return (
    <div className="App">
      <Nav/>
      <LayoutResponsive>
        <Hellow />
        <AboutHelpi/>
        <PlansAndPricing />
      </LayoutResponsive>
    </div>
  )
}

export default App
