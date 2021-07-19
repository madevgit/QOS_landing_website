import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { media } from '../libs/media'
import Wrapper from './sectionWrapper'
import { MobileNavbar } from './MobileNavbar'
import { LinkGroup } from './LinkGroup'
import { LinkIcon } from './LinkIcon'

const { online,offline,digitalFinance,shareLink} = media.Icons[1]

export default function Navbar() {
    const [hide,setHide]=useState(false)
    const { pathname } = useLocation()
    const [dark, setDark] = useState(false)
    const [background, setbackground] = useState(false)

    useEffect(() => {
        if(/\/docs/.test(pathname)){
            setHide(true)
        }else{
            setHide(false)
        }
        if ((pathname !== '/') && (pathname !== "/contact-us")) {
            setDark(true)
        } else {
            setDark(false)
        }
        function handleScroll(e) {
            if (this.scrollY) {
                setbackground(true)
                setDark(true)
            } else {
                setbackground(false)
                if ((pathname === "/") || (pathname === "/contact-us")) {
                    setDark(false)
                }
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [pathname])

    return (
        <Wrapper childrenClassName={`flex justify-between h-8 md:h-10 ${!dark ? 'text-qosgray' : 'text-qosdark'} text-opacity-70 items-center justify-between`} className={`z-50 top-0 ${background && 'bg-qosgray'} ${hide&&'hidden'} bg-opacity-80 rounded-none py-4 fixed w-full`} >
            <Link to="/">
                <div class="h-full w-16">
                    <img src={dark ? media.Logos.qos.qosLogoBlack : media.Logos.qos.qosLogoWhite} class="h-full w-full" alt="QOS_LOGO" />
                </div>
            </Link>
            <nav id="navbarLink" className="w-6/12 lg:w-8/12 max-h-full">
                <ul className="hidden w-full text-mmd items-center justify-end text-opacity-80 md:flex">
                    <li className="relative group block mx-1.5 lg:mx-2.5 xl:mx-5 ">
                        <Link id="product" to="#">Products
                            <span className="fi fi-rr-angle-small-down align-bottom inline-block text-msm ml-1"></span>
                        </Link>
                        <nav id="products" className="bg-qosgray z-0 -ml-10 scale-y-0 origin-bottom -mt-24 group-hover:mt-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 transform ease-out  duration-200 rounded-md px-4 absolute p-2 pt-5 min-w-max text-qosdark">
                            <LinkGroup>
                                <p className="mb-2 text-mmd">Payments</p>
                                <LinkIcon icon={online} name="Online payment" description="Accept online bussiness payment" link="/online-payment" />
                                <LinkIcon icon={offline} name="Offline payment" description="Accept offline bussiness payment" link="/offline-payment" />
                                <LinkIcon icon={shareLink} name="sharable link" description="Share your product link to accept payment" link="/shareLink-payment" />
                                <p className="mb-2 text-mmd">Organization Services</p>
                                <LinkIcon icon={digitalFinance} name="Digital finance" description="Accept online bussiness payment" link="/digital-finance" />
                            </LinkGroup>
                        </nav>
                    </li>
                    <li className="relative group block mx-1.5 lg:mx-2.5 xl:mx-5 ">
                        <Link to="#">Company
                            <span className="fi fi-rr-angle-small-down align-bottom inline-block text-msm ml-1"></span>
                        </Link>
                        <nav className="bg-qosgray z-0 -ml-10 scale-y-0 origin-bottom -mt-12 group-hover:mt-0 opacity-0 group-hover:opacity-100 group-hover:scale-y-100 transform ease-out  duration-200 rounded-md px-4 absolute p-2 pt-5 min-w-max text-qosdark">
                            <LinkGroup>
                                <LinkIcon icon={offline} name="About Us" link="/company" />
                                <LinkIcon icon={offline} name="Contact Us" link="contact-us" />
                            </LinkGroup>
                        </nav>
                    </li>
                    <li className="block mx-1.5 lg:mx-2.5 xl:mx-5">
                        <Link id="developer" target="_blank" to="/docs">Developers</Link>
                    </li>
                    <li className="block mx-1.5 lg:mx-2.5 xl:mx-5">
                        <Link to="/pricing">Pricing</Link>
                    </li>
                </ul>
            </nav>
            <div className="hidden md:block">
                <Link to="/login" className="p-2 inline-block btn-sm max-w-max mx-auto m-2 font-medium" >
                    Connexion <span className="fi fi-rr-angle-small-right text-msm"></span>
                </Link>
                <Link to="/register" className="p-2 inline-block rounded-md px-3 bg-opacity-90 shadow-lg bg-qosorange text-qosgray font-medium btn-sm max-w-max mx-auto m-2" >
                    Create Account
                </Link>
            </div>
            <MobileNavbar />
        </Wrapper>
    )
}   