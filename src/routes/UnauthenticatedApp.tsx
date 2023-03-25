import { Route, Routes } from 'react-router-dom'
import { Home, Details } from 'pages'

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:name' element={<Details />} />
    </Routes>
  )
}

export default UnauthenticatedApp
