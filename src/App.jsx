import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Cycles from './pages/Cycles'
import Maternelle from './pages/cycles/Maternelle'
import Primaire from './pages/cycles/Primaire'
import College from './pages/cycles/College'
import Lycee from './pages/cycles/Lycee'
import Admissions from './pages/Admissions'
import SchoolLife from './pages/SchoolLife'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Careers from './pages/Careers'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="cycles" element={<Cycles />} />
        <Route path="cycles/maternelle" element={<Maternelle />} />
        <Route path="cycles/primaire" element={<Primaire />} />
        <Route path="cycles/college" element={<College />} />
        <Route path="cycles/lycee" element={<Lycee />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="vie-scolaire" element={<SchoolLife />} />
        <Route path="actualites" element={<News />} />
        <Route path="galerie" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<Faq />} />
        <Route path="carrieres" element={<Careers />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
