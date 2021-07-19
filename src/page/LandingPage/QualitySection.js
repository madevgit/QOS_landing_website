import Wrapper from "../../components/sectionWrapper"
import { media } from "../../libs/media"
const {security,lowFees,easyHandling} = media.Icons[1]
export default function QualitySection() {
    return (<Wrapper className="py-8 bg-qosgray">
        <div className="md:grid grid-flow-col gap-x-6">
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={security} alt="cross over technologies" />
                    <h4 className="md:text-center"> Total Security </h4>
                </div>
                <p className="mt-2">
                    Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                </p>
            </div>
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={easyHandling} alt="cross over technologies" />
                    <h4 className="md:text-center"> Easy to handle </h4>
                </div>
                <p className="mt-2">
                    Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                </p>
            </div>
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={lowFees} alt="cross over technologies" />
                    <h4 className="md:text-center"> Low fees </h4>
                </div>
                <p className="mt-2">
                    Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
                </p>
            </div>
        </div>
    </Wrapper>)
}