/*********  1- LOGOS IMPORTATION **************/

// 1.1 -qos logos
import qosLogoWhite from '../images/QOS/QOS_WHITE.png'
import qosLogoBlack from '../images/QOS/QOS_BLACK.png'

// 1.2- CUSTUMERS AND PARTNERS LOGOS 
import partner0 from '../images/partners/africainevie.png'
import partner1 from '../images/partners/altlantique.png'
import partner2 from '../images/partners/arab.png'
import partner3 from '../images/partners/BeninLogue.png'
import partner4 from '../images/partners/crs.png'
import partner5 from '../images/partners/culture.png'
import partner6 from '../images/partners/farmerline.png'
import partner7 from '../images/partners/franceTel.png'
import partner8 from '../images/partners/friklabel.png'
import partner9 from '../images/partners/gmd.png'
import partner10 from '../images/partners/gozem.png'
import partner11 from '../images/partners/itNum.png'
import partner12 from '../images/partners/kea.png'
import partner13 from '../images/partners/mtn.png'
import partner14 from '../images/partners/nautilusTech.png'
import partner15 from '../images/partners/nsiaGmns.png'
import partner16 from '../images/partners/padme.png'
import partner17 from '../images/partners/paiementPro.png'
import partner18 from '../images/partners/Pieuve.png'
import partner19 from '../images/partners/siroco.png'
import partner20 from '../images/partners/sunu.png'

// 1.3- CUSTUMERS AND PARTNERS LOGOS 
import github from '../images/clients/github.png'
import wp from '../images/clients/wp.png'
import moov from '../images/clients/moov.jpeg'
import mtn from '../images/clients/mtn.png'


/*********  2- ICONS IMPORTATION **************/

// 2.1-Icon Theme 1
import security from '../icons/theme1/016-firewall.svg'
import easyHandling from '../icons/theme1/026-design.svg'
import lowFees from '../icons/theme1/006-percentage.svg'
import online from '../icons/theme1/031-online.svg'
import shareLink from '../icons/theme1/002-site map.svg'
import crossOverTech from '../icons/theme1/001-diagram.svg'
import integration from '../icons/theme1/010-web development.svg'
import digitalFinance from '../icons/theme1/035-home.svg'
import docsLearn from '../icons/theme1/030-web development.svg'
import offline from '../icons/theme1/008-404 error.svg'
import architecture from '../icons/theme1/002-site map.svg'
import thirdElemen from '../icons/theme1/050-devices.svg'

// 2.1-Icon Theme 2
import security1 from '../icons/theme2/033-credit card.svg'
import easyHandling1 from '../icons/theme2/005-credit card.svg'
import lowFees1 from '../icons/theme2/001-credit card.svg'
import online1 from '../icons/theme2/048-online payment.svg'
import shareLink1 from '../icons/theme2/046-transfer.svg'
import crossOverTech1 from '../icons/theme2/003-cut.svg'
import integration1 from '../icons/theme2/015-transaction.svg'
import digitalFinance1 from '../icons/theme2/032-bank.svg'
import docsLearn1 from '../icons/theme2/029-receipt.svg'
import offline1 from '../icons/theme2/041-chip.svg'
import architecture1 from '../icons/theme2/007-atm machine.svg'
import thirdElemen1 from '../icons/theme2/049-safe box.svg'

// 2.3-funcionnal icons
import checkFirst from '../icons/checkWhite.svg'
import checkSecond from '../icons/check.svg'

// 2.4 - FLAGS 
import Benin from '../images/flags/benin.png'
import Nigeria from '../images/flags/naija.png'
import Togo from '../images/flags/togo.png'

/*********  1- IMAGES AND ILLUSTRATIONS IMPORTATION **************/

import qosLandingi from '../images/illustrations/illustration4.svg'
import onlinePi from '../images/illustrations/illustration15.png'
import USSDi from '../images/illustrations/illustration10.png'
import landingUSSDi from '../images/illustrations/illustration7.jpg'
import landingDashi from '../images/illustrations/illustration3.png'
import USSDflowi from '../images/illustrations/illustration8.png'



export const media = {
    Illustrations: {
        LandingPage: {
            firstIllustration: qosLandingi,
            secondIllustration: landingDashi,
            thirdIllustration: landingUSSDi
        },
        onlinePaymentPage: {
            firstIllustration: onlinePi,
        },
        offlinePaymentPage: {
            firstIllustration: USSDi,
            secondIllustration: USSDflowi
        },
    },
    Icons: [
        {
            security: security,
            easyHandling: easyHandling,
            lowFees: lowFees,
            online: online,
            shareLink: shareLink,
            crossOverTech: crossOverTech,
            integration: integration,
            digitalFinance: digitalFinance,
            docsLearn: docsLearn,
            offline: offline,
            architecture: architecture,
            thirdElemen: thirdElemen
        },
        {
            security: security1,
            easyHandling: easyHandling1,
            lowFees: lowFees1,
            online: online1,
            shareLink: shareLink1,
            crossOverTech: crossOverTech1,
            integration: integration1,
            digitalFinance: digitalFinance1,
            docsLearn: docsLearn1,
            offline: offline1,
            architecture: architecture1,
            thirdElemen: thirdElemen1
        },
        {
            check: checkFirst,
            check1: checkSecond
        }
    ],
    Logos: {
        qos: {
            qosLogoWhite: qosLogoWhite,
            qosLogoBlack: qosLogoBlack
        },
        customers: [partner0, partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8, partner9, partner10, partner11, partner12, partner13, partner14, partner15, partner16, partner17, partner18, partner19, partner20],
        other: {
            github: github,
            wordpress: wp,
            moov:moov,
            mtn:mtn
        }
    },
    Flags: {
        Benin: Benin,
        Nigeria: Nigeria,
        Togo: Togo
    }
}