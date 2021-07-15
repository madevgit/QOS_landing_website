import { useEffect, useState } from 'react'
import moov from '../images/partners/moov.svg'
import mtn from '../images/partners/mtn.svg'
import { Link } from 'react-router-dom'
import check from '../images/icons/checkWhite.svg'
import Wrapper from '../components/sectionWrapper'
export default function PricingPage() {
    const [isAboutAPI, setIsAboutAPI] = useState(false)
    return (
        <main>
            <Wrapper className="mt-24" style={{ background: "url('./pictures/authpageBackground.png')", backgroundSize: "100% 1%" }}>
                <h2 class="text-qosdark text-opacity-80 mt-4">Simple, transparent pricing</h2>
                <h4 class="mt-4 text-qosdark text-opacity-80 font-normal md:mt-8">Simple choose your plan and apply</h4>
                <div className="mt-10 md:mt-12 md:grid grid-flow-col gap-x-10 md:w-10/12 mx-auto">
                    <div class="pricingCard max-w-xs px-4 py-4 w-11/12 mx-auto border border-opacity-75 border-qosgray">
                        <h3 class="text-center font-bold my-4">USSD</h3>
                        <h3 class="text-center font-bold text-qosorange">1,7%</h3>
                        <p className="w-11/12 mx-auto text-center">for every subsequent successful transaction</p>
                        <div class="flex justify-between items-center mt-4">
                            <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                            <p class="w-9/12 inline-block">payment to your mobile money account daily</p>
                        </div>
                        <div class="flex justify-between items-center mt-8">
                            <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                            <p class="w-9/12 inline-block">Installation charge depend to your need</p>
                        </div>
                        <Link to="/contact">
                            <button class="btn btn-active mt-8 mx-auto block">
                                Contact sales
                            </button>
                        </Link>
                    </div>
                    <div class="pricingCard max-w-xs px-4 mt-8 md:mt-0 py-4 w-11/12 mx-auto border border-opacity-75 border-qosgray">
                        <h3 class="text-center font-bold my-4">API</h3>
                        <h3 class="text-center font-bold text-qosorange">1,7%</h3>
                        <p className="w-11/12 mx-auto text-center">for every subsequent successful transaction</p>
                        <div class="flex justify-between items-center mt-4">
                            <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                            <p class="w-9/12 inline-block">payment to your mobile money account daily</p>
                        </div>
                        <div class="flex justify-between items-center mt-8">
                            <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                            <p class="w-9/12 inline-block">No hidden fee or charges</p>
                        </div>
                        <Link to="/register">
                            <button class="btn btn-active mt-8 mx-auto block">
                                Apply now
                            </button>
                        </Link>
                    </div>
                </div>
                <h3 className="mt-10" >Learn more about</h3>
                <div className="flex w-full mx-auto max-w-lg mt-8">
                    <button onClick={() => setIsAboutAPI(false)} className={`btn focus:outline-none transition-all duration-500 ease btn-sm shadow-none rounded-none rounded-t-lg font-bold text-qosblue ${isAboutAPI ? '' : 'bg-qosgray'} `}>USSD Service</button>
                    <button onClick={() => setIsAboutAPI(true)} className={`btn focus:outline-none transition-all duration-500 ease btn-sm shadow-none rounded-none rounded-t-lg font-bold text-qosblue ${!isAboutAPI ? '' : 'bg-qosgray'} `}>API service</button>
                </div>
                <section className="relative overflow-hidden mx-auto max-w-lg flex">
                    <div className={`min-w-full rounded-r-lg rounded-b-lg grid grid-flow-row gap-y-4 transform ${isAboutAPI ? 'translate-x-full scale-x-0' : 'translate-x-0 scale-x-100'} origin-left duration-500 ease bg-qosgray p-4 mb-4`}>
                        <div>
                            <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                            <p>Collect payments from any type of phones without internet</p>
                        </div>
                        <div>
                            <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                            <p>No development required for standard menu</p>
                        </div>
                        <div>
                            <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                            <p>Starting using your personalized merchant code same day</p>
                        </div>
                        <div>
                            <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                            <p>Retrieve all customers transaction data</p>
                        </div>
                        <div className="w-full">
                            <p className="inline-block">Support by</p>
                            <img src={moov} class="bg-qosblue rounded-3xl h-9 inline-block ml-4" alt="mootPartners" />
                            <img src={mtn} alt="mootPartners" className="inline-block ml-4 w-16" />
                            <Link to="contact"><button className="btn rounded btn-primary text-msm block mt-8 mx-auto">Contact Sales</button></Link>
                        </div>
                    </div>
                    <div className={`min-w-full rounded-r-lg rounded-b-lg bg-qosgray transform  ${isAboutAPI ? '-translate-x-full scale-x-100 rounded-lg' : 'translate-x-0 scale-x-0'} origin-left duration-500 ease  p-4 mb-4`}>
                        <div className="grid grid-flow-row gap-y-4">
                            <div>
                                <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                                <p>Collect payments from your apps and websites</p>
                            </div>
                            <div>
                                <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                                <p>Access to payment dashboard</p>
                            </div>
                            <div>
                                <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                                <p>Reverse transactions</p>
                            </div>
                            <div>
                                <span className="fi fi-rr-rocket text-mH2 text-qosblue"></span>
                                <p>Retrieve all customers transaction data</p>
                            </div>
                            <div className="w-full">
                                <p className="inline-block">Payment by</p>
                                <img src={moov} class="bg-qosblue rounded-3xl h-9 inline-block ml-4" alt="mootPartners" />
                                <img src={mtn} alt="mootPartners" className="inline-block ml-4 w-16" />
                                <Link to="contact"><button className="btn rounded btn-primary text-msm block mt-8 mx-auto">Contact Sales</button></Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Wrapper>
            
        </main>
    )
}