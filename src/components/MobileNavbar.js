import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { media } from '../libs/media'
import { LinkIcon } from './LinkIcon'
import { LinkGroup } from './LinkGroup'

const { online, offline, digitalFinance, shareLink, lowFees } = media.Icons[1]

export function MobileNavbar() {
    const [Open, setOpen] = useState(false)
    const { pathname } = useLocation()
    useEffect(() => {
        setOpen(false)
    }, [pathname])
    return (
        <div>
            <button onClick={() => { setOpen(prev => !prev) }} id="menuToggler" className="text-mH3 md:hidden relative h-8 w-8 p-2 rounded-full focus:outline-none overflow-hidden">
                <span className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-menu-burger ${Open ? 'scale-y-0 rotate-45' : 'scale-y-100 rotate-0'}`} ></span>
                <span className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-cross ${Open ? 'rotate-0 scale-x-100' : 'scale-x-0 rotate-45'}`} ></span>
            </button>
            <div id="mobileNav" className={`bg-coolGray-50 left-1/2 ${Open ? '-translate-x-1/2 opacity-100 ml-auto scale-100' : 'translate-x-1/2 ml-10 scale-0 opacity-0'} top-16 transform grid gap-x-8 gap-y-8 grid-cols-2 min-w-max md:hidden transition-all duration-500 fixed rounded-md p-4`}>
                <div>
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">Products</p>
                    <LinkGroup>
                        <LinkIcon name="Online payment" icon={online} link="/online-payment" />
                        <LinkIcon name="Offline payment" icon={offline} link="/offline-payment" />
                        <LinkIcon name="Digital finance" icon={digitalFinance} link="/digital-finance" />
                        <LinkIcon name="Sharable link" icon={shareLink} link="/shareLink-payment" />
                    </LinkGroup>
                </div>
                <div>
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">Pricing </p>
                    <LinkIcon name="Pricing" icon={lowFees} link="/pricing" />
                </div>
                <div>
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">Company</p>
                    <LinkGroup>
                        <LinkIcon name="About Us" icon={offline} link="/company" />
                        <LinkIcon name="Contact Us" icon={offline} link="/contact-us" />
                    </LinkGroup>
                </div>
                <div>
                    <p className="text-mmd font-bold mb-2 text-opacity-50 text-qosdark">Developers</p>
                    <LinkIcon name="Documention" target="_blank" icon={offline} link="/docs" />
                </div>
                <div className="col-span-2">
                    <Link to="/register" className="p-2 block rounded-full px-3 bg-opacity-90 btn-primary btn-sm max-w-max mx-auto m-2" >
                        Create Acocount
                    </Link>
                    <Link to="/login" className="p-2 block btn-sm max-w-max mx-auto text-qosdark text-opacity-70 m-2 font-medium" >
                        Connexion <span className="fi fi-rr-angle-small-right text-msm"></span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
