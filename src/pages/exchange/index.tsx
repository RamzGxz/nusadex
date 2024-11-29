import React from "react";
import { Button } from "@/components/ui/button";

export default function index() {
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
    </div>
  );
}
