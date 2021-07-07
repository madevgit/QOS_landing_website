import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import whiteLogo from '../images/QOS_WHITE.png'
import darkLogo from '../images/QOS_BLACK.png'
import transfer from '../images/icons/transfer.svg'
import bill from '../images/icons/bills.svg'
import invoice from '../images/icons/invoices.svg'
import shop from '../images/icons/shop.svg'
import dbmigration from '../images/icons/maitenance.svg'
import webdev from '../images/icons/server.svg'
import digital from '../images/icons/bank.svg'
import Wrapper from '../components/sectionWrapper'

export default function Navbar() {
    useEffect(() => {
        document.querySelector('#navbarLink').addEventListener('mouseenter', function (e) {
            if (e.target.nodeName === "A") {
                let menuTargeted = document.querySelector(`#${e.target.id}s`)
                let menus = this.querySelectorAll('div')
                if (menuTargeted) {
                    menuTargeted.style = `
                    margin-left:${e.x / 2}px`
                    for (let i = 1; i < 4; i++) {
                        if (menus[i].id === menuTargeted.id) {
                            menus[i].classList.remove('hidden')
                        } else {
                            menus[i].classList.add('hidden')
                        }
                    }
                    this.addEventListener('mouseleave', function (e) {
                        menuTargeted.classList.add('hidden')
                    })
                }
            }
        }, true)
    })
    return (
        <Wrapper childrenClassName="flex h-8 md:h-10 items-center justify-between mt-2 md:mt-4" className="z-50 top-0 fixed w-full">
            <Link to="/">
                <div class="h-full w-16">
                    <img src={whiteLogo} class="h-full w-full" alt="QOS_LOGO" />
                </div>
            </Link>
            <nav id="navbarLink" className="w-6/12 max-h-full pt-3">
                <ul className="hidden w-full text-mmd items-center justify-around text-qosgray text-opacity-80 md:flex">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link id="product" to="#">Products</Link>
                    </li>
                    <li>
                        <Link id="company" to="/company">Company</Link>
                    </li>
                    <li>
                        <Link id="developer" to="/developers">Developers</Link>
                    </li>
                    <li>
                        <Link to="/pricing">Pricing</Link>
                    </li>
                </ul>
                <div className="relative mt-2">
                    <div id="products" className="top-0 hidden bg-qosgray shadow-card rounded-lg p-2 min-w-max">
                        <nav className="grid grid-flow-col gap-x-6">
                            <ul>
                                <li className="mb-2 opacity-50 text-mmd">Payments</li>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={transfer} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Money transfer</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={invoice} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Invoice payment</p>
                                            <p className="text-msm opacity-40">pay at time your invoices</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={bill} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Bill payment</p>
                                            <p className="text-msm opacity-40">manage your bills easly</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li className="mb-2 text-mmd opacity-50">Services</li>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={dbmigration} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">web development</p>
                                            <p className="text-msm opacity-40">Design and build professional website</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={webdev} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">DB migration</p>
                                            <p className="text-msm opacity-40">database design & maintenance</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <nav className="grid grid-flow-col">
                            <ul>
                                <li className="mb-2 text-mmd opacity-50">Organization Services</li>
                                <li>
                                    <Link className="flex items-center" to="/">
                                        <img className="inline-block h-8 w-8" src={digital} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Digital servcies</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li className="mb-2 text-mmd opacity-50">Businness place</li>
                                <li>
                                    <Link className="flex items-center" to="/">
                                        <img className="inline-block h-8 w-8" src={shop} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Marketplace</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div id="companys" className="top-0 hidden absolute bg-qosgray shadow-card rounded-lg p-2 min-w-max">
                        <nav className="grid grid-flow-col gap-x-8">
                            <ul>
                                <li>
                                    <Link className="flex items-center" to="/">
                                        <img className="inline-block h-8 w-8" src={digital} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">About Us</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link className="flex items-center" to="/">
                                        <img className="inline-block h-8 w-8" src={shop} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Partners & Customers</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div id="developers" className="top-0 hidden absolute bg-qosgray shadow-card rounded-lg p-2 min-w-max">
                        <nav className="grid grid-flow-col">
                            <ul>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={digital} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Overview</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={digital} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">API & integration</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex items-center mb-2" to="/">
                                        <img className="inline-block h-8 w-8" src={digital} alt="hello" />
                                        <div className="ml-2" >
                                            <p className="text-dsm opacity-70">Support</p>
                                            <p className="text-msm opacity-40">plateform to send money</p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </nav>
            <div className="flex items-center text-mmd">
                <Link className="text-qosgray hidden md:inline-block" to="/login">
                    Login
                </Link>
                <Link className="p-1 md:p-2 rounded-lg ml-4 bg-gradient-to-bl from-qosblue text-qosgray to-qosorange bg-opacity-70 hidden md:inline-block" to="/register">
                    Create Account <span class="fi text-dmd fi-rr-angle-small-right"></span>
                </Link>
            </div>
            <button className="text-mH2 md:hidden">
                <span className="fi fi-rr-menu-burger text-qosgray"></span>
            </button>
        </Wrapper>
    )
}