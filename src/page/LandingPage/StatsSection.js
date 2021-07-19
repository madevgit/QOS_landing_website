import Wrapper from "../../components/sectionWrapper"

export default function StatsSection() {
    return (<Wrapper className="py-5 md:py-10 bg-qosgray">
        <h2 className="text-center">Join Us today !</h2>
        <div className="md:grid grid-flow-col gap-x-10 mt-4">
            <div>
                <h3 className="mt-8"> More than 1000+ </h3>
                <p className="mt-2">
                    transactions are performed on our API per day
                </p>
            </div>
            <div>
                <h3 className="mt-8"> More than 20+ </h3>
                <p className="mt-2">
                    entreprise joined us in Benin to grow their bussines
                </p>
            </div>
        </div>
    </Wrapper>)
}