import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { PlayIcon } from "lucide-react";

export const TrailerDialog = ({
  youtubeKey,
}: {
  youtubeKey: string | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=" rounded-full bg-white">
          <PlayIcon className="stroke-black hover:stroke-white" />
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-4xl rounded-none">
        <DialogHeader>
          <DialogTitle className="hidden border-0"></DialogTitle>
          <iframe
            width="898"
            height="600"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            title="Use Strategic Thinking to Create the Life You Want"
            allowFullScreen
          ></iframe>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
