import Wrapper from "../../components/sectionWrapper"

export default function StatsSection(){
    return( <Wrapper className="py-5 md:py-10 bg-qosgray">
    <h2 className="text-center">Join Us today !</h2>
    <div className="md:grid grid-flow-col gap-x-10 mt-4">
        <div>
            <h3 className="text-mH3 mt-8"> More than 1000+ </h3>
            <p className="mt-2">
                Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
            </p>
        </div>
        <div>
            <h3 className="text-mH3 mt-8"> More than 8500+ </h3>
            <p className="mt-2">
                Ours APIS  are build to be supported by many techonlogies such as PHP, Laravel, Django & Ajax, javascript and wordpress woocommerce.
            </p>
        </div>
    </div>
</Wrapper>)
}