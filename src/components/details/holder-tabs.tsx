"use client";
import { ExternalLink, Copy } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "../ui/button";
import { Progress } from "../ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const holders = [
  {
    rank: 1,
    address: "u6PJ8D...Xq2w",
    holdingPercentage: 25.5,
    amount: "53.04M",
    amountUsd: "$21.89M",
    change24hPositive: "+419.71K",
    change24hNegative: "-710.11K",
  },
  {
    rank: 2,
    address: "x9KL2M...Zt7y",
    holdingPercentage: 50.5,
    amount: "48.12M",
    amountUsd: "$19.87M",
    change24hPositive: "+320.55K",
    change24hNegative: "-510.23K",
  },
];

export default function HolderTabs() {
  return (
    <div className="rounded-lg bg-background">
      <Table>
        <TableHeader>
          <TableRow className="border-neutral-800 hover:bg-neutral-900">
            <TableHead className="text-neutral-400">Rank</TableHead>
            <TableHead className="text-neutral-400">Address</TableHead>
            <TableHead className="text-neutral-400">Holding%</TableHead>
            <TableHead className="text-neutral-400">Amount</TableHead>
            <TableHead className="text-neutral-400">24h change</TableHead>
            <TableHead className="text-neutral-400">Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {holders.map((holder) => (
            <TableRow
              key={holder.rank}
              className="border-neutral-800 hover:bg-neutral-900"
            >
              <TableCell className="text-neutral-400">{holder.rank}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-200">{holder.address}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 text-neutral-400 hover:text-neutral-200"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-200">
                    {holder.holdingPercentage}%
                  </span>
                  <Progress
                    value={holder.holdingPercentage}
                    className="h-1 w-24 bg-neutral-800"
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="text-neutral-200">{holder.amount}</div>
                <div className="text-sm text-neutral-400">
                  {holder.amountUsd}
                </div>
              </TableCell>
              <TableCell>
                <div className="text-[#03a66d]">{holder.change24hPositive}</div>
                <div className="text-[#f23645]">{holder.change24hNegative}</div>
              </TableCell>
              <TableCell>
                <TooltipProvider>
                  <div className="flex items-center gap-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-neutral-400 hover:text-neutral-200"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Copy Address</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-neutral-400 hover:text-neutral-200"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>View Details</TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
