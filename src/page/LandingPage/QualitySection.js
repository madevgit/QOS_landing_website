import Wrapper from "../../components/sectionWrapper"
import { media } from "../../libs/media"
const { security, lowFees, easyHandling } = media.Icons[1]
export default function QualitySection() {
    return (<Wrapper className="py-8 bg-qosgray">
        <div className="md:grid grid-flow-col gap-x-6">
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={security} alt="cross over technologies" />
                    <h4 className="md:text-center"> Total Security </h4>
                </div>
                <p className="mt-2">
                    QOS api is designed on the "security first" principle.
                    It protects you from all forms of scams. Your transactions and personal data as well as those of your customers are protected
                </p>
            </div>
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={easyHandling} alt="cross over technologies" />
                    <h4 className="md:text-center"> Easy to handle </h4>
                </div>
                <p className="mt-2">
                    Supporting QOS products is a very simple exercise for both end users and developers. Well-detailed documentation and an array of integration tools.
                </p>
            </div>
            <div>
                <div className="my-4">
                    <img className="opacity-80 h-8 w-8 mb-4 block md:mx-auto" src={lowFees} alt="cross over technologies" />
                    <h4 className="md:text-center"> Low fees </h4>
                </div>
                <p className="mt-2">
                    QOS wants to be a loyal ally and supporter of companies and start-ups. QOS does not apply any fees apart from 1.7% tax on each successful transaction.
                </p>
            </div>
        </div>
    </Wrapper>)
}