import Wrapper from "../../components/sectionWrapper";
import { Link, useParams } from "react-router-dom";
import { Article } from "../blog";
import { useEffect } from "react";
const posts = [
  {
    Title: "Hello The world of Finance digital",
    content: `
        <h3>hello this part is for explain</h3>
        Craft Commerce is a powerful and fully customisable ecommerce platform that lots of high growth businesses love. We're excited to add this integration to our suite of commerce platforms, and we look forward to seeing Craft CMS become a standard part of the toolkit of African developers and agencies.
        <br/> <br/>
        Craft Commerce is a powerful and fully customisable ecommerce platform that lots of high growth businesses love. We're excited to add this integration to our suite of commerce platforms, and we look forward to seeing Craft CMS become a standard part of the toolkit of African developers and agencies.
        Craft Commerce is a powerful and fully customisable ecommerce platform that lots of high growth businesses love. We're excited to add this integration to our suite of commerce platforms, and we look forward to seeing Craft CMS become a standard part of the toolkit of African developers and agencies.
        <br/> <br/>
        Craft Commerce is a powerful and fully customisable ecommerce platform that lots of high growth businesses love. We're excited to add this integration to our suite of commerce platforms, and we look forward to seeing Craft CMS become a standard part of the toolkit of African developers and agencies.
        Craft Commerce is a powerful and fully customisable ecommerce platform that lots of high growth businesses love. We're excited to add this integration to our suite of commerce platforms, and we look forward to seeing Craft CMS become a standard part of the toolkit of African developers and agencies.
        Craft Commerce is a powerful and fully customisable ecommerce platform that lots of high growth businesses love. We're excited to add this integration to our suite of commerce platforms, and we look forward to seeing Craft CMS become a standard part of the toolkit of African developers and agencies.
        <br/> <br/>
        Craft Commerce is a powerful and fully customisable ecommerce platform that lots of high growth businesses love. We're excited to add this integration to our suite of commerce platforms, and we look forward to seeing Craft CMS become a standard part of the toolkit of African developers and agencies.`,
    author: {
      name: "David Mensah",
      poste: "Product Designer",
    },
  },
];
export default function Post() {
  useEffect(() => {
    document.querySelector("#message").innerHTML = posts[0].content;
  }, []);
  return (
    <>
      <Wrapper className="pt-24">
        <div className="flex justify-between items-center mb-5 w-8/12 md:w-4/12 mt-10">
          <p className="text-msm text-qosdark text-opacity-80 font-semibold">
            Company News
          </p>
          <p className="text-msm"> Mars 24, 2022</p>
        </div>
        <h2 className="text-dH2">{posts[0].Title}</h2>
        <img
          src="/pictures/ac2.jpg"
          alt="sule"
          className="block my-8 rounded-md max-h-96 md:w-11/12"
        />
        <div className="md:flex items-start my-8 justify-between">
          <div className="flex items-center">
            <img
              src="/pictures/ac1.jpg"
              alt="profile"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full mr-4"
            />
            <div className="">
              <p className="font-bold text-opacity-80 text-qosdark text-mmd">
                {" "}
                {posts[0].author.name}{" "}
              </p>
              <p className="text-msm"> {posts[0].author.poste} </p>
            </div>
          </div>
          <div id="message" className="md:w-8/12"></div>
        </div>
      </Wrapper>
      <Wrapper className="bg-qosgray bg-opacity-60 mt-8 p-4 clear-both">
        <h4 className="text-center">Read this next</h4>
        <div className="max-w-screen-md sm:grid-cols-2 grid gap-x-8 mx-auto">
          <Article className="mx-auto" />
          <Article className="mx-auto" />
        </div>
        <div className="py-8 font-bold my-8 md:my-14 lg:flex items-center">
          <p className="uppercase font-bold text-opacity-80">
            Start Accept mobile money payment on easly way using OOS solutions
          </p>
          <Link
            to="/register"
            className={`p-2 rounded-full px-3 block shadow-lg font-medium btn-sm max-w-max mx-auto text-qosgray text-opacity-90 m-2 bg-qosorange`}
          >
            Create Account
          </Link>
        </div>
      </Wrapper>
    </>
  );
}
