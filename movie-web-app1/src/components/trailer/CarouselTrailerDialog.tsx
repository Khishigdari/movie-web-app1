import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { FiPlay } from "react-icons/fi";

export const CarouselTrailerDialog = ({
  youtubeKey,
}: {
  youtubeKey: string | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="px-[16px] bg-[#F4F4F5] text-[14px] leading-[20px] text-[#18181B] hover:text-[#FAFAFA]">
          <FiPlay />
          Watch Trailer
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 sm:max-w-4xl rounded-none ">
        <DialogHeader>
          <DialogTitle className="hidden border-0"></DialogTitle>
          <iframe
            width="898"
            height="600"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            title="Use Strategic Thinking to Create the Life You Want"
            allowFullScreen
            className="hidden md:block"
          ></iframe>
          <iframe
            width="full"
            height="403"
            src={`https://www.youtube.com/embed/${youtubeKey}`}
            title="Use Strategic Thinking to Create the Life You Want"
            allowFullScreen
            className="block md:hidden"
          ></iframe>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
