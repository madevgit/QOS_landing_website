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
        document.querySelector('#menuToggler').addEventListener('click', function () {
            this.firstChild.classList.toggle('fi-rr-cross')
            this.firstChild.classList.toggle('fi-rr-menu-burger')
            let h = ['translate-x-1/2', '-translate-x-1/2', 'ml-10', 'ml-auto', 'opacity-100', 'scale-50']
            h.forEach(className => document.querySelector('#mobileNav').classList.toggle(className))
        })
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
                    <li className="relative group">
                        <Link id="product" to="#">Products</Link>
                        <div id="products" className="pricingCard hidden group-hover:block mt-2 rounded-md px-4 absolute p-2 min-w-max text-qosdark">
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
            </nav>
            <div className="flex items-center text-mmd">
                <Link className="text-qosgray hidden md:inline-block" to="/login">
                    Login
                </Link>
                <Link className="p-1 md:p-2 rounded-lg ml-4 bg-gradient-to-bl from-qosblue text-qosgray to-qosorange bg-opacity-70 hidden md:inline-block" to="/register">
                    Create Account <span class="fi text-dmd fi-rr-angle-small-right"></span>
                </Link>
            </div>
            <button id="menuToggler" className="text-mH2 md:hidden">
                <span className="fi transform-all duration-500 fi-rr-menu-burger text-qosgray"></span>
            </button>
            <div id="mobileNav" className="pricingCard left-1/2 top-16 transform ml-10 scale-50 translate-x-1/2 opacity-0 min-w-max md:hidden transition-all duration-500 fixed rounded-lg p-4">
                <div id="products">
                    <p className="text-mmdfont-bold mb-2 text-opacity-50 text-qosdark">Products</p>
                    <nav className="grid grid-flow-col gap-x-4 mb-2">
                        <ul>
                            <li className="mb-2 opacity-50 text-msm font-medium">Payments</li>
                            <li>
                                <Link className="flex items-center mb-2" to="/">
                                    <img className="inline-block h-5 w-5" src={transfer} alt="hello" />
                                    <div className="ml-2 mb-2" >
                                        <p className="text-msm opacity-70">Money transfer</p>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center mb-2" to="/">
                                    <img className="inline-block h-5 w-5" src={invoice} alt="hello" />
                                    <div className="m-2" >
                                        <p className="text-msm opacity-70">Invoice payment</p>

                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center mb-2" to="/">
                                    <img className="inline-block h-5 w-5" src={bill} alt="hello" />
                                    <div className="ml-2 mb-2" >
                                        <p className="text-msm opacity-70">Bill payment</p>

                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mb-2 text-msm font-medium opacity-50">Services</li>
                            <li>
                                <Link className="flex items-center mb-2" to="/">
                                    <img className="inline-block h-5 w-5" src={dbmigration} alt="hello" />
                                    <div className="ml-2 mb-2" >
                                        <p className="text-msm opacity-70">web development</p>

                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link className="flex items-center mb-2" to="/">
                                    <img className="inline-block h-5 w-5" src={webdev} alt="hello" />
                                    <div className="ml-2 mb-2l" >
                                        <p className="text-msm opacity-70">DB migration</p>

                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="grid grid-flow-col">
                        <ul>
                            <li className="mb-2 text-msm font-medium opacity-50">Organization Services</li>
                            <li>
                                <Link className="flex items-center" to="/">
                                    <img className="inline-block h-5 w-5" src={digital} alt="hello" />
                                    <div className="ml-2 mb-2" >
                                        <p className="text-msm opacity-70">Digital servcies</p>

                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="mb-2 text-msm font-medium opacity-50">Businness place</li>
                            <li>
                                <Link className="flex items-center" to="/">
                                    <img className="inline-block h-5 w-5" src={shop} alt="hello" />
                                    <div className="ml-2 mb-2" >
                                        <p className="text-msm opacity-70">Marketplace</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="Company" className="mt-8">

                    <nav className="grid grid-flow-col">
                        <ul>
                            <p className="text-mmdfont-bold mb-4 text-opacity-50 text-qosdark">Company</p>
                            <li>
                                <Link className="flex items-center" to="/">
                                    <img className="inline-block h-5 w-5" src={shop} alt="hello" />
                                    <div className="ml-2" >
                                        <p className="text-msm opacity-70">About Us</p>

                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <ul>
                            <p className="text-mmdfont-bold mb-4 text-opacity-50 text-qosdark">Developers</p>
                            <li>
                                <Link className="flex items-center" to="/">
                                    <img className="inline-block h-5 w-5" src={shop} alt="hello" />
                                    <div className="ml-2" >
                                        <p className="text-msm opacity-70">Documentation</p>

                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id="Company" className="mt-8">
                    <p className="text-mmdfont-bold mb-4 text-opacity-50 text-qosdark">Pricing </p>
                    <nav className="grid grid-flow-col">
                        <ul>
                            <li>
                                <Link className="flex items-center" to="/">
                                    <img className="inline-block h-5 w-5" src={shop} alt="hello" />
                                    <div className="ml-2" >
                                        <p className="text-msm opacity-70">Pricing</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-around w-11/12  mt-4">
                    <button className="btn inline-flex btn-sm btn-primary rounded-sm">Create account</button>
                    <button className="btn inline-flex p-1.5 px-8 border-opacity-40 border-qosdark btn-sm rounded-sm border ml-8">Login</button>
                </div>
            </div>
        </Wrapper>
    )
}