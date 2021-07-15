import { useEffect } from 'react'
import { Route, useLocation } from 'react-router-dom'
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
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-highlight/prism-line-highlight'
import 'prismjs/plugins/command-line/prism-command-line'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jq'
import 'prismjs/components/prism-http'
import 'prismjs/components/prism-uri'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    Prism.highlightAll()
  }, [pathname])

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