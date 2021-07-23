import Wrapper from '../../components/sectionWrapper'
import { media } from '../../libs/media'
import { Link } from 'react-router-dom'

const { lowFees, security, easyHandling } = media.Icons[1]

export default function OnlinePaymentPage() {
    return (<Wrapper childrenClassName="mt-24 md:mt-32">
        <div className="md:flex">
            <div>
                <h1 className="">
                    Start accepting mobile money with QOS secure API same day
                </h1>
                <p className="md:w-10/12 lg:w-9/12 mt-8 md:mt-10">
                    Accepter et gérer les payments mobile money en ligne sur vos sites web ou application à travers notre API garnis d'un tableau de bord vous permettant de collecter et gérer aisement les informations sur vos transactions.
                </p>
            </div>
            <img src={media.Illustrations.onlinePaymentPage.firstIllustration} className="block rounded-3xl mt-4 opacity-70 h-44 lg:h-72 mx-auto blur-lg" alt="illustration" />
        </div>
        <div className="mt-6 max-w-max mx-auto md:mx-0 md:mt-10">
            <Link to="/register" className="p-2 inline-block px-2.5 md:px-3 rounded-md bg-opacity-90 shadow-lg bg-qosorange to-qosblue text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto">
                Create Account
            </Link>
            <Link to="/devolopers/api" className="rounded-full ml-1.5 md:ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl">
                <p className="text-qosdark text-opacity-70 inline-block md:ml-1">
                    Go to documentation
                </p>
                <span className="fi fi-rr-angle-small-right text-msm"></span>
            </Link>
        </div>
        <h2 className="mb-4 mt-8 md:mt-12"> Why use our API?</h2>
        <div className="grid md:grid-flow-col gap-y-4 gap-x-6 my-4">
            <div className="border-l-2 border-t-2 rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
                <div className="my-4">
                    <img className="h-8 w-8 mb-4 block md:mx-auto" src={security} alt="cross over technologies" />
                    <h4 className="md:text-center"> Total Security </h4>
                </div>
                <p className="mt-2">
                    QOS api is designed on the "security first" principle.
                    It protects you from all forms of scams. Your transactions and personal data as well as those of your customers are protected
                </p>
            </div>
            <div className="border-l-2 border-t-2 rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
                <div className="my-4">
                    <img className="h-8 w-8 mb-4 block md:mx-auto" src={easyHandling} alt="cross over technologies" />
                    <h4 className="md:text-center"> Easy to handle </h4>
                </div>
                <p className="mt-2">
                Supporting QOS products is a very simple exercise for both end users and developers. Well-detailed documentation and an array of integration tools.
                </p>
            </div>
            <div className="border-l-2 border-t-2 rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
                <div className="my-4">
                    <img className="h-8 w-8 mb-4 block md:mx-auto" src={lowFees} alt="cross over technologies" />
                    <h4 className="md:text-center"> Low fees </h4>
                </div>
                <p className="mt-2">
                QOS wants to be a loyal ally and supporter of companies and start-ups. QOS does not apply any fees apart from 1.7% tax on each successful transaction.
                </p>
            </div>
        </div>
        <h2 className="text-center mt-8">They talk about</h2>
        <div className="my-8 grid gap-x-4 grid-flow-col overflow-auto hideScroll">
            <TestiMon />
            <TestiMon />
            <TestiMon />
        </div>
    </Wrapper>
    )
}
export function TestiMon() {
    return (<div className="p-2 px-4 w-60 md:w-72  transform border-2 mx-auto border-qosdark border-opacity-5 border-dotted bg-qosgray bg-opacity-70 rounded-xl shadow-lg">
        <img className="h-16 w-16 rounded-full block mx-auto" src={lowFees} alt="fees" />
        <div>
            <span className="font-bold text-center block mt-4 text-qosdark text-opacity-80">Dylan AKHATH</span>
            <p className="text-center text-msm lg:text-dsm">
                CEO chef executif
            </p>
        </div>
        <p className="mt-4 mx-auto">
            Qui vero iste illum neque corrupti porro.Qui vero iste illum neque corrupti porro.Qui vero iste illum neque corrupti porro.
        </p>
    </div>
    )
}

export function CardE({ title, icon, description }) {
    return (
        <div className="border blur-lg py-2 rounded-3xl pl-2 border-dashed border-qosdark border-opacity-10">
            <div className="my-4">
                <span className={`fi ${icon} block bg-gradient-to-bl from-qosblue to-qosred opacity-80 md:mx-auto max-w-min bg-clip-text text-transparent text-mH1`} ></span>
                <h4 className="md:text-center">{title}</h4>
            </div>
            <p className="mt-2">
                {description}
            </p>
        </div>)
}