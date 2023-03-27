import { About } from './components/about'
import { Contact } from './components/contact'
import { Home } from './components/home'
import { Navbar } from './components/navbar'
import { Projects } from './components/projects'
import './global.css'

export function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  )
}
  