import { useEffect } from 'react'
import { Route, useLocation, useRouteMatch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MainLayout from './layouts/MainLayout'
import LandingPage from './page/LandingPage'
import DigitalFinancePage from './page/finance/finance'
import RegisterPage from './page/register/register'
import LoginPage from './page/login/login'
import PricingPage from './page/pricing/pricing'
import EntreprisePage from './page/company/company'
import ContactPage from './page/contact/contact'
import OfflinePaymentPage from './page/offlinePayment'
import OnlinePaymentPage from './page/onlinePayment'
import ShareLinkPage from './page/sharableLink'
import DevelopersPage from './page/developer/developers'
import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-jq'
import 'prismjs/components/prism-http'
import 'prismjs/components/prism-uri'

const MainPaths = [
  '/',
  '/contact-us',
  '/digital-finance',
  '/pricing',
  '/company',
  '/docs',
  '/login',
  '/register',
  '/offline-payment',
  '/online-payment',
  '/shareLink-payment'
]

export default function App() {
  const { path } = useRouteMatch()
  const { pathname } = useLocation()

  useEffect(() => {
    Prism.highlightAll()
    if (MainPaths.includes(pathname)) {
      window.scroll(0, 0)
    }
  }, [pathname])

  return (
    <Route path="/">
      <Navbar />
      <MainLayout>
        <Route exact path={path} >
          <LandingPage />
        </Route>
        <Route exact path={`${path}digital-finance`}>
          <DigitalFinancePage />
        </Route>
        <Route exact path={`${path}register`}>
          <RegisterPage />
        </Route>
        <Route exact path={`${path}login`}>
          <LoginPage />
        </Route>
        <Route exact path={`${path}pricing`}>
          <PricingPage />
        </Route>
        <Route exact path={`${path}company`}>
          <EntreprisePage />
        </Route>
        <Route exact path={`${path}contact-us`}>
          <ContactPage />
        </Route>
        <Route exact path={`${path}online-payment`}>
          <OnlinePaymentPage />
        </Route>
        <Route exact path={`${path}offline-payment`}>
          <OfflinePaymentPage />
        </Route>
        <Route exact path={`${path}shareLink-payment`}>
          <ShareLinkPage />
        </Route>
        <Route exact path={`${path}docs`}>
          <DevelopersPage />
        </Route>
      </MainLayout>
      <Footer />
    </Route>
  )
}
