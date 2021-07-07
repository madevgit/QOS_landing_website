import secure from '../images/icons/secure.svg'
import third from '../images/icons/third.svg'
import receipt from '../images/icons/receipt.svg'
import arch from '../images/icons/architecture.svg'
import check from '../images/icons/check.svg'
import Wrapper from '../components/sectionWrapper'

export default function FinancePage() {
    return (
            <Wrapper className="mt-24">
            <h2 className="md:w-8/12 font-medium text-center mx-auto md:my-12">
                We enable MFIs extend their digitial finance footprint
            </h2>
            <p class="mt-8 md:w-10/12 mx-auto text-justify">We provide a simple, flexible, secure solution that is scalable to meet the MFI future needs. The Micro Finance solution fine-tunes and adjusts existing processes and workflows as required. It is built to adapt to the changing business needs and can incorporate new products and business models easily.</p>
            <p class="mt-4 md:w-10/12 mx-auto text-justify">Customers can have access to micro finance through Unstructured Supplementary Service Data (USSD), web interface and mobile app. This is designed to cover customers in difficult to reach areas that do might not have access to the internet and smart phones..</p>

            <div className="keysWrapper md:grid grid-flow-col gap-x-10 mt-8 md:mt-10">
                <div id="Features">
                    <h3 className="my-8 font-medium">Key Feature</h3>
                    <div class="grid grid-flow-row gap-y-6">
                    <div class="flex justify-between items-center">
                        <img src={arch} alt="" class="h-10 w-10 p-1" />
                        <p class="w-10/12">
                            High quality architecture to enable fast and efficient work-flow as per the business goals and objectives
                        </p>    
                    </div>
                    <div class="flex justify-between items-center">
                        <img src={secure} alt="" class="h-10 w-10 p-1" />
                        <p class="w-10/12">
                            Highly secured platform enabling MFIs to provide savings, loans and other value added services to their customers on their handsets.
                        </p>
                    </div>
                    <div class="flex justify-between items-center">
                        <img src={receipt} alt="" class="h-10 w-10 p-1" />
                        <p class="w-10/12">
                            Easy to read reporting for audit and reconciliation
                        </p>
                    </div>
                    <div class="flex justify-between items-center">
                        <img src={third} alt="" class="h-10 w-10 p-1" />
                        <p class="w-10/12">
                            Capable to support integration of third party content, equipped with APIs and development tools for deploying multiple value added
                        </p>
                    </div>
                    </div>
                </div>
               <div class="Benefits">
               <h3 className="my-8 font-medium" >Key benefits</h3>
                <div class="grid grid-flow-row gap-y-6">
                <div class="flex justify-between items-center">
                    <img src={check} alt="" class="h-10 w-10 p-2" />
                    <p class="w-10/12">
                        Enabling MFIs to reduce costs of operations, add flexibility and improve data accuracy
                    </p>
                </div>
                <div class="flex justify-between items-center">
                    <img src={check} alt="" class="h-10 w-10 p-2" />
                    <p class="w-10/12">
                        Ease of service distribution, customer acquisition and extended reach through secure & hassle-free channel
                    </p>
                </div>
                <div class="flex justify-between items-center">
                    <img src={check} alt="" class="h-10 w-10 p-2" />
                    <p class="w-10/12">
                        Flexibility through customized work flow and processes
                    </p>
                </div>
                <div class="flex justify-between items-center">
                    <img src={check} alt="" class="h-10 w-10 p-2" />
                    <p class="w-10/12">
                        Access to financial services through Customer web portal, mobile app and USSD
                    </p>
                </div>
                </div>
               </div>
            </div>
            <div class="my-5">
            <h2 class="text-center my-4 md:my-8 font-medium">
                Ready to join us today ?
            </h2>
            <button class="btn btn-primary mx-auto block"> Contact Us </button>
            </div>
            </Wrapper>
    )
}