import React, { useState } from "react";

import HomeNav from "@/components/homepage/HomeNav";
import Hero from "@/components/homepage/Hero";
import NovelSection from "@/components/general/NovelSection";
import ModalUnlock from "@/components/homepage/ModalUnlock";

const mockNovels = [
  {
    id: 18,
    title: "Shadows of Berlin",
    author: "Hans Mueller",
    cover:
      "https://readdy.ai/api/search-image?query=A%20historical%20thriller%20book%20cover%20with%20Berlin%20Wall%20era%20cityscape%20in%20black%20and%20white%20with%20a%20splash%20of%20red%2C%20Cold%20War%20spy%20elements%20with%20dramatic%20shadows%2C%20professional%20book%20cover%20design%20with%20stark%20typography&width=600&height=800&seq=18&orientation=portrait",
    rating: 4.8,
    description:
      "A Cold War spy must navigate the dangerous streets of divided Berlin to prevent a global catastrophe.",
    progress: 0,
    category: "thriller",
  },
  {
    id: 19,
    title: "Beyond the Stars",
    author: "Zoe Blackwell",
    cover:
      "https://readdy.ai/api/search-image?query=A%20sci-fi%20romance%20book%20cover%20with%20two%20silhouettes%20reaching%20for%20each%20other%20across%20a%20cosmic%20space%20background%20with%20nebulas%20and%20stars%2C%20blend%20of%20romantic%20and%20science%20fiction%20elements%2C%20professional%20book%20cover%20design%20with%20elegant%20yet%20futuristic%20typography&width=600&height=800&seq=19&orientation=portrait",
    rating: 4.6,
    description:
      "An astronaut and a mission control specialist fall in love while facing the challenges of a Mars mission.",
    progress: 0,
    category: "romance",
  },
  {
    id: 20,
    title: "The Haunting of Blackwood",
    author: "Edgar Winters",
    cover:
      "https://readdy.ai/api/search-image?query=A%20horror%20book%20cover%20with%20a%20decrepit%20Victorian%20mansion%20during%20a%20thunderstorm%2C%20ghostly%20faces%20visible%20in%20the%20windows%2C%20gothic%20horror%20elements%20with%20dark%20blues%20and%20purples%2C%20professional%20book%20cover%20design%20with%20spooky%20typography&width=600&height=800&seq=20&orientation=portrait",
    rating: 4.9,
    description:
      "A family inherits a mansion with a dark past, only to discover that some inhabitants never truly leave.",
    progress: 0,
    category: "horror",
  },
  {
    id: 19,
    title: "Beyond the Stars",
    author: "Zoe Blackwell",
    cover:
      "https://readdy.ai/api/search-image?query=A%20sci-fi%20romance%20book%20cover%20with%20two%20silhouettes%20reaching%20for%20each%20other%20across%20a%20cosmic%20space%20background%20with%20nebulas%20and%20stars%2C%20blend%20of%20romantic%20and%20science%20fiction%20elements%2C%20professional%20book%20cover%20design%20with%20elegant%20yet%20futuristic%20typography&width=600&height=800&seq=19&orientation=portrait",
    rating: 4.6,
    description:
      "An astronaut and a mission control specialist fall in love while facing the challenges of a Mars mission.",
    progress: 0,
    category: "romance",
  },
  {
    id: 20,
    title: "The Haunting of Blackwood",
    author: "Edgar Winters",
    cover:
      "https://readdy.ai/api/search-image?query=A%20horror%20book%20cover%20with%20a%20decrepit%20Victorian%20mansion%20during%20a%20thunderstorm%2C%20ghostly%20faces%20visible%20in%20the%20windows%2C%20gothic%20horror%20elements%20with%20dark%20blues%20and%20purples%2C%20professional%20book%20cover%20design%20with%20spooky%20typography&width=600&height=800&seq=20&orientation=portrait",
    rating: 4.9,
    description:
      "A family inherits a mansion with a dark past, only to discover that some inhabitants never truly leave.",
    progress: 0,
    category: "horror",
  },
];

const Homepage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleUnlockClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <main className="container mx-auto px-4 pt-32 pb-20">
      <HomeNav />
      <Hero handleUnlock={handleUnlockClick} />
      <NovelSection title={"Browse Novels"} novels={mockNovels} />

      {showModal ? <ModalUnlock handleCloseModal={handleCloseModal} /> : null}

      <section className="min-h-screen">asdasd</section>
    </main>
  );
};

export default Homepage;
