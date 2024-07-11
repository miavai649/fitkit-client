import Home from './pages/home/Home'
import AOS from 'aos'
import { useEffect } from 'react'

const App = () => {
  // initialize aos animation
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile'
    })
  })
  return (
    <div>
      <Home />
    </div>
  )
}

export default App
