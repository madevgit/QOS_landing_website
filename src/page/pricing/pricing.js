import { useEffect, useState } from 'react'
import { media } from '../../libs/media'
import { Link } from 'react-router-dom'
import Wrapper from '../../components/sectionWrapper'
const { moov, mtn } = media.Logos.other
const { check } = media.Icons[2]

export default function PricingPage() {
    const [isAboutAPI, setIsAboutAPI] = useState(false)
    return (
        <Wrapper className="mt-24" style={{ background: "url('./pictures/authpageBackground.png')", backgroundSize: "100% 0.4%" }}>
            <h2 class="text-qosdark text-opacity-80 mt-4">Simple, transparent pricing</h2>
            <h4 class="mt-4 text-qosdark text-opacity-80 font-normal md:mt-8">Simple choose your plan and apply</h4>
            <div className="mt-10 md:mt-12 md:grid grid-flow-col gap-x-5 lg:gap-x-10 md:w-10/12 mx-auto">
                <div class="pricingCard max-w-xs px-4 py-4 mx-auto border border-opacity-75 border-qosgray">
                    <h1 className="text-center md:text-dH2 my-4">USSD</h1>
                    <h1 class="text-center bg-gradient-to-bl lg:text-dH2 from-qosorange to-qosblue bg-clip-text text-transparent mx-auto">1,7%</h1>
                    <p className="w-11/12 mx-auto text-center">for every subsequent successful transaction</p>
                    <div class="flex justify-between items-center mt-4">
                        <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                        <p class="w-9/12 inline-block">payment to your mobile money account daily</p>
                    </div>
                    <div class="flex justify-between items-center mt-8">
                        <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                        <p class="w-9/12 inline-block">Installation charge depend to your need</p>
                    </div>
                    <Link to="/contact-us">
                        <button class="btn btn-active bg-qosorange rounded-md mt-8 mx-auto block">
                            Contact sales
                        </button>
                    </Link>
                </div>
                <div class="pricingCard max-w-xs px-4 mt-8 md:mt-0 py-4 mx-auto border border-opacity-75 border-qosgray">
                    <h1 className="text-center md:text-dH2 my-4">API</h1>
                    <h1 class="text-center bg-gradient-to-bl lg:text-dH2 from-qosorange to-qosblue bg-clip-text text-transparent mx-auto">1,7%</h1>
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
                        <button class="btn btn-active bg-qosorange rounded-md mt-8 mx-auto block">
                            Apply now
                        </button>
                    </Link>
                </div>
            </div>
            <h2 className="my-10" >Learn more about</h2>
            <div className="flex w-full md:hidden mx-auto max-w-lg mt-8">
                <button onClick={() => setIsAboutAPI(false)} className={`btn focus:outline-none transition-all duration-500 ease btn-sm shadow-none rounded-none rounded-t-lg font-bold text-qosblue ${isAboutAPI ? '' : 'bg-qosgray'} `}>USSD Service</button>
                <button onClick={() => setIsAboutAPI(true)} className={`btn focus:outline-none transition-all duration-500 ease btn-sm shadow-none rounded-none rounded-t-lg font-bold text-qosblue ${!isAboutAPI ? '' : 'bg-qosgray'} `}>API service</button>
            </div>
            <section className="relative overflow-hidden md:overflow-visible justify-between mx-auto max-w-lg md:max-w-screen-lg flex">
                <div className={`min-w-full md:w-5/12 md:min-w-min rounded-r-lg rounded-b-lg md:rounded-lg grid grid-flow-row gap-y-4 transform bg-opacity-70 ${isAboutAPI ? 'translate-x-full md:translate-x-0 md:scale-x-100 scale-x-0' : 'translate-x-0 scale-x-100'} origin-left duration-500 ease bg-qosgray p-4 mb-4`}>
                    <h3 className="text-center my-4 hidden md:block">USSD details</h3>
                    <DetailsItem description="Collect payments from any type of phones without internet" />
                    <DetailsItem description="No development required for standard menu" />
                    <DetailsItem description="Starting using your personalized merchant code same day" />
                    <DetailsItem description="Retrieve all customers transaction data" />
                    <DetailsItem description="Starting using your personalized merchant code same day" />
                    <div className="w-full">
                        <p className="inline-block">Support by</p>
                        <img src={moov} className="rounded-sm bg-qosdark h-9 inline-block ml-4" alt="mootPartners" />
                        <img src={mtn} alt="mootPartners" className="inline-block ml-4 w-16" />
                        <Link to="/contact-us">
                            <button class="btn btn-active bg-qosorange rounded-md mt-8 mx-auto block">
                                Contact sales
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={`min-w-full md:w-5/12 md:min-w-min rounded-r-lg rounded-b-lg md:rounded-lg bg-qosgray bg-opacity-70 transform  ${isAboutAPI ? '-translate-x-full md:translate-x-0 scale-x-100 rounded-lg' : 'translate-x-0 md:scale-x-100 scale-x-0'} origin-left duration-500 ease  p-4 mb-4`}>
                    <div className="grid grid-flow-row gap-y-4">
                        <h3 className="text-center my-4 hidden md:block">API details</h3>
                        <DetailsItem description="Collect payments from your apps and websites" />
                        <DetailsItem description="Access to payment dashboard" />
                        <DetailsItem description="Collect payments from your apps and websites" />
                        <DetailsItem description="Reverse transactions" />
                        <DetailsItem description="Retrieve all customers transaction data" />
                        <div className="w-full">
                            <p className="inline-block">Payment by</p>
                            <img src={moov} class="bg-qosdark rounded-sm h-9 inline-block ml-4" alt="mootPartners" />
                            <img src={mtn} alt="mootPartners" className="inline-block ml-4 w-16" />
                            <Link to="/contact-us">
                                <button class="btn btn-active bg-qosorange rounded-md mt-8 mx-auto block">
                                    Contact sales
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}

export function DetailsItem({ description }) {
    return (<div className="flex items-center">
        <span className="fi fi-rr-magic-wand text-dH3 text-transparent bg-gradient-to-bl from-qosorange to-qosblue bg-clip-text"></span>
        <p className="ml-4"> {description} </p>
    </div>)
}