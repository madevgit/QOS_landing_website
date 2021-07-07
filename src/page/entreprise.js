import Wrapper from '../components/sectionWrapper'
import illust from '../images/icons/third.svg'

export default function EntreprisePage() {
    return (
        <Wrapper className="mt-24 " style={{ background: "url('./pictures/authpageBackground.png') 1% 50% rgba(255,255,255,0.1)" }}>
            <h2 className="font-medium text-center md:mt-16 md:w-10/12 mx-auto">We are a technology company focused on expanding digital payment footprints in Africa.</h2>
            <p class="mt-8 md:w-7/12 mx-auto text-center text-mlg md:text-dlg font-medium">
                Our mission is to enable business growth in Africa by building a payment infrastructure that allows individuals, start-ups and large organizations to easily make and accept payments.
            </p>
            <div id="firstintroduce" class="mt-8">
                <h2 className="font-normal">
                    Core Value
                </h2>
                <p className="md:w-6/12 mt-4 md:mt-6">
                    We are deeply customer driven company and are decisions are influenced by these core values that have shaped our company culture
                </p>
            </div>
            <div id="entrepriseValues" className="my-8 grid grid-flow-row gap-y-4 md:gap-y-0 md:grid-cols-3 md:gap-x-4">
                <div className="flex items-center justify-between bg-opacity-90 bg-qosgray shadow-cardX rounded-xl py-4 px-1 md:px-2">
                    <div class="w-2/12 h-full">
                        <img className="h-full w-full" src={illust} alt="ValueIllustration" />
                    </div>
                    <div className="w-9/12">
                        <h4 className="mb-2 font-normal">Customer Success</h4>
                        <p className="text-msm md:text-dsm">
                            Culpa dicta et sit ipsa blanditiis consectetur dolor et.Culpa dicta et sit ipsa blanditiis consectetur dolor et.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-opacity-90 bg-qosgray shadow-cardX rounded-xl py-4 px-1 md:px-2">
                    <div class="w-2/12 h-full">
                        <img className="h-full w-full" src={illust} alt="ValueIllustration" />
                    </div>
                    <div className="w-9/12">
                        <h4 className="mb-2 font-normal">Collaboration</h4>
                        <p className="text-msm md:text-dsm">
                            Culpa dicta et sit ipsa blanditiis consectetur dolor et.Culpa dicta et sit ipsa blanditiis consectetur dolor et.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between bg-opacity-90 bg-qosgray shadow-cardX rounded-xl py-4 px-1 md:px-2">
                    <div class="w-2/12 h-full">
                        <img className="h-full w-full" src={illust} alt="ValueIllustration" />
                    </div>
                    <div className="w-9/12">
                        <h4 className="mb-2 font-normal">Simpliciy</h4>
                        <p className="text-msm md:text-dsm">
                            Culpa dicta et sit ipsa blanditiis consectetur dolor et.Culpa dicta et sit ipsa blanditiis consectetur dolor et.
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}