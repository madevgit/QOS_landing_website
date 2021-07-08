import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Footer from './components/footer'
import LandingPage from './page/landing'
import RegisterPage from './page/register'
import LoginPage from './page/login'
import PricingPage from './page/pricing'
import FinancePage from './page/finance'
import EntreprisePage from './page/entreprise'
import MainLayout from './layouts/mianLayout'
import DevelopersPage from './page/developers'
import ContactPage from './page/contact'
export default function App() {
  useEffect(() => {
   
  })
  return (
    <MainLayout>
      <Navbar />
      <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path="/register">
        <RegisterPage />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/pricing">
        <PricingPage />
      </Route>
      <Route path="/finance">
        <FinancePage />
      </Route>
      <Route path="/company">
        <EntreprisePage />
      </Route>
      <Route path="/developers">
        <DevelopersPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Footer />
    </MainLayout>
  )
}