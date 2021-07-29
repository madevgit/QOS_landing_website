import { useEffect, useState } from "react"
import { media } from "../../libs/media";
import Wrapper from "../../components/sectionWrapper";
import { Link, Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import CodeBoard from "../../components/codeBoard";
import { Code } from '../../libs/codeSamples'
import SimpleCodeBoard from "../../components/simpleCodeboard";
import Prism from 'prismjs'
const { wordpress, github } = media.Logos.other
const { qosLogoBlack } = media.Logos.qos

export default function DevelopersPage() {
    const [Open, setOpen] = useState(false)
    const { path } = useRouteMatch()
    const { pathname } = useLocation()
    return (
        <Wrapper className="pt-24">
            <HeaderDocs Open={Open} setOpen={setOpen} />
            <Route exact path="/docs">
                <h2>Documentation</h2>
                <div>
                    <p className="md:w-6/12 pt-4">
                        This document describes how a third party will connect to o Mobile
                        Payment interface from QOS-IC. Note that all all data formats and
                        response definitions are in conformance with the REST standard.
                    </p>
                    <img src="#none" className="hidden" alt="docsillustrtion" />
                </div>
                <div className="mt-6 max-w-max mx-auto md:mx-0 md:mt-10">
                    <Link to="/register" className="p-2 inline-block px-2.5 md:px-3 rounded-md bg-opacity-90 shadow-lg bg-qosorange text-qosgray text-opacity-70 font-medium btn-sm max-w-max mx-auto">
                        Create Account
                    </Link>
                    <Link to="/contact-us" className="rounded-full ml-1.5 md:ml-4 bg-qosdark bg-opacity-10 inline-block p-2 backdrop-blur-3xl">
                        <p className="text-qosdark text-opacity-70 inline-block md:ml-1">
                            Contact support
                        </p>
                        <span className="fi fi-rr-angle-small-right text-msm"></span>
                    </Link>
                </div>
            </Route>
            <div className="">
                <div className={`mx-auto w-full`}>
                    <Route exact path={path}>
                        <DevOverview />
                    </Route>
                    <Route path={`${path}/api`}>
                        <ApiDocs Open={Open} setOpen={setOpen} />
                    </Route>
                    <Route exact path={`${path}/plugins-and-libraries`}>
                        <PluginsAndLibraries />
                    </Route>
                </div>
            </div>
        </Wrapper>
    );
}

export function NavsTabs({ options, activeStyle, notActiveStyle, mainStyle, components }) {
    const [active, setActive] = useState(0)
    const current = options[active]
    useEffect(() => {

        Prism.highlightAll()

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
        <div className="">
            <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-11/12  rounded-lg flex">
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
            <table className="my-8 text-msm md:text-dsm border-collapse border-qosdark">
                <thead>
                    <th>Element</th>
                    <th>Type</th>
                    <th>Decription</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="">idDiv</td>
                        <td>
                            <CodeBlock value="String:Required" />
                        </td>
                        <td className=""> div id </td>
                    </tr>
                    <tr>
                        <td>clienId</td>
                        <td>
                            <CodeBlock value="String:Required" />
                        </td>
                        <td>client id</td>
                    </tr>
                    <tr>
                        <td>username</td>
                        <td className="text-qosred font-normal">
                            <CodeBlock value="String:Required" />
                        </td>
                        <td>username </td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td>
                            <CodeBlock value="String:Required" />
                        </td>
                        <td>client password </td>
                    </tr>
                    <tr>
                        <td>montant</td>
                        <td className="text-qosred font-normal">
                            <CodeBlock value="Number:Required" />
                        </td>
                        <td> amount to be send</td>
                    </tr>
                    <tr>
                        <td>option</td>
                        <td className="text-qosred font-normal">
                            <CodeBlock value="Object:Required" />
                        </td>
                        <td>
                            <SimpleCodeBoard code={`{\n    baseDirectory:'String:required', \n    pathImage:'String:optional', \n    textIntro:'string:optional', \n    business:'string:optional' \n  }`} language="jq" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <CodeBoard modes={Code.Libs.javascript} />
        </div>
    )
}
export function PhpLibrary() {
    return (
        <div>
            <div className="bg-qosgray bg-opacity-70 py-5 px-4 shadow-md mb-5 items-center w-11/12  max-w-max  rounded-lg flex">
                <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
                <a href="#link" className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"> clone the full code repositry here </a>
            </div>
            <CodeBoard modes={Code.Libs.php} />
        </div>
    )
}
export function DjangoLibrary() {
    return (
        <div>
            <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-11/12  max-w-max  rounded-lg flex">
                <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
                <a href="#link" className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"> clone the full code repositry here </a>
            </div>
            <CodeBoard modes={Code.Libs.django} />
        </div>
    )
}
export function LaravelLibrary() {
    return (
        <div>
            <div className="bg-qosgray py-5 px-4 shadow-md mb-5 items-center w-11/12 max-w-max rounded-lg flex">
                <img src={github} alt="github" className="h-8 w-8 inline-block mr-4" />
                <a href="#link" className="text-qosblue text-msm  md:text-dsm font-bold text-opacity-70 underline"> clone the full code repositry here </a>
            </div>
            <div className="border-2 p-2 text-qosdark text-opacity-70 max-w-max border-qosred border-opacity-30 rounded-lg mb-5 text-center">
                <span className="fi fi-rr-info text-qosred text-opacity-70  inline-block mr-2"></span>
                <span>You need to install <b>Guzzle first</b> </span>
            </div>
            <CodeBoard modes={Code.Libs.laravel} />
        </div>
    )
}
export function PluginsAndLibraries() {

    const { pathname } = useLocation();
    const [isOpen, setisOpen] = useState(false)
    const [stickyDocsHeader, setSticky] = useState(false)

    useEffect(() => {
        // if (pathname !== "/docs") {
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
        <div className="md:flex justify-between w-full mx-auto">
            <section className="md:w-3/12">
                <h2 className="font-medium opacity-80 mt-5">Plugins</h2>
                <a className="flex bg-qosgray w-64 md:w-65 rounded-lg shadow-md mt-4 p-2 h-16 justify-between items-center" href="https://fr.wordpress.org/plugins/qos-payment-gateway/">
                    <img src={wordpress} className="h-11 w-2/12" alt="pluginswordpress" />
                    <div className="w-10/12 pl-4">
                        <span className="font-medium inline-block ">Wordpress plugin</span>
                        <span className="text-small md:text-msm opacity-60 block">Allow you receive money form your wordpress website</span>
                    </div></a>
            </section>
            <section className="md:w-7/12 min-h-screen">
                <h2 className="font-medium opacity-80 mt-5">Libraries</h2>
                <NavsTabs options={[{ name: 'PHP', content: <PhpLibrary /> }, { name: 'JAVASCRIPT', content: <JsLibrary /> }, { name: 'DJANGO', content: <DjangoLibrary /> }, { name: 'LARAVEL', content: <LaravelLibrary /> }]} activeStyle="btn-primary scale-120 shadow-md rounded-md bg-opacity-80" mainStyle={`p-2 flex ${stickyDocsHeader && "fixed bg-qosgray z-50 top-16"} w-full left-0 justify-around mb-5 text-mmd md:text-dmd`} />
            </section>
        </div>
    );
}

export function HeaderDocs({ Open, setOpen }) {
    const { pathname } = useLocation();
    const [stickyDocsHeader, setSticky] = useState(false)
    useEffect(() => {
        if (pathname !== "/docs") {
            setSticky(true);
        } else {
            setSticky(false)
        }
        function Sticky() {
            if (window.scrollY) {
                setSticky(true);
            } else {
                if (pathname !== "/docs") {
                    setSticky(true);
                } else {
                    setSticky(false);
                }
            }
        }
        window.addEventListener("scroll", Sticky)
        return () => {
            window.removeEventListener('scroll', Sticky)
        }
    }, [pathname]);
    return (
        <header
            id="docsHeader"
            className={`${stickyDocsHeader ? "z-50 scale-y-100" : "scale-y-100"
                } w-full origin-top bg-qosgray md:bg-opacity-100 px-3 md:px-0 transform duration-500 transition-all fixed top-0 py-4 left-0`}>
            <div className="flex justify-between h-13 mx-auto">
                <Link
                    to="/docs"
                    className="block w-2/12 text-msm mr-2 max-h-full h-full"
                >
                    <img
                        src={qosLogoBlack}
                        alt="qos_logo"
                        className="block w-6 h-3 md:w-10 md:h-5 mx-auto"
                    />
                    <h4 className="text-qosorange md:text-dH4 mx-auto max-w-max block">Docs</h4>
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
                <button onClick={() => { setOpen(prev => !prev) }} id="menuToggler" className="text-mH3 md:hidden relative h-8 w-8 p-2 rounded-full focus:outline-none overflow-hidden">
                    <span className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-menu-burger ${Open ? 'scale-y-0 rotate-45' : 'scale-y-100 rotate-0'}`} ></span>
                    <span className={`fi transform transition-all duration-500 absolute mx-auto block top-1 left-1.5 fi-rr-cross ${Open ? 'rotate-0 scale-x-100' : 'scale-x-0 rotate-45'}`} ></span>
                </button>
            </div>
        </header>
    );
}

export function ApiDocs({ Open, setOpen }) {
    const { path } = useRouteMatch()
    const { pathname } = useLocation()
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
        <section className="md:flex">
            <nav className={`h-screen lg:w-80 transform md:border-r border-qosdark border-opacity-20 transition-all md:transform-none duration-500 md:duration-75 fixed md:left-0 md:right-auto px-6 bg-qosgray md:bg-opacity-0 top-0 right-0 z-20 ${Open ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`} >
                <ul className="mt-24 md:mt-32">
                    <Link to={`${path}`} className="docslinks my-2 font-medium text-opacity-70 text-qosdark" onClick={() => setOpen(prev => !prev)}>
                        Introduction
                    </Link>
                    <Link to={`${path}/test`} className="docslinks my-2 font-medium text-opacity-70 text-qosdark" onClick={() => setOpen(prev => !prev)}>
                        Test
                    </Link>
                    <Link to={`${path}/auth`} className="docslinks my-2 font-medium text-opacity-70 text-qosdark" onClick={() => setOpen(prev => !prev)}>
                        Authentication
                    </Link>
                    <Link to={`${path}/security`} className="docslinks my-2 font-medium text-opacity-70 text-qosdark" onClick={() => setOpen(prev => !prev)}>
                        Security
                    </Link>
                    <Link to={`${path}/payment`} className="docslinks my-2 font-medium text-opacity-70 text-qosdark" onClick={() => setOpen(prev => !prev)}>
                        Payment
                    </Link>
                    <Link to={`${path}/refund`} className="docslinks my-2 font-medium text-opacity-70 text-qosdark" onClick={() => setOpen(prev => !prev)}>
                        Refund
                    </Link>
                    <Link to={`${path}/transaction`} className="docslinks my-2 font-medium text-opacity-70 text-qosdark" onClick={() => setOpen(prev => !prev)}>
                        Transaction
                    </Link>
                </ul>
            </nav>
            <div className="md:w-10/12">

            </div>
            <div className="max-h-full max-w-screen-md overflow-y-auto overflow-x-hidden hideScroll">
                <Switch>
                    <Route exact path={`${path}`}>
                        <div id="Design">
                            <h2>Introduction</h2>
                            <div className="">
                                <div>
                                    <p className="">
                                        A MobilePayment© transaction provides Mobile Money capability
                                        application programming interfaces (APIs) for third-party applications
                                        (App for short) to connect to it and use its Mobile Money capability
                                        for Bill Payment, Depositing Money in Subscribers account & Querying
                                        Subscriber’s account in a third-party system. The subsequent sections
                                        show the message structure for Mobile Payment
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <div className="max-w-max">
                                        <span className="font-mono font-bold block text-mmd">API baseUrl:</span>
                                        <SimpleCodeBoard code={`http://74.208.84.251:8221/QosicBridge/user`} language="http" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Route>
                    <Route exact path={`${path}/test`}>
                        <div id="Test">
                            <h2>Test</h2>
                            <p className="">
                                Before you go to production you need to test your QOS API integration
                                without risk. So OOS give possibility to test integration safly way.
                            </p>
                            <div>
                                <h4 className="text-mdm font-normal text-opacity-80 mt-8 text-qosdark">Authentification informations</h4>
                                <div className="">
                                    <div className="md:w-6/12">
                                        <p className="flex items-center mt-2">
                                            <span className="font-medium text-qosdark text-opacity-80 inline-block mr-4">username:</span>
                                            <CodeBlock value="USR06" />
                                        </p>
                                        <p className="flex items-center mt-2">
                                            <span className="font-medium text-qosdark text-opacity-80 inline-block mr-4">password:</span>
                                            <CodeBlock value="YG739G5XFVPYYV4ADJVW" />
                                        </p>
                                    </div>
                                    <div>
                                        <NavsTabs options={[{ name: 'MTN Benin API', content: <MtnTestAuth index="0" /> }, { name: 'MOOV Africa API', content: <MtnTestAuth index="1" /> }]} activeStyle="btn-primary scale-120 bg-opacity-80" mainStyle={`p-2 flex mt-4 w-full left-0 justify-around mb-5 text-mmd md:text-dmd`} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path={`${path}/auth`}>
                        <div id="auth">
                            <h2>Authentication</h2>
                            <p className="mb-4">
                                Basic authentication is a simple authentication scheme built into the HTTP protocol. The client sends HTTP requests with the Authorization header that contains the word Basic word followed by a space and a base64-encoded string username:password. For example, to authorize as demo / p@55w0rd the client would send
                            </p>
                            <CodeBlock value="Authorization: Basic ZGVtbzpwQDU1dzByZA=="/>
                        </div>
                    </Route>
                    <Route exact path={`${path}/security`}>
                        <div id="security">
                            <p className="">
                                Requests will be sent over <CodeBlock value="HTTPS" /> only. Each request is also sent using a Basic Authentication. With Basic Authentication, clients send its Base64 encoded credentials with each request, using HTTP [Authorization] header. That means each request is independent of other request and server may/does not maintain any state information for the client.
                            </p>
                        </div>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <div id="payment">
                            <div className="">
                                <h2 className="font-medium">Payment</h2>
                                <p className="my-4">The RequestPayment is a request to debit mobile money from subscribers account.
                                    Partners must code the App based on the API field requirements so that the App can send correct requests accordingly.</p>
                                <div className="max-w-max">
                                    <span className="font-mono font-bold block text-mmd">Endpoint URI:</span>
                                    <SimpleCodeBoard code={Code.Endpoints.payment.uri} language='uri' />
                                </div>
                                <div className="justify-between items-center w-full">
                                    <div className="">
                                        <table className="docs ml-0 text-msm md:text-dsm border-collapse mt-2 mb-8">
                                            <thead>
                                                <th>Element</th>
                                                <th>Type</th>
                                                <th>Decription</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="">msisdn</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="code" />
                                                    </td>
                                                    <td className=""> transaction reference </td>
                                                </tr>
                                                <tr>
                                                    <td>amount</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="code" />
                                                    </td>
                                                    <td> id of client </td>
                                                </tr>
                                                <tr>
                                                    <td>firstname</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="code" />
                                                    </td>
                                                    <td> id of client </td>
                                                </tr>
                                                <tr>
                                                    <td>lastname</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="code" />
                                                    </td>
                                                    <td> id of client </td>
                                                </tr>
                                                <tr>
                                                    <td>transref</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="code" />
                                                    </td>
                                                    <td> id of client </td>
                                                </tr>
                                                <tr>
                                                    <td>clientid</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="code" />
                                                    </td>
                                                    <td> id of client </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="">
                                        <div className="justify-between">
                                            <div className="max-w-max flex  items-center">
                                                <span className="fi text-qosgreen md:font-normal md:text-dH3 text-dmd inline-block mt-4  fi-rr-check"></span>
                                                <div className="ml-4">
                                                    <span className="font-mono font-bold block text-mmd">Succes Code</span>
                                                    <SimpleCodeBoard code={Code.Endpoints.SuccessCode} language='http' />
                                                </div>
                                            </div>
                                            <div className="max-w-max flex  items-center">
                                                <span className="fi text-qosred md:font-normal md:text-dH3 text-dmd inline-block mt-4 fi-rr-cross"></span>
                                                <div className="ml-4">
                                                    <span className="font-mono font-bold block text-mmd">Failded Code</span>
                                                    <SimpleCodeBoard code={Code.Endpoints.FailedCode} language='http' />
                                                </div>
                                            </div>
                                        </div>
                                        <CodeBoard modes={Code.Endpoints.payment.states} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path={`${path}/refund`}>
                        <div id="refund">
                            <div className="">
                                <h2 className="mb-4 font-medium">Refund</h2>
                                <p className="mb-4">The Refund is a request to reverse mobile money back to the Subscriber’s mobile money account. Partners must code the App based on the API field requirements so that the App can send correct requests accordingly.</p>
                                <div>
                                    <span className="font-mono font-bold block text-mmd">Endpoint URI:</span>
                                    <SimpleCodeBoard code={Code.Endpoints.refund.uri} language='URI' />
                                </div>
                                <div className="justify-between items-center">
                                    <div>
                                        <h4 className="font-medium mt-4">Request data</h4>
                                        <table className="docs text-msm md:text-dsm table-fixed border-collapse mt-2 mb-8">
                                            <thead>
                                                <th>Element</th>
                                                <th>Type</th>
                                                <th>Decription</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="">transref</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="vim" />
                                                    </td>
                                                    <td className=""> transaction reference </td>
                                                </tr>
                                                <tr>
                                                    <td>clientid</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="vim" />
                                                    </td>
                                                    <td> id of client </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div className="justify-between">
                                            <div className="max-w-max flex  items-center">
                                                <span className="fi text-qosgreen md:font-normal md:text-dH3 text-dmd inline-block mt-4 fi-rr-check"></span>
                                                <div className="ml-4">
                                                    <span className="font-mono font-bold block text-mmd">Succes Code</span>
                                                    <SimpleCodeBoard code={Code.Endpoints.SuccessCode} language='http' />
                                                </div>
                                            </div>
                                            <div className="max-w-max flex items-center">
                                                <span className="fi text-qosred md:font-normal md:text-dH3 text-dmd inline-block mt-4 fi-rr-cross"></span>
                                                <div className="ml-4">
                                                    <span className="font-mono font-bold block text-mmd">Failded Code</span>
                                                    <SimpleCodeBoard code={Code.Endpoints.FailedCode} language='http' />
                                                </div>
                                            </div>
                                        </div>
                                        <CodeBoard modes={Code.Endpoints.refund.states} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                    <Route exact path={`${path}/transaction`}>
                        <div id="transaction">
                            <div className="">
                                <h2 className="mb-4 font-medium">Transaction</h2>
                                <p>A Get Transaction Status message is a request to get the details of an already processed transaction.</p>
                                <div className="mt-4">
                                    <span className="font-mono font-bold block text-mmd">Endpoint URI:</span>
                                    <SimpleCodeBoard code={Code.Endpoints.transaction.uri} language='URI' />
                                </div>
                                <div className="justify-between items-center">
                                    <div>
                                        <h4 className="font-medium mt-4">Request data</h4>
                                        <table className="docs text-msm md:text-dsm table-fixed border-collapse mt-2 mb-8">
                                            <thead>
                                                <th>Element</th>
                                                <th>Type</th>
                                                <th>Decription</th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="">transref</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="vim" />
                                                    </td>
                                                    <td className=""> transaction reference </td>
                                                </tr>
                                                <tr>
                                                    <td>clientid</td>
                                                    <td className="text-qosred font-normal">
                                                        <CodeBlock value="string:required" language="vim" />
                                                    </td>
                                                    <td> id of client </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="">
                                        <div className="md:flex justify-between">
                                            <div className="max-w-max flex  items-center">
                                                <span className="fi text-qosgreen md:font-normal md:text-dH3 text-dmd inline-block mt-4  fi-rr-check"></span>
                                                <div className="ml-4">
                                                    <span className="font-mono font-bold block text-mmd">Succes Code</span>
                                                    <SimpleCodeBoard code={Code.Endpoints.SuccessCode} language='http' />
                                                </div>
                                            </div>
                                            <div className="max-w-max flex  items-center">
                                                <span className="fi text-qosred md:font-normal md:text-dH3 text-dmd inline-block mt-4 fi-rr-cross"></span>
                                                <div className="ml-4">
                                                    <span className="font-mono font-bold block text-mmd">Failded Code</span>
                                                    <SimpleCodeBoard code={Code.Endpoints.FailedCode} language='http' />
                                                </div>
                                            </div>
                                        </div>
                                        <CodeBoard modes={Code.Endpoints.transaction.states} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Route>
                </Switch>
            </div>
        </section>
    );
}

export function CodeBlock({ value }) {
    return (
        <div className="text-msm">
            <pre className="font-mono max-w-full overflow-auto text-qosred text-opacity-80 inline-block p-0.5 bg-qosdark bg-opacity-10 rounded" >
                {value}
            </pre>
        </div>)
}

export function DevOverview() {
    return (
        <div className="py-4 grid grid-cols-2 gap-x-5 md:w-6/12">
            <Link
                className="text-msm text-center bg-qosgray bg-opacity-90 shadow block h-24 w-full mx-auto mt-4 rounded-md"
                to="/docs/api"
            >
                <div className="h-8 w-8">

                </div>
                API documention
            </Link>
            <Link
                className="text-msm text-center bg-qosgray bg-opacity-90 shadow block h-24 w-full mx-auto mt-4 rounded-md"
                to="/docs/plugins-and-libraries"
            >
                <div className="h-8 w-8"></div>
                plugins and libraries
            </Link>

        </div>
    );
}

export function MtnTestAuth({ index }) {
    const infos = [{
        clientID: "UBHQ",
        Requestpayment: 'http://74.208.84.251:8221/QosicBridge/user/requestpayment',
        GetTransactionStatus: 'http://74.208.84.251:8221/QosicBridge/user/gettransactionstatus',
        numeroTest: '+229 67222918'
    }, {
        clientID: "MOOVTEST",
        Requestpayment: 'http://74.208.84.251:8221/QosicBridge/user/requestpaymentmv',
        GetTransactionStatus: 'http://74.208.84.251:8221/QosicBridge/user/gettransactionstatus',
        numeroTest: '+229 99914337'
    }]
    return (
        <div>
            <p className="mt-2 flex items-center">
                <span className="font-medium text-qosdark text-opacity-80 mr-4">clientID:</span>
                <CodeBlock value={infos[index].clientID} />
            </p>
            <p className=" mt-2">
                <span className="font-medium text-qosdark text-opacity-80 block mr-4">Requestpayment endpoint0:</span>
                <SimpleCodeBoard code={infos[index].Requestpayment} language='http' />
            </p>
            <p className="mt-2">
                <span className="font-medium text-qosdark text-opacity-80 block mr-4">GetTransactionStatus endpoint:</span>
                <SimpleCodeBoard code={infos[index].GetTransactionStatus} language='http' />
            </p>
            <p className="mt-2 flex items-center">
                <span className="font-medium text-qosdark text-opacity-80 block mr-4">Numéro de test:</span>
                <CodeBlock value={infos[index].numeroTest} />
            </p>
        </div>
    )
}