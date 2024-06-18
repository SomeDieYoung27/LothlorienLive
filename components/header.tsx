import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-white dark:bg-[#313334] flex justify-between items-center p-5">
      <p className="text-green text-2xl font-bold shadow-text">
        LothlorienLive
      </p>
      <input
        type="text"
        placeholder="Search..."
        className="p-2 text-black dark:text-white bg-gray-200 dark:bg-gray-700 border-none rounded"
      />
    </div>
  );
};

export default Header;
