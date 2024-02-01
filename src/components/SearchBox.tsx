import { cn } from "@/utils/cn";
import React from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  className?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function SearchBox(props: Props) {
  return (
    <form className={cn(" flex relative justify-center h-10 ")} onSubmit={props.onSubmit}>
      <input
        className={cn("px-4 py-2 w-[230px] border border-gray-500 rounded-full focus:outline-none  focus:border-yellow-400 h-full")}
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search locations..."
      />
      <button className="absolute right-0 top-0 h-full w-10 flex items-center justify-center rounded-full bg-yellow-300">
        <IoSearch />
      </button>
    </form>
  );
}
