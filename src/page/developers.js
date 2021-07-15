import { useEffect, useState } from "react";
import Wrapper from "../components/sectionWrapper";
import { Link, Route, useLocation } from "react-router-dom";
import QOSblack from "../images/QOS_BLACK.png";
import wp from '../images/wp.png'
import CodeBoard from "../components/codeBoard";
import { code } from '../libs/codeSamples'
import github from '../images/github.png'
import SimpleCodeBoard from "../components/simpleCodeboard";
import Prism from 'prismjs'

export default function DevelopersPage() {
    const { pathname } = useLocation();
    const [goBack, setGoback] = useState(false);
    useEffect(() => {
        if (pathname === "/developers/api") {
            setGoback(true);
        } else {
            setGoback(false);
        }
    }, [pathname]);
    return (
        <main>
            <Wrapper className="pt-24 bg-qosgray bg-opacity-70">
                <Route exact path="/developers">
                    <h2>Documention</h2>
                    <div>
                        <p className="md:w-6/12 pt-4">
                            This document describes how a third party will connect to o Mobile
                            Payment interface from QOS-IC. Note that all all data formats and
                            response definitions are in conformance with the REST standard.
                        </p>
                        <img src="#none" alt="docsillustrtion" />
                    </div>

                    <Link to="/contact">
                        {" "}
                        <button className="btn btn-active btn-sm rounded inline-block my-4 mr-2">
                            Custumer assistance
                        </button>{" "}
                    </Link>
                    <Link to="/register">
                        {" "}
                        <button className="btn btn-primary btn-sm rounded inline-block md:my-4">
                            Create account
                        </button>{" "}
                    </Link>
                </Route>
                <HeaderDocs />
                <div className="relative min-h-screen flex justify-between">
                    <div className={`md:w-10/12 w-full ${goBack && "mt-20"}`}>
                        <Route exact path="/developers">
                            <DevOverview />
                        </Route>
                        <Route path="/developers/api">
                            <ApiDocs />
                        </Route>
                        <Route path="/developers/plugins-and-libraries">
                            <PluginsAndLibraries />
                        </Route>
                    </div>
                </div>
            </Wrapper>
        </main>
    );
}

export function NavsTabs({ options, activeStyle, notActiveStyle, mainStyle, components }) {
    const [active, setActive] = useState(0)
    const current = options[active]
    useEffect(()=>{
       setTimeout(()=>{
        Prism.highlightAll()
       },0)
    })
    return (
        <>
            <div className={mainStyle}>
                {options.map((option, index) => <button onClick={() => setActive(index)} className={`${(active === index) ? activeStyle : notActiveStyle + ' opacity-80'} p-2 transform transition-all outline-none focus:outline-none duration-500`} key={index + 'option'}> {option.name} </button>)}
            </div>
            {current.content}
        </>
    )
}

