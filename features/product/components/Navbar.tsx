"use client";

import { NotesLogo } from "components/NotesLogo";
import { ThemeToggler } from "components/ThemeToggler";
import { useScrollTop } from "hooks/useScrollTop";
import { cn } from "utils/cn";

/** Navbar for the home product page. */
export const Navbar = () => {
  const scrolled = useScrollTop();

  return (
    <div
      className={cn(
        "fixed top-0 z-50 flex w-full items-center bg-background p-6 dark:bg-[#1F1F1F]",
        scrolled && "border-b shadow-sm"
      )}
    >
      <NotesLogo className="h-6 w-6" />
      <div className="flex w-full items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        <ThemeToggler />
      </div>
    </div>
  );
};
