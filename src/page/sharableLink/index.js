import { Link } from "react-router-dom"
import Wrapper from "../../components/sectionWrapper"
import { media } from "../../libs/media"

const { lowFees, security, easyHandling } = media.Icons[1]

export default function ShareLinkPage() {
    return (<Wrapper childrenClassName="mt-24">
        <div className="md:flex">
            <div>
                <h1 className="">
                    Use payment links to sell online without a website
                </h1>
                <p className="md:w-10/12 lg:w-9/12 mt-8 md:mt-10">
                    Yor bussiness is not online ? Or you haven't a website ?
                    This solution is for you. Just create a payment link and share with any customer to accept mobile money.
                </p>
            </div>
            <img src={media.Illustrations.onlinePaymentPage.firstIllustration} className="block rounded-3xl mt-4 opacity-70 h-44 lg:h-72 mx-auto blur-lg" alt="illustration" />
        </div>
        <div className="mt-6 max-w-max mx-auto md:mx-0 md:mt-10">
            <Link to="/register" className="p-2 inline-block px-2.5 md:px-3 rounded-md bg-opacity-90 shadow-lg bg-qosorange text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto">
                Create Account
            </Link>
            <Link to="/contact-us" className="rounded-full ml-1.5 md:ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl">
                <p className="text-qosdark text-opacity-70 inline-block md:ml-1">
                    contact sales
                </p>
                <span className="fi fi-rr-angle-small-right text-msm"></span>
            </Link>
        </div>
        <h2 className="mt-8">Complete it in few steps</h2>
        <div className="grid md:grid-flow-col items-center gap-y-4 gap-x-6 my-4">
            <div className="rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
                <div className="my-4 md:flex items-center">
                    <span className="fi fi-rr-user md:mr-4 block bg-gradient-to-bl from-qosblue to-qosorange bg-clip-text text-transparent text-mH3 md:text-dH3">  </span>
                    <h4 className="md:text-center"> Create QOS account  </h4>
                </div>
                <p className="mt-2">
                    Your QOS account enable you access to QOS dashaboard where you can easily create your payment links and manage your transactions.
                </p>
            </div>
            <div className="rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
                <div className="my-4 md:flex items-center">
                    <span className="fi fi-rr-shopping-cart md:mr-4 block bg-gradient-to-bl from-qosblue to-qosorange bg-clip-text text-transparent text-mH3 md:text-dH3"></span>
                    <h4 className="md:text-center"> Create payment link  </h4>
                </div>
                <p className="mt-2">
                    then you have access to dashboard, create payment link become more easy by accessing to <i>"payment Link"</i> feature. 
                <Link className="text-qosblue underline text-opacity-70" to="/devolopers/shareLink"> Go to documention</Link>
                </p>
            </div>
            <div className="rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
            <div className="my-4 md:flex items-center">
                    <span className="fi fi-rr-share md:mr-4 block bg-gradient-to-bl from-qosblue to-qosorange bg-clip-text text-transparent text-mH3 md:text-dH3"></span>
                    <h4 className="md:text-center"> Share payment link</h4>
                </div>
                <p className="mt-2">
                    Now you can share the payment to any customers on any platform to accept mobile money the secure and simple way.
                </p>
            </div>
        </div>
        <h2 className="mt-8">They share they experience</h2>
        <div className="my-8 grid gap-x-4 grid-flow-col overflow-auto hideScroll">
            <TestiMon />
            <TestiMon />
            <TestiMon />
        </div>
    </Wrapper>)
}
export function TestiMon() {
    return (<div className="p-2 px-4 w-60 md:w-72  transform border-2 mx-auto border-qosgray border-opacity-5 border-dotted bg-qosblue bg-opacity-80 rounded-xl shadow-lg">
        <img className="h-16 w-16 rounded-full block mx-auto" src={lowFees} alt="fees" />
        <div>
            <span className="font-bold text-center block mt-4 text-qosgray text-opacity-80">Dylan AKHATH</span>
            <p className="text-center text-opacity-70 text-qosgray text-msm lg:text-dsm">
                CEO chef executif
            </p>
        </div>
        <p className="mt-4 mx-auto text-qosgray text-opacity-70">
            Qui vero iste illum neque corrupti porro.Qui vero iste illum neque corrupti porro.Qui vero iste illum neque corrupti porro.
        </p>
    </div>
    )
}