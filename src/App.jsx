import React, { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import CheckPage from "./components/custom/CheckPage"
import ErrorBoundary from './components/custom/ErrorBoundary'
import Loader from './components/custom/Loader'
import PageNotFound from './components/custom/PageNotFound'
const Home = lazy(() => import('./pages/Home'))
const AllServices = lazy(() => import('./pages/AllServices'))

const HomeWith404 = CheckPage(Home)
const AllServicesWith404 = CheckPage(AllServices)

const App = () => {
  return (
    <main className='relative max-w-7xl'>
      <ErrorBoundary />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomeWith404 />} />
          <Route path="/all-services" element={<AllServicesWith404 />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
      <Toaster />
    </main>
  )
}

export default App
