import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const FooterMobile = () => {
  return (
    <div className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm xl:px-0 lg:px-3 px-6 mx-auto">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>More about NusaDex</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                About Us
              </Link>
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                Careers
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>More about NusaDex</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                About Us
              </Link>
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                Careers
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>More about NusaDex</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                About Us
              </Link>
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                Careers
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>More about NusaDex</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                About Us
              </Link>
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                Careers
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>More about NusaDex</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                About Us
              </Link>
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                Careers
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger>More about NusaDex</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-3">
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                About Us
              </Link>
              <Link
                className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                href={""}
              >
                Careers
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FooterMobile;
