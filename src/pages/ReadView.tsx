import ReadingControls from "@/components/ReadView/ReadingControls";
import { useEffect, useState } from "react";

const ReadView = () => {
  // Iniitialize State Variables
  const [fontSize, setFontSize] = useState<number>(16);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [currentChapter, setCurrentChapter] = useState<number>(1);
  const [totalChapters, setIsTotalChapters] = useState<number>(10);
  const [showToc, setShowToc] = useState<boolean>(false);

  // Moch Total Chapters
  useEffect(() => {
    setIsTotalChapters(20);
  }, []);

  // Handler Functions
  const handleFontSizeChange = (value: number[]) => {
    setFontSize(value[0]);
  };

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const navigateChapter = (direction: "prev" | "next") => {
    setCurrentChapter((prev) => {
      if (direction === "prev") return Math.max(1, prev - 1);
      if (direction === "next") return Math.min(totalChapters, prev + 1);
      return prev;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <section className="flex-1 min-h-screen">asdasd</section>
      <ReadingControls
        fontSize={fontSize}
        handleFontSizeChange={handleFontSizeChange}
        isBookmarked={isBookmarked}
        toggleBookmark={toggleBookmark}
        currentChapter={currentChapter}
        totalChapters={totalChapters}
        navigateChapter={navigateChapter}
        showToc={showToc}
        setShowToc={setShowToc}
      />
    </div>
  );
};

export default ReadView;
