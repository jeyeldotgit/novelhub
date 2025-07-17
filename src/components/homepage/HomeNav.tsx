import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

import { FaBookOpen, FaBell } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const categories = [
  { id: "all", name: "All" },
  { id: "fantasy", name: "Fantasy" },
  { id: "romance", name: "Isekai" },
  { id: "mystery", name: "Mystery" },
];

const HomeNav: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto  px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary mr-2">
              <FaBookOpen className="w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold">Novelty</h1>
          </div>

          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for novels, authors, genres..."
                className="pl-10 pr-4 py-2 w-full border-gray-200 focus:border-primary"
              />
              <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="!rounded-button whitespace-nowrap"
            >
              <FaBell className="text-gray-600 w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              className="!rounded-button whitespace-nowrap"
            >
              <FaBookmark className="text-gray-600 w-5 h-5" />
            </Button>
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://readdy.ai/api/search-image?query=Professional%20portrait%20photo%20of%20a%20young%20person%20with%20neutral%20expression%2C%20high%20quality%20professional%20headshot%20with%20clean%20background%2C%20soft%20lighting%2C%20detailed%20facial%20features&width=100&height=100&seq=21&orientation=squarish" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <ScrollArea className="w-full">
            <div className="flex space-x-2 py-1">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={
                    activeCategory === category.id ? "default" : "outline"
                  }
                  className={`cursor-pointer py-1.5 px-3 !rounded-button whitespace-nowrap ${
                    activeCategory === category.id ? "" : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </header>
  );
};

export default HomeNav;
