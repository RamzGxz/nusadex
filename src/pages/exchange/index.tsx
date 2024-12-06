import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function index() {
  const [activeTab, setActiveTab] = useState("exchange");

  return (
    <div className="w-full">
      <div className="lg:flex lg:justify-around lg:py-20 md:flex md:justify-around md:py-20">
        <div className="flex flex-col gap-6 pt-16">
          <h1 className="font-bold lg:text-5xl lg:leading-snug lg:text-start md:text-4xl md:leading-snug md:text-start text-3xl text-center ">
            Trade with solana
            <br />
            cryptocurrency and
            <br />
            derivatives on
            <br /> NusaDex
          </h1>
          <p className="opacity-70 lg:text-lg text-base lg:text-start md:text-start text-center ">
            Secure and reliable platform for crypto trading.
          </p>
          <div className="items-start">
            <Link href="/swap">
              <Button
                className="border rounded-full bg-foreground/100 text-black p-7 text-lg font-medium w-full lg:w-36 md:w-36"
                variant={"nusadex"}
              >
                Trade Now
              </Button>
            </Link>
          </div>
          <div className="flex lg:justify-between md:justify-between justify-around lg:pt-12">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190788/Project/llkl6llrplkyvqkmfpb8.png"
              alt="Pavo Logo"
              className="lg:w-[100px] lg:h-[100px] w-[65px] h-[65px]"
            />
            <div className="py-4">
              <img
                src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190782/Project/ti0ywmjnxvjtdjgcjau0.png"
                alt="DBI Logo"
                className="lg:w-[100px] h-auto] w-[65px]"
              />
            </div>
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190787/Project/gyqt0uki2q9riusoe0gf.png"
              alt="Mudapedia Logo"
              className="lg:w-[100px] lg:h-[100px] w-[65px] h-[65px]"
            />
          </div>
        </div>
        <div>
          <img
            className="w-[420px] h-auto"
            src="/iPhone 14 Plus.png"
            alt="Mockup"
          />
        </div>
      </div>
      <div className="items-center flex flex-col lg:py-20">
        <div className="text-center flex flex-col lg:gap-8 md:gap-8 gap-4">
          <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl text-center">
            Trade like a pro
          </h2>
          <p className="opacity-70 text-base lg:text-lg md:text-lg">
            Get the lowest fees, fastest transactions, powerful APIs, and more
          </p>
        </div>
        <div className="lg:py-14 md:py-14 py-7">
          <img
            src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190800/Project/wnrqsyl2vfey8m7xrre0.png"
            alt="laptop"
            className="w-[750px] h-auto"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse items-center py-20">
        <div>
          <Image
            src={activeTab === "exchange" ? "/swap.png" : "/web3.png"}
            alt={
              activeTab === "exchange"
                ? "Crypto exchange swap"
                : "Web3 interface"
            }
            width={300}
            height={614}
            className="w-[300px] h-[614px] object-cover lg:ml-[204px]"
          />
        </div>
        <div className="lg:ml-[102px] lg:text-start text-center">
          <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl leading-snug">
            One Web. Unlimited <br />
            possibilities.
          </h2>
          <div className="lg:py-12 md:py-6 py-4">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="lg:w-[400px] md:w-[400px] w-[310px]"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger
                  value="exchange"
                  className="data-[state=active]:bg-[#95f121] data-[state=active]:text-[#09090b]"
                >
                  Exchange
                </TabsTrigger>
                <TabsTrigger
                  value="web3"
                  className="data-[state=active]:bg-[#95f121] data-[state=active]:text-[#09090b]"
                >
                  Web3
                </TabsTrigger>
              </TabsList>
              <TabsContent value="exchange">
                <p className="mt-4">
                  New to crypto? No problem. Buy crypto for as little as $5 in a
                  tap, and grow your skills as you go.
                </p>
              </TabsContent>
              <TabsContent value="web3">
                <p className="mt-4">
                  Explore the world of Web3. Connect your wallet and interact
                  with decentralized applications seamlessly.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="items-center flex flex-col lg:py-20 md:py-20 py-10">
        <div className="text-center flex flex-col lg:gap-8 md:gap-8 gap-4">
          <h2 className="font-bold lg:text-5xl text-3xl lg:block hidden">
            We're here to support you every step
          </h2>
          <h2 className="font-bold lg:hidden block md:text-3xl text-2xl">
            Style for everyone.
          </h2>
          <p className="lg:text-lg lg:block md:text-lg hidden">
            From your initial crypto trade to your first NFT buy, we'll be here
            to assist you every step of the way. No question is too simple,
            <br /> and no more restless nights. Trust in your crypto journey
            with confidence.
          </p>
          <p className="lg:text-lg block lg:hidden">
            Switch seamlessly between trading, DeFi, and NFTs in one platform.
          </p>
        </div>
        <div className="py-14 lg:flex justify-around items-center">
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190794/Project/wftgqezh3asmsjnjp8sb.png"
              alt="step"
              className="w-[200px] h-auto"
            />
            <p>Take a step</p>
          </div>
          <div className="text-center lg:rotate-180 rotate-90 ">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733192723/Project/xwnqc5mbts4tlhojrhqo.png"
              alt="line"
              className="w-[200px] h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190786/Project/ryh5ncfdcimsyd4dpoy0.png"
              alt="earn"
              className="w-[200px] h-auto"
            />
            <p>Earn</p>
          </div>
          <div className="text-center lg:rotate-180 rotate-90">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733192723/Project/xwnqc5mbts4tlhojrhqo.png"
              alt="line"
              className="w-[200px] h-auto"
            />
          </div>
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190797/Project/t5mvuukwy3iambp9johm.png"
              alt="complete"
              className="w-[200px] h-auto"
            />
            <p>Complete</p>
          </div>
        </div>
      </div>
      <div className="py-20">
        <div className="lg:flex">
          <div className="flex flex-col lg:gap-8 md:gap-8 gap-4 lg:text-start md:text-center text-center">
            <h2 className="font-bold lg:text-5xl md:text-3xl text-2xl">
              What is NusaDex?
            </h2>
            <p className="lg:text-lg md:text-lg text-base">
              Discover why we’re your ultimate crypto app, backed by our
              world-class partners to provide the best experience.
            </p>
            <div>
              <Link href="/">
                <Button
                  className="border rounded-full bg-foreground/100 text-black p-7 text-lg font-medium"
                  variant={"nusadex"}
                >
                  Find out
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:pt-36 md:pt-36 pt-20">
            <img src="/logo-nusadex-text.svg" alt="Logo" />
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 py-14">
          <div>
            <video
              src="https://res.cloudinary.com/doqmudewb/video/upload/v1733211253/Project/kyyz3fnskdlerfq4si8n.mp4"
              controls={true}
              loop={true}
            ></video>
            <div className="text-start p-2">
              <p className="font-medium text-xl">Reading Candlestick Charts</p>
              <p>Understand bullish, bearish and reversal patterns</p>
            </div>
          </div>
          <div className="">
            <video
              src="https://res.cloudinary.com/doqmudewb/video/upload/v1733190867/Project/n6r5vsue5je7coei23ns.mp4"
              controls={true}
              loop={true}
            ></video>
            <div className="text-start p-2">
              <p className="font-medium text-xl">Rewrite the system</p>
              <p>Welcome to Web3</p>
            </div>
          </div>
          <div className="">
            <video
              src="https://res.cloudinary.com/doqmudewb/video/upload/v1733191289/Project/dxx617jvxodpm4zfx7ov.mp4"
              controls={true}
              loop={true}
            ></video>
            <div className="text-start p-2 ">
              <p className="font-medium text-xl">Towards Consistent Profit</p>
              <p>Look for every candlestick pattern and chart</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:py-20 md:py-20 py-10">
        <div>
          <h2 className="lg:text-5xl md:text-3xl text-2xl font-bold text-center">
            Questions? We’ve got answers.
          </h2>
        </div>
        <div className="lg:py-16 md:py-16 py-10">
          <Accordion
            type="single"
            collapsible
            className="w-full lg:px-20 md:px-20"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-normal lg:text-2xl md:text-2xl text-xl py-10">
                What is NusaDex?
              </AccordionTrigger>
              <AccordionContent className="opacity-70 font-normal lg:text-xl md:text-xl text-base">
                NusaDex is a cryptocurrency platform that operates exclusively
                on the Solana network. The platform offers various services,
                including cryptocurrency trading, staking, NFTs, and other
                financial solutions. Established in 2024, NusaDex focuses on
                efficiency and fast transactions through the Solana network..
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className=" font-normal lg:text-2xl md:text-2xl text-xl py-10">
                What Is Cryptocurrency?
              </AccordionTrigger>
              <AccordionContent className="opacity-70 font-normal lg:text-xl md:text-xl text-base">
                Cryptocurrency, or digital currency, is a type of digital asset
                that uses cryptographic technology to ensure security, manage
                the creation of new units, and verify the transfer of assets.
                This currency operates on blockchain technology, a decentralized
                digital ledger that records all transactions transparently and
                immutably.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-normal lg:text-2xl md:text-2xl text-xl py-10">
                What Is NFT or Non-Fungible Tokens?
              </AccordionTrigger>
              <AccordionContent className="opacity-70 font-normal lg:text-xl md:text-xl text-base">
                NFT, or Non-Fungible Token, is a type of unique digital asset
                that uses blockchain technology to verify ownership and
                authenticity of an item. Unlike cryptocurrencies like Bitcoin or
                Ethereum, which are fungible (interchangeable with the same
                value), NFTs are non-fungible, meaning each token has a unique
                value and cannot be directly replaced by another token. NFTs are
                commonly used to represent digital assets such as artwork,
                music, videos, digital collectibles, and even in-game items.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