export function JsLibrary() {

    return (
        <div>
            <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-11/12 rounded-lg flex">
                <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
                <a href="#link" className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"> clone the full code repositry here </a>
            </div>
            <ol className="list-decimal w-11/12 font-bold mx-auto">
                <li className="mb-2">
                    <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70"> Include the file momo.bundle.js in your project</p>
                </li>
                <li className="mb-2">
                    <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70">Create a div tag at the location where you want to use the API (with a unique id ex: id= “momo”)</p>
                </li>
                <li className="mb-2">
                    <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70">To display the form on page, create the new instance for MomoControler class, see example</p>
                    <p className="font-bold">Ex:</p>
                    <CodeBoard modes={[{ name: 'JS Library sample', code: `var instance = new MomoControler(idDiv,clientId,username,passeword,montant,option)`, language: 'javascript' }]} />
                </li>
                <li className="mb-2">
                    <p className="font-normal font-msm md:font-dsm text-qosdark text-opacity-70"> The following describes the important element required to be sent for display for</p>
                </li>
            </ol>
            <div className="max-w-full overflow-scroll">
                <table className="docs text-msm md:text-dsm table-fixed border-collapse border-qosdark">
                    <thead>
                        <th>Element</th>
                        <th>Type</th>
                        <th>Decription</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">idDiv</td>
                            <td className="text-qosred font-normal">string
                                <pre>required</pre></td>
                            <td className=""> div id </td>
                        </tr>
                        <tr>
                            <td>clienId</td>
                            <td className="text-qosred font-normal">string
                                <pre>required</pre></td>
                            <td>client id</td>
                        </tr>
                        <tr>
                            <td>username</td>
                            <td className="text-qosred font-normal">string
                                <pre>required</pre></td>
                            <td>username </td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td className="text-qosred font-normal">string
                                <pre>required</pre></td>
                            <td>client password </td>
                        </tr>
                        <tr>
                            <td>montant</td>
                            <td className="text-qosred font-normal">decimal
                                <pre>required</pre></td>
                            <td> amount to be send</td>
                        </tr>
                        <tr>
                            <td>option</td>
                            <td className="text-qosred font-normal">object
                                <pre>optional</pre></td>
                            <td> <div className="bg-qosdark h-20 w-full overflow-scroll text-small  "> <pre> <code className="language-javascript"> {`{\n    baseDirectory:'String:required', \n    pathImage:'String:optional', \n    textIntro:'string:optional', \n    business:'string:optional' \n  }`} </code> </pre></div> </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <CodeBoard modes={code.Libs.javascript} />
        </div>
    )
}
export function PhpLibrary() {
    return (
        <div>
            <div className="bg-qosgray bg-opacity-70 py-5 px-4 shadow-md mb-5 items-center w-11/12 rounded-lg flex">
                <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
                <a href="#link" className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"> clone the full code repositry here </a>
            </div>
            <CodeBoard modes={code.Libs.php} />
        </div>
    )
}
export function DjangoLibrary() {
    return (
        <div>
            <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-11/12 rounded-lg flex">
                <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
                <a href="#link" className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"> clone the full code repositry here </a>
            </div>
            <CodeBoard modes={code.Libs.django} />
        </div>
    )
}
export function LaravelLibrary() {
    return (
        <div>
            <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-11/12 rounded-lg flex">
                <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
                <a href="#link" className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"> clone the full code repositry here </a>
            </div>
            <div className="border-2 p-2 text-qosdark text-opacity-70 border-qosred border-opacity-30 rounded-lg mb-5 text-center">
                <span className="fi fi-rr-info text-qosred text-opacity-70  inline-block mr-2"></span>
                <span>You need to install <b>Guzzle first</b> </span>
            </div>
            <CodeBoard modes={code.Libs.laravel} />
        </div>
    )
}
export function PluginsAndLibraries() {

    const { pathname } = useLocation();
    const [isOpen, setisOpen] = useState(false)
    const [stickyDocsHeader, setSticky] = useState(false)

    useEffect(() => {
        // if (pathname !== "/developers") {
        //     setSticky(true);
        // } else {
        //     setSticky(false)
        // }
        window.addEventListener("scroll", function () {
            if (window.scrollY > 250) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        })
    })
    return (
        <div className="md:flex justify-between">
            <section className="md:w-3/12">
                <h2 className="font-medim opacity-80 mt-5">Plugins</h2>
                <a className="flex bg-qosgray w-64 md:w-72 rounded-lg shadow-md mt-4 p-2 h-16 justify-between items-center" href="https://fr.wordpress.org/plugins/qos-payment-gateway/">
                    <img src={wp} className="h-11 w-2/12" alt="pluginswordpress" />
                    <div className="w-10/12 pl-4">
                        <span className="font-bold inline-block ">Wordpress plugin</span>
                        <span className="text-small md:text-msm opacity-60 block">Allow you receive money form your wordpress website</span>
                    </div></a>
            </section>
            <section className="md:w-6/12 min-h-screen overflow-visible">
                <h2 className="font-medim opacity-80 mb-5 mt-10 md:mt-5">Libraries</h2>
                <NavsTabs options={[{ name: 'PHP', content: <PhpLibrary /> }, { name: 'JAVASCRIPT', content: <JsLibrary /> }, { name: 'DJANGO', content: <DjangoLibrary /> }, { name: 'LARAVEL', content: <LaravelLibrary /> }]} activeStyle="btn-primary scale-120 shadow-md rounded-md bg-opacity-80" mainStyle={`p-2 flex ${stickyDocsHeader && "fixed bg-qosgray z-50 top-16"} w-full left-0 justify-around mb-5 text-mmd md:text-dmd`} />
            </section>
        </div>
    );
}

