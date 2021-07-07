import { useEffect,useState } from 'react'
import Wrapper from '../components/sectionWrapper'
export default function RegisterPage() {
    const [Step,setStep]=useState(0)
    useEffect(() => {
        let stepForm = document.querySelector('#stepForm')
        let formWidth = stepForm.clientWidth
        let CurrentScroll = stepForm.scrollLeft
        stepForm.querySelectorAll('input').forEach(input => {
            input.addEventListener('focus', function (e) {
                stepForm.scrollTo({ left: formWidth * (this.parentElement.parentElement.id - 1), behavior: 'smooth' })
            })
        })
        document.querySelectorAll('.controls').forEach(buttonControl => {
            buttonControl.addEventListener('click', function (e) {
                if (CurrentScroll < (formWidth * 2) && this.id === "next") {
                    CurrentScroll += formWidth
                    stepForm.scrollTo({ left: CurrentScroll, behavior: 'smooth' })
                }

                if (CurrentScroll > 0 && this.id === "prev") {
                    CurrentScroll -= formWidth
                    stepForm.scrollTo({ left: CurrentScroll, behavior: 'smooth' })
                }

                if (CurrentScroll === (formWidth * 2)) {
                    setTimeout(() => {
                        document.querySelector('#next').setAttribute('form', 'stepForm')
                        document.querySelector('#next').firstChild.replaceWith('Create Account')
                    })
                } else {
                    document.querySelector('#next').removeAttribute('form')
                    document.querySelector('#next').firstChild.replaceWith('next')
                }
                if (CurrentScroll > 0) {
                    document.querySelector('#prev').hidden = false
                } else {
                    document.querySelector('#prev').hidden = true
                }
            })
        })
    }, [])
    return (
        <Wrapper style={{ background: "url('./pictures/authpageBackground.png')", backgroundSize: "100% 1%" }} >
            <div class="block w-12/12 max-w-lg px-2 pricingCard py-4 mx-auto my-24 rounded-xl">
                <h3 class="text-center">Create  your <span className="text-qosblue"> QOS </span> account</h3>
                <div class="my-4 w-3/12 mx-auto flex items-center justify-between">
                    <button class="h-8 w-8 p-1 transform scale-100 bg-qosorange bg-opacity-80 shadow-xl rounded-full text-qosgray text-msm" >1</button>
                    <button class="h-8 w-8 p-1 transform scale-75 bg-qosblue rounded-full text-qosgray text-msm" >2</button>
                    <button class="h-8 w-8 p-1 transform scale-75 bg-qosblue rounded-full text-qosgray text-msm" >3</button>
                </div>
                <form id="stepForm" class="overflow-x-hidden hideScroll flex max-w-full">
                    <div class="min-w-full md:px-8 max-w-full" id="1">
                        <div class="mx-auto w-full px-2">
                            <label class="block">Firstname:</label>
                            <input class="" name="firstname" required autofocus placeholder="your firstname" />
                        </div>
                        <div class="mt-6 mx-auto w-full px-2">
                            <label class="block">Lastname:</label>
                            <input class=" " name="lastname"  required placeholder="your lastname" />
                        </div>
                        <div class="mt-6 mx-auto w-full px-2">
                            <label class="block">Country:</label>
                            <select name="country">
                                <option value="BJ">Benin</option>
                                <option value="NJ">Nigeria</option>
                            </select>
                        </div>
                    </div>
                    <div class="min-w-full md:px-8 max-w-full" id="2">
                        <div class="mx-auto w-full px-2">
                            <label class="block">App Name / Business Name:</label>
                            <input class=" " name="bname" type='text' required placeholder="App name or bussiness name" />
                        </div>
                        <div class="mt-6 mx-auto w-full px-2">
                            <label class="block">Phone Number:</label>
                            <input class=" " name="lastname" type="tel" required />
                        </div>
                        <div class="mt-6 mx-auto w-full px-2">
                            <label class="block">Bussiness description:</label>
                            <textarea name="description">

                            </textarea>
                        </div>
                    </div>
                    <div class="min-w-full md:px-8 max-w-full" id="3">
                        <div class=" mx-auto w-full px-2">
                            <label class="block">Email:</label>
                            <input class="" name="bname" type='email' required placeholder="hello@gmail.com" />
                        </div>
                        <div class="mt-6 mx-auto w-full px-2">
                            <label class="block">password:</label>
                            <input class="" name="lastname" type="password" required />
                        </div>
                        <div class="mt-6 mx-auto w-full px-2">
                            <label class="block">passsword comfirmation:</label>
                            <input class="" name="lastname" type="password" required />
                        </div>
                        <div class="mt-6 mx-auto w-full">
                            <input type="checkbox" name="privacy" required id="privacy" />
                            <label class="text-msm font-normal ml-4">Are you agree with the terms of use and data utilisation ?</label>
                        </div>
                    </div>
                </form>
                <div class="font-bold text-qosblue w-10/12 md:w-8/12 mx-auto flex justify-around  mt-4">
                    <button hidden id="prev" class="controls shadow-lg bg-qosgray bg-opacity-80 py-2 px-3 rounded-lg text-mlg">
                        <span class="fi fi-rr-arrow-left text-msm"></span> back
                    </button>
                    <button id="next" type="submit" class="controls shadow-lg bg-qosgray bg-opacity-80 py-2 px-3 rounded-lg text-mlg">
                        next &nbsp; <span class="fi fi-rr-arrow-right text-msm"></span>
                    </button>
                </div>
            </div>

        </Wrapper>
    )
}