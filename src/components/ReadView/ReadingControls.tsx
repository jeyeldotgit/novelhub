import clsx from "clsx";

import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";
import { Slider } from "../ui/slider";
import { Separator } from "../ui/separator";

import { FaMoon } from "react-icons/fa6";
import {
  FaChevronLeft,
  FaChevronRight,
  FaBookmark,
  FaList,
} from "react-icons/fa6";

interface ReadingControlsProps {
  fontSize: number;
  handleFontSizeChange: (value: number[]) => void;
  isBookmarked: boolean;
  toggleBookmark: () => void;
  currentChapter: number;
  totalChapters: number;
  navigateChapter: (direction: "prev" | "next") => void;
  showToc: boolean;
  setShowToc: (show: boolean) => void;
}

const ReadingControls = ({
  fontSize,
  handleFontSizeChange,
  isBookmarked,
  toggleBookmark,
  currentChapter,
  totalChapters,
  navigateChapter,
  showToc,
  setShowToc,
}: ReadingControlsProps) => {
  const baseButtonClasses = "rounded-button cursor-pointer whitespace-nowrap";

  const FontSizeControl = () => (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Font Size:</span>
      <Slider
        className="w-24"
        value={[fontSize]}
        min={12}
        max={24}
        step={1}
        onValueChange={handleFontSizeChange}
      />
      <span className="text-sm text-gray-600">{fontSize}px</span>
    </div>
  );

  const ThemeToggle = () => (
    <Toggle
      aria-label="Toggle theme"
      aria-pressed="false"
      className={clsx(baseButtonClasses, "!rounded-button")}
    >
      <FaMoon className="fas fa-moon" />
      Dark
    </Toggle>
  );

  const NavigationButtons = () => (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => navigateChapter("prev")}
        disabled={currentChapter <= 1}
        className={baseButtonClasses}
      >
        <FaChevronLeft className="fas fa-chevron-left mr-1" /> Previous
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={toggleBookmark}
        className={clsx(baseButtonClasses, {
          "text-yellow-600": isBookmarked,
        })}
      >
        <FaBookmark
          className={clsx("fas fa-bookmark mr-1", {
            "text-yellow-600": isBookmarked,
          })}
        />
        {isBookmarked ? "Bookmarked" : "Bookmark"}
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowToc(!showToc)}
        className={baseButtonClasses}
      >
        <FaList className="fas fa-list mr-1" /> Chapters
      </Button>

      <Button
        size="sm"
        onClick={() => navigateChapter("next")}
        disabled={currentChapter >= totalChapters}
        className="bg-blue-600 text-white hover:bg-blue-700 rounded-button cursor-pointer whitespace-nowrap"
      >
        Next <FaChevronRight className="fas fa-chevron-right ml-1" />
      </Button>
    </div>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 px-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <FontSizeControl />
          <Separator orientation="vertical" className="h-6" />
          <ThemeToggle />
        </div>

        <NavigationButtons />
      </div>
    </div>
  );
};

export default ReadingControls;
