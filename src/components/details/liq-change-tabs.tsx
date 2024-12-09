"use client";

import { useState, useMemo } from "react";
import {
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Filter,
  Check,
  Copy,
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";

interface Transaction {
  time: string;
  type: "Add" | "Remove";
  amount: {
    value: number;
    currency: string;
  };
  price: number;
  value: number;
  address: string;
}

type SortDirection = "asc" | "desc" | null;
type FilterType = "all" | "add" | "remove";

const transactions: Transaction[] = [
  {
    time: "30s",
    type: "Add",
    amount: {
      value: -0.529666,
      currency: "PavoCoin",
    },
    price: 0.45525,
    value: 0.24113,
    address: "4GXGV2...US9f",
  },
  {
    time: "50s",
    type: "Remove",
    amount: {
      value: 105.1178,
      currency: "PavoCoin",
    },
    price: 0.45716,
    value: 48.05,
    address: "3ATiCn...yjYb",
  },
];

export default function LiquidityChangeTabs() {
  const [timeSort, setTimeSort] = useState<SortDirection>("asc");
  const [typeFilter, setTypeFilter] = useState<FilterType>("all");
  const [valueSort, setValueSort] = useState<SortDirection>("asc");

  const handleSortClick = () => {
    setTimeSort((current) => {
      if (current === null || current === "desc") return "asc";
      return "desc";
    });
  };

  const handleValueSortClick = () => {
    setValueSort((current) => {
      if (current === null || current === "desc") return "asc";
      return "desc";
    });
    setTimeSort(null);
  };

  const filteredAndSortedTransactions = useMemo(() => {
    return [...transactions]
      .filter(
        (transaction) =>
          typeFilter === "all" || transaction.type.toLowerCase() === typeFilter
      )
      .sort((a, b) => {
        if (timeSort === "asc") {
          return a.time.localeCompare(b.time);
        } else if (timeSort === "desc") {
          return b.time.localeCompare(a.time);
        }
        if (valueSort === "asc") {
          return a.value - b.value;
        } else if (valueSort === "desc") {
          return b.value - a.value;
        }
        return 0;
      });
  }, [timeSort, valueSort, typeFilter]);

  return (
    <div className="rounded-lg bg-background">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center cursor-pointer">
                    Type <Filter className="w-3 h-3 ml-1" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={() => setTypeFilter("all")}>
                    All{" "}
                    {typeFilter === "all" && <Check className="w-4 h-4 ml-2" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTypeFilter("add")}>
                    Buy{" "}
                    {typeFilter === "add" && <Check className="w-4 h-4 ml-2" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTypeFilter("remove")}>
                    Sell{" "}
                    {typeFilter === "remove" && (
                      <Check className="w-4 h-4 ml-2" />
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableHead>
            <TableHead
              className="flex w-[100px] items-center cursor-pointer select-none text-neutral-100"
              onClick={() => {
                handleSortClick();
                setValueSort(null);
              }}
            >
              Time
              <div className="flex flex-col ml-1 -space-y-1">
                <ChevronUp
                  className={`h-3 w-3 ${
                    timeSort === "asc" ? "text-[#95F121]" : ""
                  }`}
                  strokeWidth={timeSort === "asc" ? 3 : 2}
                />
                <ChevronDown
                  className={`h-3 w-3 ${
                    timeSort === "desc" ? "text-[#95F121]" : ""
                  }`}
                  strokeWidth={timeSort === "desc" ? 3 : 2}
                />
              </div>
            </TableHead>
            <TableHead className="text-neutral-100">Amount</TableHead>
            <TableHead
              className="flex items-center cursor-pointer select-none text-neutral-100"
              onClick={handleValueSortClick}
            >
              Value
              <div className="flex flex-col ml-1 -space-y-1">
                <ChevronUp
                  className={`h-3 w-3 ${
                    valueSort === "asc" ? "text-[#95F121]" : ""
                  }`}
                  strokeWidth={valueSort === "asc" ? 3 : 2}
                />
                <ChevronDown
                  className={`h-3 w-3 ${
                    valueSort === "desc" ? "text-[#95F121]" : ""
                  }`}
                  strokeWidth={valueSort === "desc" ? 3 : 2}
                />
              </div>
            </TableHead>
            <TableHead className="text-neutral-100">Address</TableHead>
            <TableHead className="text-right text-neutral-100">Info</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredAndSortedTransactions.map((transaction, index) => (
            <TableRow key={index} className="hover:bg-muted/50">
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    transaction.type === "Add"
                      ? "text-[#03a66d] border-[#03a66d]"
                      : "text-[#f23645] border-[#f23645]"
                  }
                >
                  {transaction.type}
                </Badge>
              </TableCell>
              <TableCell className="font-medium">{transaction.time}</TableCell>
              <TableCell>
                <div
                  className={
                    transaction.type === "Add"
                      ? "text-[#03a66d]"
                      : "text-[#f23645]"
                  }
                >
                  {transaction.amount.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {transaction.amount.currency}
                </div>
              </TableCell>
              <TableCell>${transaction.value.toFixed(5)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-200">
                    {transaction.address}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-4 w-4 text-neutral-400 hover:text-neutral-200"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <TooltipProvider>
                  <div className="flex items-center gap-2">
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
