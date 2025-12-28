import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Store from './pages/Store'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  )
}