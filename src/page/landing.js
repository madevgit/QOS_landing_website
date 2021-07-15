import { Link } from 'react-router-dom'
import P from '../components/paragraph'
import Pretitle from '../components/pretitle'
import Wrapper from '../components/sectionWrapper'
import sunu from '../images/media/sunu.png'
import siroco from '../images/media/siroco.png'
import ad from '../images/media/Pieuve.png'
import padme from '../images/media/padme.png'
import africaine from '../images/media/africainevie.png'
import cross from '../images/icons/cross.svg'
import integrated from '../images/icons/integrated.svg'
import codeWindow from '../images/CodeWindow.png'
import lowfees from '../images/icons/lowfees.svg'
import security from '../images/icons/security.svg'
import Atel from  '../images/illusstration.svg'
import hello from '../images/hello.png'
import mockup from '../images/mockup1.jpg'

const PartnersLogo = [sunu,siroco,ad,padme,africaine]

export default function LandingPage() {
    return (
        <main className="relative">
            <Wrapper childrenClassName="md:flex pt-5 flex-row-reverse relative" id="Landing" className="pb-10 md:pb-20 z-10 overflow-hidden relative">
               <img src={Atel} alt="" className="md:w-7/12 md:h-full mt-16 md:-right-36 md:absolute" />
               <div>
               <h1 className="text-qosgray md:pt-36 lg:w-9/12">
                    Enabling mobile payments and bussiness growth in Africa.
                </h1>
                <P className="text-qosgray text-mlg lg:text-dlg w-11/12 lg:w-5/12 mt-8 md:mt-10">
                    Many entrepries and start-up use our API to build everything from simple payment for few customers, to complex financial products serving several thousands of customes.
                </P>
                <div className="mt-6 md:mt-10">
                    <Link to="/register" className="inline mb-5">
                        <button className="p-2 rounded-md text-dmd font-normal bg-gradient-to-tr from-qosblue to-qosorange text-qosgray inline-block">Create Account </button>
                    </Link>
                    <Link to="/contact" className="inline mb-5">
                        <button className="btn rounded-full inline-block  bg-gradient-to-tr from-qosblue to-qosorange text-qosgray p-1.5 ml-4">
                            <div className="rounded-full flex items-center justify-center border border-qosgray h-6 w-6">
                                <i className="fi fi-rr-arrow-small-right text-msm align-bottom inline-block mt-1"></i>
                            </div>
                        </button>
                        <P className="underline text-qosgray inline-block md:ml-1">
                            Contact Sales
                        </P>
                    </Link>
                </div>
               </div>
            </Wrapper>
            <Wrapper className="py-5 md:py-10 overflow-hidden bg-qosgray bg-opacity-75">
                <div className="flex w-full mx-auto justify-center md:w-7/12">
                    {[...PartnersLogo, ...PartnersLogo].map((Partner, Index) => <img className="mb-10 w-2/12 px-2 py-1 lg:mx-4 lg:w-20 h-8 lg:h-12" src={Partner} alt="hello part" />)}
                </div>
            </Wrapper>
            <Wrapper childrenClassName="md:flex relative py-10">
                <div>
                <Pretitle dataName="Web Bussiness" />
                <h3 className="w-11/12 md:w-7/12" >Build mobile money payments with our well designed APIs</h3>
                <div className="md:grid grid-flow-col gap-x-6 md:w-7/12 mt-8">
                    <P className="text-qosdark mt-4">
                        Vous désirez récevoir les paiements et effectuer des virements depuis votre site web ou application ? L’API  QoS est un idéal outils fait pour céla.</P>
                    <P className="text-qosdark mt-4">
                        L’API QoS vous permet à travers son tableau de bord simple et intuitif de gérer vos transactions, d’effétuer des opérations inversées et même de collecter les informations de transactions de vos clients.</P>
                </div>
                </div>
                <img src={hello} alt="hello" className="md:w-4/12 md:absolute right-0 max-h-full" />
            </Wrapper>
            <Wrapper childrenClassName="md:flex relative py-10" className="bg-qosgray">
                <div>
                <Pretitle dataName="Get Payment without internet" />
                <h3 className="w-11/12 md:w-7/12" >Develop your customer journey and payments using USSD short code</h3>
                <P className="text-qosdark text-mdm mt-8 md:w-6/12   ">
                    Votre businness n’est pas sur internet et vous souhaitez récevoir des payments mobile money ? C’est possible ! You can use QoS standard payment menu or we can build complex menu depending on your customers experiences
                </P>
                </div>
                <img src={mockup} alt="hello" className="md:w-4/12 md:absolute right-0 max-h-full" />
            </Wrapper>
            <Wrapper className="py-5 md:py-10">
                <Pretitle dataName="Easy and flexible for developers" />
                <h3 className="w-11/12 lg:w-7/12" >APIs build to simplify developers work</h3>
                <section className="md:grid grid-flow-col">
                    <div>
                        <P className="mt-4 lg:w-6/12">
                            We make it easy for developers to integrate with our API. We remove unnecessary complexity and irrelevant details so you can get up and running with QoS in just minutes!
                        </P>
                        <div className="mt-8 lg:flex items-center">
                            <img className="h-12 w-20 mb-2 inline-block" src={cross} alt="cross over technologies" />
                            <h4 className="">Cross over technologies </h4>
                        </div>
                        <P className="mt-2 lg:w-6/12">
                            Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                        </P>
                    </div>
                    <div className="">
                        <div className="mt-8 lg:flex items-center">
                            <img className="h-12 w-20 mb-2 inline-block" src={integrated} alt="cross over technologies" />
                            <h4 className="">Easy to integrate</h4>
                        </div>
                        <div className="mt-4">
                            <img src={codeWindow} alt="codeWindow" className="h-full w-full" />
                        </div>
                    </div>
                </section>
            </Wrapper>
            <Wrapper className="py-5 bg-qosgray md:py-10">
                <div className="md:grid grid-flow-col gap-x-6">
                    <div>
                        <div className="my-4">
                            <img className="h-12 w-20 mb-4 block md:mx-auto" src={security} alt="cross over technologies" />
                            <h4 className="text-qosdark md:text-center"> Total Security </h4>
                        </div>
                        <P className="text-qosdark mt-2 font-medium">
                            Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                        </P>
                    </div>
                    <div>
                        <div className="my-4">
                            <img className="h-12 w-20 mb-4 block md:mx-auto" src={security} alt="cross over technologies" />
                            <h4 className="text-qosdark md:text-center"> Easy to handle </h4>
                        </div>
                        <P className="text-qosdark mt-2 font-medium">
                            Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                        </P>
                    </div>
                    <div>
                        <div className="my-4">
                            <img className="h-12 w-20 mb-4 block md:mx-auto" src={lowfees} alt="cross over technologies" />
                            <h4 className="text-qosdark md:text-center"> Low fees </h4>
                        </div>
                        <P className="text-qosdark mt-2 font-medium">
                            Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                        </P>
                    </div>
                </div>
            </Wrapper>
            <Wrapper className="py-5 md:py-10">
                <h2 className="text-center">Join Us today !</h2>
                <div className="md:grid grid-flow-col gap-x-10 mt-4">
                    <div>
                        <h3 className="text-mH3 font-bold text-qosdark mt-8 text-opacity-90"> More than 1000+ </h3>
                        <P className="text-qosdark mt-2 font-medium">
                            Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                        </P>
                    </div>
                    <div>
                        <h3 className="text-mH3 font-bold text-qosdark mt-8 text-opacity-90"> More than 8500+ </h3>
                        <P className="text-qosdark mt-2 font-medium">
                            Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                        </P>
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}