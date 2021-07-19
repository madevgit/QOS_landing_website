import Wrapper from '../../components/sectionWrapper'
import { media } from '../../libs/media'

export default function Partners() {
    return (<Wrapper style={{ clipPath: 'url(#myCurve)' }}   className="py-10 z-10 -mt-8 overflow-hidden relative h-48 md:h-60 mx-auto bg-qosgray md:py-20 md:-mt-20 ">
        <svg width="0" height="0" className="fixed">
            <defs>
                <clipPath id="myCurve" clipPathUnits="objectBoundingBox">
                    <path
                        d="M 0,1
									L 0,0
                                    C .35 .2, .65 .2 1 0
									L 1,0
									L 1,1
									C .65 .8, .35 .8, 0 1
									Z"
                    />
                </clipPath>
            </defs>
        </svg>
        <div className="mx-auto hideScroll grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 animate-partnersAnimation transform overflow-hidden">
            {media.Logos.customers.map((Partner, index) => <img key={`partners-${index}`} className="block md:h-14 h-14 w-18 md:w-24 rounded mx-auto " src={Partner} alt="hello part" />)}
        </div>
    </Wrapper>)
}