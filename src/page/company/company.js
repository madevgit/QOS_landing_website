import { Link } from 'react-router-dom'
import Wrapper from '../../components/sectionWrapper'
import { media } from '../../libs/media'
export default function EntreprisePage() {
    return (
        <Wrapper className="pt-24" style={{ background: "url('./pictures/authpageBackground.png') 1% 50% rgba(255,255,255,0.1)" }}>
            <h2 className="text-center md:w-10/12 mx-auto">We are a technology company focused on expanding digital payment footprints in Africa.</h2>
            <p class="mt-8 md:w-7/12 mx-auto md:text-center">
                Our mission is to enable business growth in Africa by building a payment infrastructure that allows individuals, start-ups and large organizations to easily make and accept payments.
            </p>
            <div className="md:flex justify-between">
                <div className="mt-8 md:w-5/12">
                    <h2>
                        Core Value
                    </h2>
                    <p className="mt-4 md:mt-6">
                        We are deeply customer driven company and are decisions are influenced by these core values that have shaped our company culture
                    </p>
                    <div className="my-8 bg-qosgray bg-opacity-80 grid grid-flow-row gap-y-1 max-w-max rounded-xl shadow-cardX p-4">
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-trophy inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium">Customer Success</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-users inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium">Collaboration</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-opacity inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium">Simplicity</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-following inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium">Empathy</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-diploma inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium">Commitment to High Standards</p>
                        </div>
                        <div className="flex items-center p-2">
                            <span className="fi fi-rr-e-learning inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <p className="mb-2 font-medium">Continuous Growth and Learning</p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:w-6/12">
                    <h2>
                        Ours Products
                    </h2>
                    <p className="  mt-4 md:mt-6">
                        We design and build products to assist entreprises, start-up and particular bussiness to grow
                    </p>
                    <div className="my-8 bg-qosdark bg-opacity-90 grid grid-flow-row gap-y-1 max-w-max mx-auto md:w-11/12 lg:w-9/12 rounded-lg shadow-cardX p-4">
                        <div className="flex items-center rounded-lg p-2">
                            <span className="fi fi-rr-globe inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">Online payment</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    Enable you accept your customers payments from internet
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg p-2">
                            <span className="fi fi-rr-cloud-disabled inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">Offline payment</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    Allow your oganize your bussiness without internet
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg p-2">
                            <span className="fi fi-rr-share inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">Sharable Link</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    create payment link for your product and share with your customers
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center rounded-lg p-2">
                            <span className="fi fi-rr-bank inline-block text-transparent bg-clip-text bg-gradient-to-bl from-qosblue to-qosorange text-mH2 mr-4"></span>
                            <div className="">
                                <p className="text-qosgray text-opacity-70">Digital finance</p>
                                <span className="text-msm text-qosgray text-opacity-70">
                                    Allow finance organsiation digitalize their bussiness
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="mt-8">Ours Customers</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-y-4 my-8 mx-auto">
                {media.Logos.customers.map((Partner, index) => <img key={`customer-${index}`} className="h-12 w-20 block mx-auto rounded md:h-14 lg:h-16 lg:w-24" src={Partner} alt="hello part" />)}
            </div>
            <h3 className="my-8 mt-20 text-center">Will you work with  us ?</h3>
            <Link to="/contact-us"><button className="btn btn-primary bg-opacity-70 rounded-full btn-md my-8 block mx-auto">Contact Us here <span class="fi fi-rr-arrow-small-right "></span></button></Link>

        </Wrapper>
    )
}