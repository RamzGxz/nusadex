import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
            <Button className="border rounded-full bg-foreground/100 text-black p-7 text-lg font-medium">
              Trade Now
            </Button>
          </div>
          <div className="flex justify-between pt-12">
            <img
              src="Logo-pvo.png"
              alt="Pavo Logo"
              className="w-[100px] h-[100px]"
            />
            <div className=" py-4  ">
              <img
                src="DBI-Logo.png"
                alt="DBI Logo"
                className="w-[100px] h-auto]"
              />
            </div>
            <img
              src="mudapedia.png"
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
          <h2 className="font-bold text-4xl">Trade like a pro</h2>
          <p className="opacity-70 text-lg">
            Get the lowest fees, fastest transactions, powerful APIs, and more
          </p>
        </div>
        <div className="py-14">
          <img src="/laptop.png" alt="laptop" className="w-[750px] h-auto" />
        </div>
      </div>
      <div className="flex items-center py-20">
        <div>
          <Image
            src={activeTab === "exchange" ? "/Device 14PM.png" : "/web3.png"}
            alt={
              activeTab === "exchange"
                ? "Crypto exchange interface"
                : "Web3 interface"
            }
            width={300}
            height={614}
            className="w-[300px] h-[614px] object-cover ml-[204px]"
          />
        </div>
        <div className=" ml-[102px]">
          <h2 className="font-bold text-4xl">
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
      <div className="border border-white py-20"></div>
    </div>
  );
}
