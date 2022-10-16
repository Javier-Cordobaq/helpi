import './App.css'
import Nav from './components/Nav'
import AboutHelpi from './pages/AboutHelpi/AboutHelpi'
import Hellow from './pages/Hellow/Hellow'
import HelpiExample from './pages/HelpiExample/HelpiExample'
import PlansAndPricing from './pages/PlansAndPricing/PlansAndPricing'
import { Layout, LayoutResponsive } from './styled-components'

function App() {

  return (
    <Layout>
      <Nav/>
      <LayoutResponsive>
        <Hellow />
        <AboutHelpi/>
        <HelpiExample/>
        <PlansAndPricing />
      </LayoutResponsive>
    </Layout>
  )
}

export default App
