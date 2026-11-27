import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Code splitting por rota (react-performance): a página inicial vem no bundle principal,
// as demais carregam sob demanda.
const Sobre = lazy(() => import('./pages/Sobre'))
const Pesquisa = lazy(() => import('./pages/Pesquisa'))
const Equipe = lazy(() => import('./pages/Equipe'))
const Infraestrutura = lazy(() => import('./pages/Infraestrutura'))
const Contato = lazy(() => import('./pages/Contato'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="pesquisa" element={<Pesquisa />} />
        <Route path="equipe" element={<Equipe />} />
        <Route path="infraestrutura" element={<Infraestrutura />} />
        <Route path="contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
