"use client";

import { useState, useCallback, ChangeEvent, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "./vectors/SearchIcon";

export default function SearchInput() {
  const router = useRouter();
  const [value, setValue] = useState("");

  const updateSearchParams = useCallback(
    (value: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if (value) searchParams.set("query", value);
      else searchParams.delete("query");

      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;
      router.push(newPathname);
    },
    [router]
  );

  const debouncedUpdateSearchParams = useRef(
    debounce((value: string) => updateSearchParams(value), 300)
  ).current;

  useEffect(() => {
    return () => {
      debouncedUpdateSearchParams.cancel();
    };
  }, [debouncedUpdateSearchParams]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      debouncedUpdateSearchParams(newValue);
    },
    [debouncedUpdateSearchParams]
  );

  return (
    <div className="relative mb-10">
      <input
        className="md:w-[423px] max-md:w-full py-2.5 pl-10 pr-4 border border-gray rounded-[10px] outline-none"
        type="search"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
      <span className="absolute left-4 top-1/2 -translate-y-1/2">
        <SearchIcon />
      </span>
    </div>
  );
}

// Debounce helper function
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;

  const executedFunction = function (...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  executedFunction.cancel = function () {
    clearTimeout(timeout);
  };

  return executedFunction;
}
