import Wrapper from "../../components/sectionWrapper"
import Pretitle from "../../components/pretitle"
import { media } from "../../libs/media"
import { Code } from "../../libs/codeSamples"
import CodeBoard from "../../components/codeBoard"
import { useEffect } from "react"

const { integration, crossOverTech } = media.Icons[0]

export default function DevsSection() {
    useEffect(() => {
        console.log(Code)
    })

    return (<Wrapper id="webDev" className="bg-qosdark bg-opacity-90 py-20">
        <Pretitle titleStyle={`text-qosblue text-opacity-80`} iconStyle={`text-qosgray text-opacity-70`} dataName="Easy and flexible for developers" />
        <h2 className="w-11/12 md:w-6/12 lg:w-8/12 text-qosgray mt-2 lg:pr-14 text-opacity-80" >APIs build to simplify developers work</h2>
        <section className="md:flex justify-between">
            <div className="md:w-6/12">
                <p className="mt-4 md:w-12/12 text-qosgray text-opacity-70">
                    We make it easy for developers to integrate with our API. We remove unnecessary complexity and irrelevant details so you can get up and running with QoS in just minutes!
                </p>
                <div className="mt-8 lg:flex items-center">
                    <img className="h-12 w-20 mb-2 inline-block" src={crossOverTech} alt="cross over technologies" />
                    <h4 className="text-qosgray text-opacity-80">Cross over technologies </h4>
                </div>
                <p className="mt-2 lg:w-12/12 text-qosgray text-opacity-70">
                    Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                </p>
            </div>
            <div className="md:w-5/12">
                <div className="mt-8 md:mt-0 md:flex items-center">
                    <img className="h-12 w-20 mb-2 inline-block" src={integration} alt="cross over technologies" />
                    <h4 className="text-qosgray text-opacity-80">Easy to integrate</h4>
                </div>
                <div className="mt-4 transform -rotate-2">
                   <CodeBoard modes={Code.LibsOverview()} />
                </div>
            </div>
        </section>
    </Wrapper>)
}