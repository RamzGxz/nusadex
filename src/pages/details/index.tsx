import { CopyIcon, SettingsIcon, StarIcon, UploadIcon } from "lucide-react";
import React from "react";
// import { useEffect, useState } from "react";

export default function index() {
  return (
    <div className="w-full flex items-center justify-between py-2 border border-white">
      <div className="flex flex-1 items-center justify-between border border-white">
        <div className="flex items-center pr-4 border-white">
          <div className="flex relative border border-white">
            <div className="flex-wrap border border-white">
              <img
                src="https://pavocoin.xyz/wp-content/uploads/2024/07/Logo-1-100x100.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <div className="flex absolute  -bottom-1 -right-1 border border-white">
              <img
                src="https://logos-world.net/wp-content/uploads/2024/01/Solana-Logo.png"
                alt=""
                width={30}
                height={30}
              />
            </div>
          </div>
          <div className="flex flex-col shrink ml-5 border border-white">
            <div className=" flex items-center">
              <div className="inline-flex text-xl font-bold">PavoCoin</div>
              <div className="flex items-center gap-2 shrink-0 ml-2">
                <StarIcon width={16} height={16} />
                <UploadIcon width={16} height={16} />
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <div className="flex items-center text-sm">
                <span>GzY1Kbkg...vPMA</span>
                <CopyIcon width={16} height={16} className="ml-1" />
              </div>
            </div>
          </div>
        </div>
        <div>Price</div>
      </div>
      <div>
        <SettingsIcon />
      </div>
    </div>
  );
}
