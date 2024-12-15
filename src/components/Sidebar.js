import React from "react";

const Sidebar = () => {
  return (
    <div id="webcrumbs">
      <div className="w-[300px] hidden lg:block h-screen bg-white shadow-lg sticky top-0">
        {" "}
        <aside className="flex flex-col gap-6 p-6">
          <div className="text-xl font-title text-neutral-950">Sidebar</div>
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-neutral-950 hover:text-primary-500">
              Home
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500">
              About
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500">
              Services
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500">
              Contact
            </a>
          </nav>
          <div className="flex flex-col gap-4">
            <button className="bg-primary-500 text-primary-50 py-2 px-4 rounded-md">
              Primary Button
            </button>
            <button className="bg-neutral-200 text-neutral-950 py-2 px-4 rounded-md">
              Secondary Button
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
