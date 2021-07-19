import Wrapper from '../../components/sectionWrapper'
import { media } from '../../libs/media'

export default function Partners() {
    return (<Wrapper style={{ clipPath: 'url(#myCurve)' }} className="py-8 z-10 relative mx-auto -mt-4 bg-qosgray md:py-20 md:-mt-8">
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
        <div className="mx-auto overflow-auto hideScroll flex">
            {media.Logos.customers.map((Partner, index) => <img key={`partners-${index}`} className="inline-block h-12 w-20 rounded mx-4 " src={Partner} alt="hello part" />)}
        </div>
    </Wrapper>)
}