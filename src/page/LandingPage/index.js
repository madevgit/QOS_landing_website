import LandingSection from "./LandingSection"
import Partners from "./PartnersSection"
import OfflineBussiness from "./OffBussinessSection"
import WebBussiness from "./WebBussinessSection"
import DevsSection from "./DevPart"
import QualitySection from "./QualitySection"
import StatsSection from "./StatsSection"

export default function LandingPage() {
    return (
        <>
            <LandingSection />
            <Partners />
            <OfflineBussiness />
            <WebBussiness />
            <div className="bg-qosgray">
                <DevsSection />
            </div>
            <QualitySection />
            <StatsSection />
        </>
    )
}
