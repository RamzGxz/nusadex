"use client";

import * as React from "react";
import { SearchIcon, XIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface TokenSearchProps extends React.HTMLAttributes<HTMLDivElement> {
  onSearch?: (value: string) => void;
}

export function TokenSearch({
  className,
  onSearch,
  ...props
}: TokenSearchProps) {
  const [value, setValue] = React.useState("");

  const handleSearch = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onSearch?.(newValue);
    },
    [onSearch]
  );

  return (
    <div className={cn("relative", className)} {...props}>
      <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={value}
        onChange={handleSearch}
        className="pl-9 bg-[#1a1a1a]"
        placeholder="Search token name or address"
      />
      {value && (
        <button
          onClick={() => {
            setValue("");
            onSearch?.("");
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
        >
          <XIcon className="h-4 w-4" />
          <span className="sr-only">Clear search</span>
        </button>
      )}
    </div>
  );
}
