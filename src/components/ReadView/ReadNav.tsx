import { Button } from "../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import { FaBell, FaBookOpen } from "react-icons/fa6";

const ReadNav = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-primary mr-2">
            <FaBookOpen className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold">ReadHub</h1>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className="!rounded-button cursor-pointer whitespace-nowrap"
          >
            <FaBell className="fas fa-bell text-gray-600" />
          </Button>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://readdy.ai/api/search-image?query=professional%20portrait%20photo%20of%20a%20person%20with%20neutral%20expression%2C%20high%20quality%2C%20realistic%2C%20soft%20lighting%2C%20clean%20background%2C%20professional%20headshot%20style&width=40&height=40&seq=avatar1&orientation=squarish" />
            <AvatarFallback>EM</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default ReadNav;