export function HeaderDocs() {
    const { pathname } = useLocation();
    const [isOpen, setisOpen] = useState(false)
    const [stickyDocsHeader, setSticky] = useState(false)
    useEffect(() => {
        if (pathname !== "/developers") {
            setSticky(true);
        } else {
            setSticky(false)
        }
        window.addEventListener("scroll", function () {
            if (window.scrollY) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, [stickyDocsHeader, pathname]);
    return (
        <header
            id="docsHeader"
            className={`${stickyDocsHeader ? "z-50 scale-y-100" : "scale-y-0"
                } w-full origin-top bg-qosgray transform duration-500 transition-all fixed top-0 left-0`}
        >
            <div className="flex justify-between p-4 h-13 px-6 lg:px-0 md:px-10 max-w-screen-lg mx-auto">
                <Link
                    to="/developers"
                    className="text-center block w-2/12 text-msm mr-2 max-h-full h-full"
                >
                    <h4 className="font-medium text-qosorange inline-block">Docs</h4>
                    <img
                        src={QOSblack}
                        alt="qos_logo"
                        className="block w-6 h-3 md:w-10 md:h-5 mx-auto"
                    />
                </Link>
                <div className="flex -mt-2 relative w-10/12 max-w-md h-full mr-2">
                    <input
                        type="text"
                        name="qossearch"
                        className="border-none bg-qosdark bg-opacity-10 rounded-full pr-12 h-9"
                    />
                    <button className="w-8 h-8 absolute bg-qosdark bg-opacity-40 shadow text-qosgray right-0.5 top-2.5 rounded-full pt-1">
                        <span className="fi fi-rr-search"></span>
                    </button>
                </div>
            </div>
            <Route path="/developers/api">
                <nav className="grid font-medium pb-2 mt-4 grid-flow-col gap-x-4 hideScroll overflow-scroll px-6 lg:px-0 md:px-10 max-w-screen-lg mx-auto">
                    <Link
                        className="docslinks relative text-center max-w-max"
                        to="/developers/api"
                    >
                        Introduction
                    </Link>
                    <Link
                        className="docslinks relative text-center max-w-max"
                        to="/developers/api/test"
                    >
                        Test
                    </Link>
                    {/* <Link
                        className="docslinks relative text-center max-w-max"
                        to="/developers/api/auth"
                    >
                        Authentification
                    </Link>
                    <Link
                        className="docslinks relative text-center max-w-max"
                        to="/developers/api/security"
                    >
                        Security
                    </Link> */}
                    <Link
                        className="docslinks relative text-center max-w-max"
                        to="/developers/api/payment"
                    >
                        Payment
                    </Link>
                    <Link
                        className="docslinks relative text-center max-w-max"
                        to="/developers/api/refund"
                    >
                        Refund
                    </Link>
                    <Link
                        className="docslinks relative text-center  max-contentmax-w-max"
                        to="/developers/api/transaction"
                    >
                        Transaction
                    </Link>
                </nav>
            </Route>
        </header>
    );
}
export function ApiDocs() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.querySelectorAll(".docslinks").forEach(
            (link) => {
                if (link.href === `${window.location.href}`) {
                    link.classList.add("text-qosblue");
                } else {
                    link.classList.remove("text-qosblue");
                }
            },
            [pathname]
        );
    });
    return (
        <div className="">
            <Route exact path="/developers/api">
                <h2 className="mb-4 font-bold">Design</h2>
                <p className=" md:w-8/12 mb-8">
                    This document describes how a third party will connect to a
                    MobilePayment© Interface from QoS-IC. Note that all data formats and
                    response definitions are in conformance with the REST standard.
                </p>
                <p className="md:w-8/12">
                    A MobilePayment© transaction provides Mobile Money capability
                    application programming interfaces (APIs) for third-party applications
                    (App for short) to connect to it and use its Mobile Money capability
                    for Bill Payment, Depositing Money in Subscribers account & Querying
                    Subscriber’s account in a third-party system. The subsequent sections
                    show the message structure for Mobile Payment
                </p>
            </Route>
            <Route exact path="/developers/api/test">
                <h2 className="mt-20 mb-4 font-bold"> API Test</h2>
                <p>
                    Before you go to production you need to test your QOS API integration
                    without risk. So OOS give possibility to test integration safly way.
                </p>
                <div>
                    <h3 className="font-bold text-mdm text-opacity-80 mt-8 text-qosdark">Authentification informations</h3>
                    <p className="flex items-center mt-2">
                        <span className="text-qosred text-msm text-opacity-70 inline-block mr-4">username:</span>
                        <SimpleCodeBoard code="USR06" language='txt' />
                    </p>
                    <p className="flex items-center mt-2">
                        <span className="text-qosred text-msm text-opacity-70 inline-block mr-4">password:</span>
                        <SimpleCodeBoard code="YG739G5XFVPYYV4ADJVW" language='txt' />
                    </p>
                    <NavsTabs options={[{ name: 'MTN Benin API', content: <MtnTestAuth index="0" /> }, { name: 'MOOV Africa API', content: <MtnTestAuth index="1" />}]} activeStyle="btn-primary scale-120 shadow-md rounded-md bg-opacity-80" mainStyle={`p-2 flex mt-4 w-full left-0 justify-around mb-5 text-mmd md:text-dmd`} />
                </div>
            </Route>
            <Route exact path="/developers/api/auth">
                Authentificaton information
            </Route>
            <Route exact path="/developers/api/security">
                Securtiy information
            </Route>
            <Route exact path="/developers/api/payment">
              <div className="mt-10">
                <h2>Payment</h2>
                <p></p>
              <CodeBoard modes={code.Endpoints.payment.states} />
              </div>
            </Route>
            <Route exact path="/developers/api/refund">
            <div className="mt-10">
                <h2 className="font-bold mb-4">Refund</h2>
                <p className="mb-4">The Refund is a request to reverse mobile money back to the Subscriber’s mobile money account. Partners must code the App based on the API field requirements so that the App can send correct requests accordingly.</p>
                <div>
                <span className="font-mono font-bold text-mmd">Endpoint URI:</span>
                <SimpleCodeBoard code={code.Endpoints.refund.uri} language='uri' />
                </div>
              <CodeBoard modes={code.Endpoints.refund.states} />
              </div>
            </Route>
            <Route exact path="/developers/api/transaction">
               <div className="mt-10">
                   <h2>Transcation</h2>
                   <CodeBoard modes={code.Endpoints.transaction.states}/>
               </div>
            </Route>
        </div>
    );
}
export function DevOverview() {
    return (
        <div className="py-8 grid grid-cols-2 gap-x-5">
            <Link
                className="text-msm text-center bg-qosgray shadow block h-24 w-full mx-auto mt-4 rounded-md"
                to="/developers/api"
            >
                <div className="h-8 w-8"></div>
                API documention
            </Link>
            <Link
                className="text-msm text-center bg-qosgray shadow block h-24 w-full mx-auto mt-4 rounded-md"
                to="/developers/plugins-and-libraries"
            >
                <div className="h-8 w-8"></div>
                plugins and libraries
            </Link>
            <Link
                className="text-msm text-center bg-qosgray shadow block h-24 w-full mx-auto mt-4 rounded-md"
                to="/developers/"
            >
                <div className="h-8 w-8"></div>
                USSD payment
            </Link>
            <Link
                className="text-msm text-center bg-qosgray shadow block h-24 w-full mx-auto mt-4 rounded-md"
                to="/developers/"
            >
                <div className="h-8 w-8"></div>
                Create Sharable link
            </Link>
        </div>
    );
}
export function MtnTestAuth({index}){
    const infos=[{
        clientID:"UBHQ",
        Requestpayment:'http://74.208.84.251:8221/QosicBridge/user/requestpayment',
        GetTransactionStatus:'http://74.208.84.251:8221/QosicBridge/user/gettransactionstatus',
        numeroTest:'+229 67222918'
    },{
        clientID:"MOOVTEST",
        Requestpayment:'http://74.208.84.251:8221/QosicBridge/user/requestpaymentmv',
        GetTransactionStatus:'http://74.208.84.251:8221/QosicBridge/user/gettransactionstatus',
        numeroTest:'+229 99914337'
    }]
    return(
        <div>
             <p className="mt-2">
                        <span className="text-qosred text-msm text-opacity-70 block mr-4">clientID:</span>
                        <SimpleCodeBoard code={infos[index].clientID} language='txt' />
                    </p>
                    <p className=" mt-2">
                        <span className="text-qosred text-msm text-opacity-70 block mr-4">Requestpayment endpoint0:</span>
                        <SimpleCodeBoard code={infos[index].Requestpayment} language='http' />
                    </p>
                    <p className="mt-2">
                        <span className="text-qosred text-msm text-opacity-70 block mr-4">GetTransactionStatus endpoint:</span>
                        <SimpleCodeBoard code={infos[index].GetTransactionStatus} language='http' />
                    </p>
                    <p className="mt-2">
                        <span className="text-qosred text-msm text-opacity-70 block mr-4">Numéro de test:</span>
                        <SimpleCodeBoard code={infos[index].numeroTest} language='txt' />
                    </p>
        </div>
    )
}