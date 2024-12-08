"use client";

import {
  ArrowDownUp,
  ChevronUp,
  ChevronDown,
  ExternalLink,
  ArrowUpDown,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Transaction {
  time: string;
  type: "Buy" | "Sell";
  amount: {
    value: number;
    currency: string;
  };
  price: number;
  value: number;
  address: string;
}

type SortDirection = "asc" | "desc" | null;

const transactions: Transaction[] = [
  {
    time: "35s",
    type: "Sell",
    amount: {
      value: -0.529666,
      currency: "CHILLGUY",
    },
    price: 0.45525,
    value: 0.24113,
    address: "4GXGV2...US9f",
  },
  {
    time: "30s",
    type: "Buy",
    amount: {
      value: 105.1178,
      currency: "CHILLGUY",
    },
    price: 0.45716,
    value: 48.05,
    address: "3ATiCn...yjYb",
  },
];

export default function TransactionTable() {
  const [timeSort, setTimeSort] = useState<SortDirection>("asc");

  // const [timeSort, setTimeSort] = useState<"asc" | "desc" | null>(null);

  const handleSortClick = (direction: "asc" | "desc") => {
    setTimeSort((current) => (current === direction ? null : direction));
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (timeSort === "asc") {
      return a.time.localeCompare(b.time);
    } else if (timeSort === "desc") {
      return b.time.localeCompare(a.time);
    }
    return 0;
  });

  return (
    <div className="rounded-lg bg-background">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="flex w-[100px] items-center cursor-pointer">
              Time
              <div className="flex flex-col ml-1 -space-y-1">
                <ChevronUp
                  className={`h-3 w-3 ${
                    timeSort === "asc" ? "text-[#95F121]" : ""
                  }`}
                  onClick={() => handleSortClick("asc")}
                  strokeWidth={timeSort === "asc" ? 3 : 2}
                />
                <ChevronDown
                  className={`h-3 w-3 ${
                    timeSort === "desc" ? "text-[#95F121]" : ""
                  }`}
                  onClick={() => handleSortClick("desc")}
                  strokeWidth={timeSort === "desc" ? 3 : 2}
                />
              </div>
            </TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>
              Value
              <ArrowUpDown
                className="ml-1 h-4 w-4 inline-block"
                strokeWidth={2}
              />
            </TableHead>
            <TableHead>
              Address
              <ArrowUpDown
                className="ml-1 h-4 w-4 inline-block"
                strokeWidth={2}
              />
            </TableHead>
            <TableHead className="text-right">Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTransactions.map((transaction, index) => (
            <TableRow key={index} className="hover:bg-muted/50">
              <TableCell className="font-medium">{transaction.time}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    transaction.type === "Buy"
                      ? "text-green-500 border-green-500"
                      : "text-red-500 border-red-500"
                  }
                >
                  {transaction.type}
                </Badge>
              </TableCell>
              <TableCell>
                <div
                  className={
                    transaction.type === "Buy"
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {transaction.amount.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {transaction.amount.currency}
                </div>
              </TableCell>
              <TableCell>${transaction.price}</TableCell>
              <TableCell>${transaction.value}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {transaction.address}
                  <Badge variant="outline" className="h-4">
                    <ArrowDownUp className="h-3 w-3" />
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <ExternalLink className="h-4 w-4 inline-block" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
