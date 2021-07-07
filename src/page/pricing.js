import check from '../images/icons/check.svg'
import Wrapper from '../components/sectionWrapper'
export default function PricingPage() {
    return (
        <main>
           <Wrapper className="mt-24" style={{ background: "url('./pictures/authpageBackground.png')", backgroundSize: "100% 1%" }}>
           <h2 class="text-qosdark text-opacity-80 mt-4">Simple, transparent pricing</h2>
            <h4 class="mt-4 text-qosdark text-opacity-80 font-normal md:mt-8">Simple choose your plan and apply</h4>
            <div className="mt-10 md:mt-12 md:grid grid-flow-col gap-x-10 md:w-10/12 mx-auto">
                <div class="pricingCard max-w-xs px-4 py-4 w-11/12 mx-auto border border-opacity-75 border-qosgray">
                    <h3 class="text-center font-bold my-4">USSD</h3>
                    <h3 class="text-center font-bold text-qosorange">1,7%</h3>
                    <p className="w-11/12 mx-auto text-center">for every subsequent successful transaction</p>
                    <div class="flex justify-between items-center mt-4">
                        <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                        <p class="w-9/12 inline-block">payment to your mobile money account daily</p>
                    </div>
                    <div class="flex justify-between items-center mt-8">
                        <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                        <p class="w-9/12 inline-block">No hidden fee or changes</p>
                    </div>
                    <button class="btn btn-active mt-8 mx-auto block">
                        Apply now
                    </button>
                </div>
                <div class="pricingCard max-w-xs px-4 mt-8 md:mt-0 py-4 w-11/12 mx-auto border border-opacity-75 border-qosgray">
                    <h3  class="text-center font-bold my-4">API</h3>
                    <h3 class="text-center font-bold text-qosorange">1,7%</h3>
                    <p className="w-11/12 mx-auto text-center">for every subsequent successful transaction</p>
                    <div class="flex justify-between items-center mt-4">
                        <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                        <p class="w-9/12 inline-block">payment to your mobile money account daily</p>
                    </div>
                    <div class="flex justify-between items-center mt-8">
                        <img class="inline-block h-8 w-8" name="checked" src={check} alt="pricingOption" />
                        <p class="w-9/12 inline-block">No hidden fee or charges</p>
                    </div>
                    <button class="btn btn-active mt-8 mx-auto block">
                        Apply now
                    </button>
                </div>
            </div>
           </Wrapper>
           <Wrapper className="mt-10">
           <h3>Custom solution</h3>
           <h4 className="mt-8">Do you have a unique business model ?</h4>
           </Wrapper>
        </main>
    )
}