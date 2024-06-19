"use client";

import { useApi } from "@/app/context/api.context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const { setSearch: setContextSearch } = useApi();

  const handleSearch = () => {
    setContextSearch(search); // Update the search term in the context
    router.push(`/search?query=${search}`); // Navigate to the search results page with the search term as a query parameter
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleSearch(); // Call handleSearch when Enter key is pressed
    }
  };

  return (
    <div className="bg-white dark:bg-[#313334] flex justify-between items-center p-5">
      <p className="text-green text-2xl font-bold shadow-text">
        LothlorienLive
      </p>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e: any) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Header;
