
import { media } from '../../libs/media'
import Wrapper from '../../components/sectionWrapper'
const {security,thirdElemen,docsLearn,architecture} = media.Icons[1]
const {check }= media.Icons[2]

export default function DigitalFinancePage() {
    return (
        <Wrapper className="mt-24">
            <h2 className="md:w-8/12 text-center mx-auto md:my-12">
                We enable MFIs extend their digitial finance footprint
            </h2>
            <p class="mt-8 md:w-10/12 mx-auto">We provide a simple, flexible, secure solution that is scalable to meet the MFI future needs. The Micro Finance solution fine-tunes and adjusts existing processes and workflows as required. It is built to adapt to the changing business needs and can incorporate new products and business models easily.</p>
            <p class="mt-4 md:w-10/12 mx-auto">Customers can have access to micro finance through Unstructured Supplementary Service Data (USSD), web interface and mobile app. This is designed to cover customers in difficult to reach areas that do might not have access to the internet and smart phones..</p>

            <div className="keysWrapper bg-qosgray bg-opacity-70 rounded-lg shadow-sm px-4 pb-8 md:grid grid-flow-col gap-x-10 mt-8 md:mt-10">
                <div id="Features">
                    <h3 className="my-4">Key Feature</h3>
                    <div class="grid grid-flow-row gap-y-6">
                        <div class="flex justify-between items-center">
                            <img src={architecture} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                High quality architecture to enable fast and efficient work-flow as per the business goals and objectives
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={security} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                Highly secured platform enabling MFIs to provide savings, loans and other value added services to their customers on their handsets.
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={docsLearn} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                Easy to read reporting for audit and reconciliation
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={thirdElemen} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                Capable to support integration of third party content, equipped with APIs and development tools for deploying multiple value added
                            </p>
                        </div>
                    </div>
                </div>
                <div class="Benefits">
                    <h3 className="my-4" >Key benefits</h3>
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
                <h2 class="text-center my-4 md:my-8">
                    Ready to join us today ?
                </h2>
                <button class="btn btn-primary rounded-full shadow-lg px-4 bg-opacity-80 mx-auto block"> Contact Us </button>
            </div>
        </Wrapper>
    )
}