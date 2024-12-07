"use client";

import { ArrowDownUp, ArrowUpDown, ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

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

const transactions: Transaction[] = [
  {
    time: "30s",
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
  return (
    <div className="rounded-lg border bg-background">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-[100px]">
              Time
              <ArrowUpDown className="ml-1 h-4 w-4 inline-block" />
            </TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>
              Value
              <ArrowUpDown className="ml-1 h-4 w-4 inline-block" />
            </TableHead>
            <TableHead>
              Address
              <ArrowUpDown className="ml-1 h-4 w-4 inline-block" />
            </TableHead>
            <TableHead className="text-right">Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
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
