
import { media } from '../../libs/media'
import Wrapper from '../../components/sectionWrapper'
import { useLangContext } from "../../components/translateContext"
import Messages from './translations/index.json'
import buttonText from '../../translations/button.json'

const { security, thirdElemen, docsLearn, architecture } = media.Icons[1]
const { check } = media.Icons[2]

export default function DigitalFinancePage() {
    const { Lang } = useLangContext()
    const Infos = Messages[Lang]
    const btnMsg=buttonText[Lang]
    return (
        <Wrapper className="mt-24">
            <h2 className="md:w-10/12 text-center mx-auto md:my-12">
                {Infos.Title}
            </h2>
            <p class="mt-8 md:w-10/12 mx-auto"> {Infos.description0} </p>
            <p class="mt-4 md:w-10/12 mx-auto">{Infos.description1}</p>

            <div className="keysWrapper bg-qosgray bg-opacity-70 rounded-lg shadow-sm px-4 pb-8 md:grid grid-flow-col gap-x-10 mt-8 md:mt-10">
                <div id="Features">
                    <h3 className="my-4">{Infos.Feature.Title}</h3>
                    <div class="grid grid-flow-row gap-y-6">
                        <div class="flex justify-between items-center">
                            <img src={architecture} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                {Infos.Feature.items[0]}
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={security} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                {Infos.Feature.items[1]}
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={docsLearn} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                {Infos.Feature.items[2]}
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={thirdElemen} alt="" class="h-10 w-10 p-1" />
                            <p class="w-10/12">
                                {Infos.Feature.items[3]}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="Benefits">
                    <h3 className="my-4" >{Infos.benefits.Title}</h3>
                    <div class="grid grid-flow-row gap-y-6">
                        <div class="flex justify-between items-center">
                            <img src={check} alt="" class="h-10 w-10 p-2" />
                            <p class="w-10/12">
                                {Infos.benefits.items[0]}
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={check} alt="" class="h-10 w-10 p-2" />
                            <p class="w-10/12">
                                {Infos.benefits.items[1]}
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={check} alt="" class="h-10 w-10 p-2" />
                            <p class="w-10/12">
                                {Infos.benefits.items[2]}
                            </p>
                        </div>
                        <div class="flex justify-between items-center">
                            <img src={check} alt="" class="h-10 w-10 p-2" />
                            <p class="w-10/12">
                                {Infos.benefits.items[3]}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-5">
                <h2 class="text-center my-4 md:my-8">
                    {Infos.subTitle0}
                </h2>
                <button class="btn btn-primary bg-qosorange rounded-full shadow-lg px-4 bg-opacity-80 mx-auto block">{btnMsg.contactus} </button>
            </div>
        </Wrapper>
    )
}