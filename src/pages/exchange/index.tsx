import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
      <div className="flex justify-around py-20">
        <div className=" flex flex-col gap-6 pt-16">
          <h1 className="font-bold text-5xl leading-snug">
            Trading With Currency
            <br />
            Solana Cryptocurrency <br />
            And Derivatives
            <br />
            On NusaDex
          </h1>
          <p className="opacity-70 text-lg">
            Safe and efficient cryptocurrency exchange
          </p>
          <div className="items-start">
            <Button
              className="border rounded-full bg-foreground/100 text-black p-7 text-lg font-medium"
              variant={"nusadex"}
            >
              Trade Now
            </Button>
          </div>
          <div className="flex justify-between pt-12">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190788/Project/llkl6llrplkyvqkmfpb8.png"
              alt="Pavo Logo"
              className="w-[100px] h-[100px]"
            />
            <div className=" py-4  ">
              <img
                src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190782/Project/ti0ywmjnxvjtdjgcjau0.png"
                alt="DBI Logo"
                className="w-[100px] h-auto]"
              />
            </div>
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190787/Project/gyqt0uki2q9riusoe0gf.png"
              alt="Mudapedia Logo"
              className="w-[100px] h-[100px]"
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
      <div className="items-center flex flex-col py-20">
        <div className="text-center flex flex-col gap-8">
          <h2 className="font-bold text-5xl">Trade like a pro</h2>
          <p className="opacity-70 text-lg">
            Get the lowest fees, fastest transactions, powerful APIs, and more
          </p>
        </div>
        <div className="py-14">
          <img
            src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190800/Project/wnrqsyl2vfey8m7xrre0.png"
            alt="laptop"
            className="w-[750px] h-auto"
          />
        </div>
      </div>
      <div className="flex items-center py-20">
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
            className="w-[300px] h-[614px] object-cover ml-[204px]"
          />
        </div>
        <div className=" ml-[102px]">
          <h2 className="font-bold text-5xl leading-snug">
            One Web. Unlimited <br /> possibilities.
          </h2>
          <div className="py-12">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-[400px]"
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
      <div className="items-center flex flex-col py-20">
        <div className="text-center flex flex-col gap-8">
          <h2 className="font-bold text-5xl">With you every step of the way</h2>
          <p className=" text-lg">
            From your first crypto trade to your first NFT purchase, you’ll have
            us to guide you through the process. No stupid questions.
            <br />
            No sleepless nights. Have confidence in your crypto.
          </p>
        </div>
        <div className="py-14 flex justify-around">
          <div className="text-center">
            <img
              src="https://res.cloudinary.com/doqmudewb/image/upload/v1733190794/Project/wftgqezh3asmsjnjp8sb.png"
              alt="step"
              className="w-[200px] h-auto"
            />
            <p>Take a step</p>
          </div>
          <div className="text-center">
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
          <div className="text-center">
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
        <div className="flex">
          <div className="flex flex-col gap-8">
            <h2 className="font-bold text-5xl">What is NusaDex?</h2>
            <p className="text-lg">
              Find out why we’re your new favorite crypto app with some help
              from our world-class partners
            </p>
            <div>
              <Button
                className="border rounded-full bg-foreground/100 text-black p-7 text-lg font-medium"
                variant={"nusadex"}
              >
                Trade Now
              </Button>
            </div>
          </div>
          <div className="pt-36">
            <img src="/logo-nusadex-text.svg" alt="Logo" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-14">
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
      <div className="flex flex-col py-20">
        <div>
          <h2 className="text-5xl font-bold text-center">
            Questions? We’ve got answers.
          </h2>
        </div>
        <div className="py-16">
          <Accordion type="single" collapsible className="w-full px-20">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-normal text-2xl py-10">
                What is NusaDex?
              </AccordionTrigger>
              <AccordionContent className="opacity-70 font-normal text-lg">
                NusaDex is a cryptocurrency platform that operates exclusively
                on the Solana network. The platform offers various services,
                including cryptocurrency trading, staking, NFTs, and other
                financial solutions. Established in 2024, NusaDex focuses on
                efficiency and fast transactions through the Solana network..
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="font-normal text-2xl py-10">
                What Is Cryptocurrency?
              </AccordionTrigger>
              <AccordionContent className="opacity-70 font-normal text-lg">
                Cryptocurrency, or digital currency, is a type of digital asset
                that uses cryptographic technology to ensure security, manage
                the creation of new units, and verify the transfer of assets.
                This currency operates on blockchain technology, a decentralized
                digital ledger that records all transactions transparently and
                immutably.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="font-normal text-2xl py-10">
                What Is NFT or Non-Fungible Tokens?
              </AccordionTrigger>
              <AccordionContent className="opacity-70 font-normal text-lg">
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
