import Wrapper from '../../components/sectionWrapper'
import { media } from '../../libs/media'

export default function Partners() {
    return (<Wrapper id="Name" className="overflow-hidden py-8 lg:pt-14 -mt-8 md:-mt-20 z-10 bg-qosgray relative grid grid-flow-rows">
        <svg width="0" height="0" className="fixed">
            <defs>
                <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
                    <path
                        d="M 0,1
									L 0,.25
                                    C .35 0, .65 0 1 .25
									L 1,0
									L 1,1
									Z"
                    />
                </clipPath>
            </defs>
        </svg>
        <svg width="0" height="0" className="fixed">
            <defs>
                <clipPath id="myCurveMob" clipPathUnits="objectBoundingBox">
                    <path
                        d="M 0,1
									L 0,.05
                                    C .35 0, .65 0 1 .05
									L 1,0
									L 1,1
									Z"
                    />
                </clipPath>
            </defs>
        </svg>
        {media.Logos.customers.map((Partner, index) => <img key={`partners-${index}`} className="inline-block h-12 md:h-14 p-2 bg-qosgray bg-opacity-80 my-4 shadow-lg rounded m-2 " src={Partner} alt="hello part" />)}
    </Wrapper>)
}