import { Button } from "../ui/button";
import type { novelCard } from "@/types/typeNovelCard";
import NovelCard from "../homepage/NovelCard";

interface NovelSectionProps {
  title: string;
  novels: novelCard[];
}

const NovelSection = ({ title, novels }: NovelSectionProps) => {
  return (
    <section className="mb-12 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Button variant="ghost" className="!rounded-button whitespace-nowrap">
          View All <i className="fas fa-arrow-right ml-2"></i>
        </Button>
      </div>

      {/* Grid-based layout for novels */}
      <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {novels.map((novel) => (
          <NovelCard key={novel.id} novel={novel} />
        ))}
      </div>
    </section>
  );
};

export default NovelSection;
