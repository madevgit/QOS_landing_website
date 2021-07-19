import Wrapper from "../../components/sectionWrapper"
import Pretitle from "../../components/pretitle"
import { media } from "../../libs/media"
export default function OfflineBussiness() {
    return (<Wrapper childrenClassName="md:flex relative py-10" className="">
        <div>
            <Pretitle dataName="Get Payment without internet" />
            <h2 className="w-11/12 md:w-7/12 mt-2" >Develop your customer journey and payments using USSD short code</h2>
            <p className="mt-8 md:w-6/12">
                Votre businness n’est pas sur internet et vous souhaitez récevoir des payments mobile money ? C’est possible ! You can use QoS standard payment menu or we can build complex menu depending on your customers experiences
            </p>
        </div>
        <img src={media.Illustrations.LandingPage.secondIllustration} alt="hello" className="md:w-4/12 md:absolute right-0 max-h-full" />
    </Wrapper>)
}