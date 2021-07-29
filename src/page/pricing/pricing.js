import { useState } from "react";
import { media } from "../../libs/media";
import { Link } from "react-router-dom";
import Wrapper from "../../components/sectionWrapper";
import Messages from "./translations/index.json";
import { useLangContext } from "../../components/translateContext";
import buttonText from "../../translations/button.json";

const { moov, mtn } = media.Logos.other;
const { check } = media.Icons[2];

export default function PricingPage() {
  const [isAboutAPI, setIsAboutAPI] = useState(false);
  const { Lang } = useLangContext();
  const Infos = Messages[Lang];
  const btnMsg = buttonText[Lang];
  return (
    <Wrapper
      className="mt-24"
      style={{
        background: "url('./pictures/authpageBackground.png')",
        backgroundSize: "100% 0.4%",
      }}
    >
      <h2 class="text-qosdark text-opacity-80 mt-4"> {Infos.Title} </h2>
      <h4 class="mt-4 text-qosdark text-opacity-80 font-normal md:mt-8">
        {" "}
        {Infos.description}{" "}
      </h4>
      <div className="mt-10 md:flex flex-wrap justify-between lg:w-11/12 mx-auto">
        <div class="pricingCard h-96 mx-auto lg:mx-0 lg:max-w-sm max-w-xs p-4 border border-opacity-75 border-qosgray">
          <h1 className="text-center md:text-dH2 my-4">USSD</h1>
          <h1 class="text-center bg-gradient-to-bl lg:text-dH2 from-qosorange to-qosblue bg-clip-text text-transparent mx-auto">
            1,7%
          </h1>
          <p className="w-11/12 mx-auto text-center">
            {Infos.pricingCard.fees}
          </p>
          <div class="flex justify-between items-center mt-4">
            <img
              class="inline-block h-8 w-8"
              name="checked"
              src={check}
              alt="pricingOption"
            />
            <p class="w-10/12 inline-block"> {Infos.pricingCard.point}</p>
          </div>
          <div class="flex justify-between items-center mt-8">
            <img
              class="inline-block h-8 w-8"
              name="checked"
              src={check}
              alt="pricingOption"
            />
            <p class="w-10/12 inline-block"> {Infos.pricingCard.USSD.point}</p>
          </div>
        </div>
        <div class="pricingCard mt-8 md:mt-0 h-96 mx-auto lg:mx-0 lg:max-w-sm max-w-xs p-4 border border-opacity-75 border-qosgray">
          <h1 className="text-center md:text-dH2 my-4">API</h1>
          <h1 class="text-center bg-gradient-to-bl lg:text-dH2 from-qosorange to-qosblue bg-clip-text text-transparent mx-auto">
            1,7%
          </h1>
          <p className="w-11/12 mx-auto text-center">
            {" "}
            {Infos.pricingCard.fees}{" "}
          </p>
          <div class="flex justify-between items-center mt-4">
            <img
              class="inline-block h-8 w-8"
              name="checked"
              src={check}
              alt="pricingOption"
            />
            <p class="w-10/12 inline-block">{Infos.pricingCard.point}</p>
          </div>
          <div class="flex justify-between items-center mt-8">
            <img
              class="inline-block h-8 w-8"
              name="checked"
              src={check}
              alt="pricingOption"
            />
            <p class="w-10/12 inline-block">{Infos.pricingCard.API.point}</p>
          </div>
        </div>
      </div>
      <h2 className="my-10"> {Infos["details"].Title} </h2>
      <div className="flex w-full md:hidden mx-auto max-w-lg mt-8">
        <button
          onClick={() => setIsAboutAPI(false)}
          className={`btn focus:outline-none transition-all duration-500 ease btn-sm shadow-none rounded-none rounded-t-lg font-bold text-qosblue ${
            isAboutAPI ? "" : "bg-qosgray"
          } `}
        >
          USSD Service
        </button>
        <button
          onClick={() => setIsAboutAPI(true)}
          className={`btn focus:outline-none transition-all duration-500 ease btn-sm shadow-none rounded-none rounded-t-lg font-bold text-qosblue ${
            !isAboutAPI ? "" : "bg-qosgray"
          } `}
        >
          API service
        </button>
      </div>
      <section className="relative overflow-hidden md:overflow-visible justify-between mx-auto max-w-lg md:max-w-screen-lg flex">
        <div
          className={`min-w-full md:w-6/12 mr-8 md:min-w-min pricingCard rounded-r-lg rounded-b-lg md:rounded-lg grid grid-flow-row gap-y-4 transform bg-opacity-70 ${
            isAboutAPI
              ? "translate-x-full md:translate-x-0 md:scale-x-100 scale-x-0"
              : "translate-x-0 scale-x-100"
          } origin-left duration-500 ease bg-qosgray p-4 mb-4`}
        >
          <h3 className="text-center my-4 hidden md:block">
            {Infos["details"].USSD.Title}
          </h3>
          {Infos["details"].USSD.Lists.map((item) => (
            <DetailsItem description={item} />
          ))}
          <div className="w-full">
            <p className="inline-block">{Infos["details"].USSD.shortText}</p>
            <img
              src={moov}
              className="rounded-sm bg-qosdark h-9 inline-block ml-4"
              alt="mootPartners"
            />
            <img
              src={mtn}
              alt="mootPartners"
              className="inline-block ml-4 w-16"
            />
          </div>
        </div>
        <div
          className={`min-w-full md:w-6/12 ml-8 pricingCard md:min-w-min rounded-r-lg rounded-b-lg md:rounded-lg bg-qosgray bg-opacity-70 transform  ${
            isAboutAPI
              ? "-translate-x-full md:translate-x-0 scale-x-100 rounded-lg"
              : "translate-x-0 md:scale-x-100 scale-x-0"
          } origin-left duration-500 ease  p-4 mb-4`}
        >
          <div className="grid grid-flow-row gap-y-4">
            <h3 className="text-center my-4 hidden md:block">
              {Infos["details"].API.Title}
            </h3>
            {Infos["details"].API.Lists.map((item) => (
              <DetailsItem description={item} />
            ))}
            <div className="w-full">
              <p className="inline-block"> {Infos["details"].API.shortText} </p>
              <img
                src={moov}
                class="bg-qosdark rounded-sm h-9 inline-block ml-4"
                alt="mootPartners"
              />
              <img
                src={mtn}
                alt="mootPartners"
                className="inline-block ml-4 w-16"
              />
            </div>
          </div>
        </div>
      </section>
      <Link
        to="/contact-us"
        className={`p-2 block rounded-full px-3 shadow-lg font-medium btn-sm max-w-max mx-auto text-mmd md:text-dlg my-8 text-qosgray text-opacity-90 m-2 bg-qosorange`}
      >
        {btnMsg.contactus}
      </Link>
    </Wrapper>
  );
}

export function DetailsItem({ description }) {
  return (
    <div className="flex items-center">
      <span className="fi fi-rr-magic-wand text-dH3 text-transparent bg-gradient-to-bl from-qosorange to-qosblue bg-clip-text"></span>
      <p className="ml-4"> {description} </p>
    </div>
  );
}
