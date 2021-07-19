import { Link } from 'react-router-dom'
import Address from './address'
import Wrapper from './sectionWrapper'
import { media } from '../libs/media'

export default function Footer() {
    return (
        <footer className="text-msm md:text-dsm">
            <Wrapper childrenClassName="grid md:gap-x-8 lg:gap-x-12 grid-flow-rows md:grid-flow-col gap-y-6" className="bg-qosdark bg-opacity-90 py-6 text-qosgray text-opacity-80 mx-auto">
                <div className="h-8 w-16 md:w-32 md:h-16 lg:w-40 lg:h-20 md:self-center">
                    <img src={media.Logos.qos.qosLogoWhite} alt="QOS_logo" className="h-full w-full" />
                </div>
                <div className="grid grid-flow-row gap-y-6">
                    <nav className="grid grid-flow-col md:gap-x-8">
                        <ul>
                            <li className="font-mlg mb-2">Links</li>
                            <li className="text-opacity-60 text-qosgray mb-1">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="text-opacity-60 text-qosgray mb-1">
                                <Link to="/pricing">Pricing</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="font-mlg mb-2">Developers</li>
                            <li className="text-opacity-60 text-qosgray mb-1">
                                <Link to="/developers">Documentation</Link>
                            </li>
                            <li className="text-opacity-60 text-qosgray mb-1">
                                <Link to="/">API Ressouces</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="font-mlg mb-2">Company</li>
                            <li className="text-opacity-60 text-qosgray mb-1">
                                <Link to="/company">About Us</Link>
                            </li>
                            <li className="text-opacity-60 text-qosgray mb-1">
                                <Link to="/contact-us">Contact_Us</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <span className="font-mlg mb-2">Ressources</span>
                        <ul className="grid grid-flow-col">
                            <li className="text-opacity-60 text-qosgray">
                                <Link to="/contact">Custom Services</Link>
                            </li>
                            <li className="text-opacity-60 text-qosgray">
                                <Link to="/">Terms of services</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <Address className="max-w-xs w-64 mx-auto" textColor={`text-qosgray text-opacity-70`} />
                </nav>
            </Wrapper>
            <Wrapper className="bg-qosdark h-16 text-qosgray text-opacity-70 text-msm md:text-dsm text-center py-4">
                <span>© Copyright 2021  |  Theme by QoS Integrated Center   |   All Rights Reserved</span>
            </Wrapper>
        </footer>
    )
}