import { useState } from 'react'
import Wrapper from '../components/sectionWrapper'
import Address from '../components/address'
export default function ContactPage() {
    const [OtherReason, setOtherReason] = useState(false)
    return (<Wrapper style={{ background: "linear-gradient(209.03deg,rgba(79, 83, 252, 0.48) 107.84%,rgba(252, 162, 79, 0.424) 101.69%),linear-gradient(209.03deg,rgba(79, 83, 252, 0.48) 17.84%,rgba(252, 162, 79, 0.424) 101.69%)" }} childrenClassName="transform md:scale-90" className="py-24 md:py-4">
        <h2 className="font-medium text-center text-qosgray md:mt-16 md:w-10/12 mx-auto">Contact Us</h2>
        <p class="mt-4 md:w-7/12 mx-auto text-center text-qosgray text-mlg md:text-dlg font-medium">
            Share with us your problem, idea
        </p>
        <section className="my-10 md: md:flex">
            <div style={{ background: "linear-gradient(rgba(255, 255, 225, 0.1),rgba(255, 255, 252, 0.1)),url('./pictures/ac2.jpg') 10% 40%", backgroundRepeat: "no-repeat", backgroundPosition: "none" }} className=" md:w-60 bg-opacity-0 mx-auto shadow-lg p-2 transform md:scale-105 mt-2 px-4  mb-4 rounded-md md:rounded-xl text-qosgray z-10 ralative">
                <h4 className="font-medium opacity-90 text-dlg text-center my-4">Contact Information</h4>
                <Address className="mx-auto h-40" />
                <div className="hidden md:block h-48 w-full">

                </div>
            </div>
            <form className="mx-auto max-w-sm md:max-w-3xl md:-ml-8 -mt-2 pricingCard md:pl-8 rounded-lg md:flex flex-wrap px-2 py-4 z-0 relative">
                <div>

                </div>
                <div class="mx-auto w-full md:w-1/2  px-2">
                    <label class="block">Firstname:</label>
                    <input class="" name="firstname" required autofocus placeholder="your firstname" />
                </div>
                <div class="mt-6 mx-auto w-full md:w-1/2 md:mt-0 px-2">
                    <label class="block">Lastname:</label>
                    <input class=" " name="lastname" required placeholder="your lastname" />
                </div>
                <div class="mx-auto w-full md:w-1/2 md:mt-4 px-2">
                    <label class="block">Email:</label>
                    <input class="" name="firstname" required autofocus placeholder="your firstname" />
                </div>
                <div class="mt-6 mx-auto w-full md:w-1/2 md:mt-4 px-2">
                    <label class="block">Phone Number:</label>
                    <input class=" " name="lastname" required placeholder="your lastname" />
                </div>
                <label className="block mt-4 px-2">What's your reason ?</label>
                <div className="md:flex justify-around w-full">
                    <div onClick={(e) => setOtherReason(false)} className="flex items-end mt-1 mx-auto w-full">
                        <input id="TechSupport" value="TechSupport" type="radio" name="object" required />
                        <label htmlFor="TechSupport" class="text-msm font-normal ">Technical Support</label>
                    </div>
                    <div onClick={(e) => setOtherReason(false)} className="flex items-end mt-1 mx-auto w-full">
                        <input id="commercial" value="commercial" type="radio" name="object" required />
                        <label htmlFor="commercial" class="text-msm font-normal ">Commercial case</label>
                    </div>
                    <div onClick={(e) => setOtherReason(false)} className="flex items-end mt-1 mx-auto w-full">
                        <input id="webDev" value="webDev" type="radio" name="object" required />
                        <label htmlFor="webDev" class="text-msm font-normal ">Web development</label>
                    </div>
                    <div onClick={(e) => setOtherReason(false)} className="flex items-end mt-1 mx-auto w-full">
                        <input id="DBMigration" value="DBMigration" type="radio" name="object" required />
                        <label htmlFor="DBMigration" class="text-msm font-normal ">DB Migration</label>
                    </div>
                    <div onClick={(e) => setOtherReason(e.target.checked)} className="flex items-end mt-1 mx-auto w-full">
                        <input id="other" value="other" type="radio" name="object" required />
                        <label htmlFor="other" className="text-msm font-normal ">Other</label>
                    </div>
                </div>
                <div className={`mx-auto w-full px-2 overflow-hidden transform ${OtherReason ? 'scale-y-100 h-auto my-2' : 'h-0'} duration-500`}>
                    <input type="text" name="object" required placeholder="Tell us please " />
                </div>
                <div className={`mx-auto w-full px-2 mt-4 text-qosdark text-opacity-80`}>
                    <textarea name="message" placeholder="Tell us more about your plan"></textarea>
                </div>
                <button className="btn block btn-md rounded-lg btn-primary mt-4 mx-auto">Send Now</button>
            </form>
        </section>
    </Wrapper>)
}