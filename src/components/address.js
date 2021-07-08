import { useState } from 'react'
import Benin from '../images/benin.png'
import Nigeria from '../images/naija.png'
import Togo from '../images/togo.png'
import check from '../images/icons/checkWhite.svg'
const CountryAddress = [
    {
        name: 'Benin',
        mail: 'mail@qosic.com',
        Tel: '+229 222-222 22',
        Location: `LOT: 902 - Maison
        Houedanou Leonard,
        Quartier Sikecodji,Cotonou`
    },
    {
        name: 'Nigeria',
        mail: 'mail@qosic.com',
        Tel: '+234 222-222 22',
        Location: `Lekki Gardens, Hi Tech
        Road, Ajah Lagos`
    },
    {
        name: 'Togo',
        mail: 'mail@qosic.com',
        Tel: '+228 222-222 22',
        Location: `Lekki Gardens, Hi Tech
        Road, Ajah Lagos`
    },

]
export default function Address({ className }) {
    const [CountryNumber, setNumber] = useState(0)
    return (
        <div className={className}>
            <div className="flex justify-around items-center">
                <button onClick={() => setNumber(0)} className="relative inline-block h-8 w-10 overflow-hidden rounded-full m-2 focus:outline-none" type="button">
                    <div className={`bg-qosblue bg-opacity-50 ${CountryNumber !== 0 ? 'scale-x-0' : 'scale-x-100'} transform duration-500 origin-left h-full w-full rounded-full absolute`}>
                        <img src={check} alt="check-icon" className="h-1/2 w-1/2 mt-2 opacity-80" />
                    </div>
                    <img src={Benin} className="h-full w-full rounded-md" alt="benin" alt="beninFlag" />
                </button>
                <button onClick={() => setNumber(1)} className="relative inline-block h-8 w-10 overflow-hidden rounded-full m-2 focus:outline-none" type="button">
                    <div className={`bg-qosblue bg-opacity-50 ${CountryNumber !== 1 ? 'scale-x-0' : 'scale-x-100'} transform duration-500 origin-left h-full w-full rounded-full absolute`}>
                        <img src={check} alt="check-icon" className="h-1/2 w-1/2 mt-2 opacity-80" />
                    </div>
                    <img src={Nigeria} className="h-full w-full rounded-md" alt="benin" alt="NigeriaFlag" />
                </button>
                <button onClick={() => setNumber(2)} className="relative inline-block h-8 w-10 overflow-hidden rounded-full m-2 focus:outline-none" type="button">
                    <div className={`bg-qosblue bg-opacity-50 ${CountryNumber !== 2 ? 'scale-x-0' : 'scale-x-100'} transform duration-500 origin-left h-full w-full rounded-full absolute`}>
                        <img src={check} alt="check-icon" className="h-1/2 w-1/2 mt-2 opacity-80" />
                    </div>
                    <img src={Togo} className="h-full w-full rounded-md" alt="benin" alt="TogoFlag" />
                </button>
            </div>
            <div className="mt-4 grid grid-flow-row gap-y-4">
                <div classname="">
                    <p className="inline-block md:block">
                        <span className="fi text-mlg fi-rr-envelope inline-block"></span>
                        <span className="ml-4 text-msm">{CountryAddress[CountryNumber].Tel} </span>
                    </p>
                    <p className="inline-block md:block ml-4 md:ml-0">
                        <span className="fi text-mlg fi-rr-envelope inline-block"></span>
                        <span className="ml-4 text-msm">{CountryAddress[CountryNumber].mail} </span>
                    </p>
                </div>

                <p>
                    <span className="fi text-mlg fi-rr-location-alt inline-block"></span>
                    <span className="ml-4 text-msm">{CountryAddress[CountryNumber].Location} </span>
                </p>

            </div>
        </div>
    )
}