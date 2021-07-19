import Wrapper from "../../components/sectionWrapper"
import Pretitle from "../../components/pretitle"
import { media } from "../../libs/media"

export default function WebBussiness() {
    return (<Wrapper childrenClassName="md:flex relative py-10" className="bg-qosgray">
        <div>
            <Pretitle dataName="Web Bussiness" />
            <h2 className="w-11/12 mt-2 md:w-7/12" >Build mobile money payments with our well designed APIs</h2>
            <div className="md:grid grid-flow-col gap-x-6 md:w-7/12 mt-8">
                <p className="mt-4">
                    Vous désirez récevoir les paiements et effectuer des virements depuis votre site web ou application ? L’API  QoS est un idéal outils fait pour céla.</p>
                <p className="mt-4">
                    L’API QoS vous permet à travers son tableau de bord simple et intuitif de gérer vos transactions, d’effétuer des opérations inversées et même de collecter les informations de transactions de vos clients.</p>
            </div>
        </div>
        <img src={media.Illustrations.LandingPage.thirdIllustration} alt="hello" className="md:w-4/12 md:absolute right-0 max-h-full" />
    </Wrapper>)
}