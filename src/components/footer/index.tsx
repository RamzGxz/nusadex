import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  DribbbleIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import FooterMobile from "./footerMobile";

const Footer = () => {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xl:px-0 lg:px-3 px-6 mx-auto">
      <div className="space-y-20">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <div>
            <Image
              src="/logo-nusadex-text.svg"
              alt="log"
              width={150}
              height={300}
            />
          </div>
          <p className="opacity-70">©2017 - 2024 NUSADEX.COM</p>
        </div>

        {/* Content */}
        <div className="space-y-5">
          {/* Content Link */}
          <div className="w-full hidden items-start gap-3 justify-start lg:flex">
            <div className="w-full flex flex-col items-start gap-4">
              <h1 className="text-lg font-medium">More about NusaDex</h1>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                About Us
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Careers
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Contact Us
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Terms Of Service
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Privacy Notice
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Disclosures
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Whistleblower Notice
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Law Enforcement
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                NusaDex App
              </Link>
            </div>
            <div className="w-full flex flex-col items-start gap-4">
              <h1 className="text-lg font-medium">Products</h1>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Buy Crypto
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                P2P Trading
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Convert
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Trade
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Earn
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                OKTC
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                OKX Wallet
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Web3 Marketplace
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Crypto Calculator
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Trading Bots
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                All Cryptocurrencies
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Learn
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                TradingView
              </Link>
            </div>
            <div className="w-full flex flex-col items-start gap-4">
              <div className="w-full flex flex-col items-start gap-4">
                <h1 className="text-lg font-medium">Services</h1>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Affilliate
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  V5 API
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Historical market data
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Fee schedule
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Listing application
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  P2P Merchant application
                </Link>
              </div>
              <div className="w-full flex flex-col items-start gap-4">
                <h1 className="text-lg font-medium">Support</h1>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Support center
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Channel verification
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Annoncements
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Connect with NusaDex
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-4">
              <div className="w-full flex flex-col items-start gap-4">
                <h1 className="text-lg font-medium">Buy Crypto</h1>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy USDC
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy USDT
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy Bitcoin
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy Ethereum
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy ADA
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy Solana
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy MATIC
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy Litecoin
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  Buy XRP
                </Link>
              </div>
              <div className="w-full flex flex-col items-start gap-4">
                <h1 className="text-lg font-medium">Crypto calculator</h1>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  BTC to USD
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  ETH to USD
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  USDT to USD
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  SOL to USD
                </Link>
                <Link
                  className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                  href={""}
                >
                  XRP to USD
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-4">
              <h1 className="text-lg font-medium">Trade</h1>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                BTC USDC
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                ETH USDC
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                BTC USDT
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                ETH USDT
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                MATIC USDT
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                LTC USDT
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                SOL USDT
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                XRP USDT
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Bitcoin price
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Ethereum price
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Cardano price
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                Solana price
              </Link>
              <Link
                className="text-sm opacity-50 hover:opacity-100 transition-opacity"
                href={""}
              >
                XRP price
              </Link>
            </div>
          </div>

          {/* Footer Mobile */}
          <div className="lg:hidden block">
            <FooterMobile />
          </div>

          {/* Content Media Social */}
          <div className="w-full flex gap-5 items-center">
            <h1 className="font-bold">Community</h1>
            <div className="flex gap-3">
              <Link
                href={""}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <TwitterIcon size={24} />
              </Link>
              <Link
                href={""}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <FacebookIcon size={24} />
              </Link>
              <Link
                href={""}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <InstagramIcon size={24} />
              </Link>
              <Link
                href={""}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <DribbbleIcon size={24} />
              </Link>
              <Link
                href={""}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <LinkedinIcon size={24} />
              </Link>
              <Link
                href={""}
                className="opacity-50 hover:opacity-100 transition-opacity"
              >
                <YoutubeIcon size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
