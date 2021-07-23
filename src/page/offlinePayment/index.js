import Wrapper from '../../components/sectionWrapper'
import { Link } from 'react-router-dom'
import { media } from '../../libs/media'
const {lowFees} =media.Icons[1]
export default function OfflinePaymentPage(){
    return(<Wrapper childrenClassName="mt-24 md:mt-32">
    <div className="md:flex">
      <div>
        <h1 className="">
          Accept mobile money througt wihout internet
        </h1>
        <p className="md:w-10/12 lg:w-9/12 mt-8 md:mt-10">
          Votre businness n’est pas sur internet et vous souhaitez récevoir des payments mobile money ? C’est possible ! You can use QoS standard payment menu or we can build complex menu depending on your customers experiences
        </p>
      </div>
      <div className="block rounded-3xl mt-4 opacity-70 h-56  xl:h-72 max-w-xs xl:max-w-sm overflow-hidden lg:-mr-10 md:h-60 lg:h-72 mx-auto blur-lg">
        <img src={media.Illustrations.offlinePaymentPage.firstIllustration} className="h-full w-full" alt="illustration" />
      </div>
    </div>
    <div className="mt-6 max-w-max mx-auto md:mx-0 md:mt-10">
      <Link to="/register" className="p-2 inline-block px-2.5 md:px-3 rounded-full bg-opacity-90 shadow-lg bg-qosorange text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto">
        Create Account
      </Link>
      <Link to="/devolopers/api" className="rounded-full ml-1.5 md:ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl">
        <p className="text-qosdark text-opacity-70 inline-block md:ml-1">
          Go to documention
        </p>
        <span className="fi fi-rr-angle-small-right text-msm"></span>
      </Link>
    </div>
    <h3 className="mb-4 mt-8 md:mt-12"> Why use our API?</h3>
    <div className="grid md:grid-flow-col gap-y-4 gap-x-6 my-4">
      <CardE title="Access to Dashboard" description="Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce." icon="fi-rr-dashboard" />
      <CardE title="Easy reconciliation" description="Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce." icon="fi-rr-spa" />
      <CardE title="Customizable USSD menu" description="Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce." icon="fi-rr-vector-alt" />
    </div>
    <h3 className="mt-8">Simple USSD flow for end users </h3>
    <div className="md:flex">
      <p className="mt-4 md:w-6/12">
        We design and build your USSD menu according to your need and your
        customers experience.They accomplish journey on few  simple steps.
        <Link to="/contact-us" className="p-2 mb-4 md:mb-0 block px-2.5 md:px-3 mt-4 rounded-full bg-opacity-90 shadow-lg bg-gradient-to-bl from-qosorange to-qosblue text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto">
          Contact Sales
        </Link>
      </p>
      <div className="max-w-sm lg:max-w-lg mx-auto">
        <img src={media.Illustrations.offlinePaymentPage.secondIllustration} className="w-full h-full" alt="hello" />
      </div>
    </div>
    <h3 className="text-center mt-8">They use it</h3>
    <div className="my-8 grid gap-x-4 grid-flow-col overflow-auto hideScroll">
      <TestiMon />
      <TestiMon />
      <TestiMon />
    </div>
  </Wrapper>)
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