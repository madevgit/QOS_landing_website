import Wrapper from '../../components/sectionWrapper'
export default function LoginPage() {
    return (
        <Wrapper style={{ background: "url('./pictures/authpageBackground.png')", backgroundSize: "80% 1%" }}>
            <div class="w-12/12 max-w-lg px-2 pricingCard py-8 mx-auto my-32 rounded-xl">
                <h3 class="text-center">Login to your <span className="text-qosorange text-opacity-95"> QOS </span> account</h3>
                <form class="">
                    <div class="mx-auto w-full md:max-w-sm mt-10">
                        <label class="block">Email:</label>
                        <input class="" name="bname" type='email' required placeholder="hello@gmail.com" />
                    </div>
                    <div class="mx-auto w-full md:max-w-sm mt-10">
                        <div class="flex items-center justify-between"> <label class="block">Password:</label> <a className="text-qosblue underline text-msm md:text-dsm" href="#div3">Forgot password ?</a></div>
                        <input class="" name="lastname" type="password" required />
                    </div>
                    <button class="btn w-8/12 h-12 btn-primary bg-qosorange btn-sm md:max-w-sm mx-auto mt-10 block">
                        Log In
                    </button>
                </form>
            </div>
        </Wrapper>
    )
}