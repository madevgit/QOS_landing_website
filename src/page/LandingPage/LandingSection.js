import { Link } from 'react-router-dom'
import Wrapper from '../../components/sectionWrapper'
import { media } from '../../libs/media'

export default function LandingSection() {
    return (<Wrapper childrenClassName="md:flex pt-5 flex-row-reverse relative" id="Landing" className="pb-10 md:pb-20 z-10 overflow-hidden relative bg-qosblue bg-opacity-60">
        <img src={media.Illustrations.LandingPage.firstIllustration} alt="" className="md:w-6/12 g:w-7/12 h-80 -mt-5 md:mt-16 block mx-auto md:h-full md:-right-8 lg:-right-10 md:absolute" />
        <div>
            <h1 className="text-qosgray text-opacity-80 md:pt-36 md:w-8/12 lg:w-10/12 xl:w-9/12">
                Enabling mobile payments and bussiness growth in Africa.
            </h1>
            <p className="text-qosgray text-opacity-70 w-11/12 md:w-6/12 lg:w-5/12 mt-8 md:mt-10">
                Many entrepries and start-up use our API to build everything from simple payment for few customers, to complex financial products serving several thousands of customes.
            </p>
            <div className="mt-6 md:mt-10">
                <Link to="/register" className="p-2 inline-block rounded-md px-3 shadow-lg bg-qosorange text-qosgray font-medium btn-sm max-w-max mx-auto m-2">
                    Create Account
                </Link>
                <Link to="/contact-us" className="rounded-full ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl text-qosgray text-opacity-70">
                    <p className="text-qosgray text-opacity-70 inline-block md:ml-1">
                        Contact Sales
                    </p>
                    <span className="fi fi-rr-angle-small-right text-msm"></span>
                </Link>
            </div>
        </div>
    </Wrapper>)
}