import type { novelCard } from "@/types/typeNovelCard";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { FaBookmark, FaBookOpen } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

type NovelCardProps = {
  novel: novelCard;
};

const NovelCard = ({ novel }: NovelCardProps) => {
  return (
    <Card className="flex flex-col h-[500px] max-w-xs overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group">
      {/* Image */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src={novel.cover}
          alt={novel.title}
          className="absolute inset-0 w-full h-full object-cover object-top hover:scale-110 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-col flex-1 px-4 pb-4">
        <div className="flex justify-between items-start gap-2 mb-1">
          <CardTitle className="text-base font-semibold line-clamp-2 overflow-hidden">
            {novel.title}
          </CardTitle>
          <div className="flex items-center mt-1">
            <IoStar className="text-yellow-400 mr-1 text-sm" />
            <span className="text-sm font-medium">{novel.rating}</span>
          </div>
        </div>
        <CardDescription className="text-xs text-gray-500 mb-2">
          {novel.author}
        </CardDescription>

        <CardContent className="p-0 mb-4 grow">
          <p className="text-sm text-gray-600 line-clamp-3">
            {novel.description}
          </p>
        </CardContent>

        <CardFooter className="p-0 mt-auto flex justify-between">
          <Button
            variant="outline"
            size="sm"
            className="!rounded-button whitespace-nowrap text-xs px-3"
          >
            <FaBookmark className="mr-2" />
            Save
          </Button>
          <Button
            variant="default"
            size="sm"
            className="!rounded-button whitespace-nowrap text-xs px-3"
          >
            <FaBookOpen className="mr-2" />
            Read Now
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default NovelCard;
