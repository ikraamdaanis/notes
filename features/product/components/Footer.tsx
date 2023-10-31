import { NotesLogo } from "components/NotesLogo";
import { Button } from "components/ui/button";

/** Footer component for the home product page. */
export const Footer = () => {
  return (
    <div className="z-50 mx-auto flex w-full max-w-screen-xl items-center bg-background p-6 dark:bg-[#1F1F1F]">
      <NotesLogo className="h-6 w-6" />
      <div className="flex w-full items-center justify-between gap-x-2 text-muted-foreground md:ml-auto md:justify-end">
        <Button variant="ghost" size="sm">
          Privacy Policy
        </Button>
        <Button variant="ghost" size="sm">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};
