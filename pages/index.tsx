import React from "react";
import GuestbookWall from "../src/components/GuestbookWall";
import AnimatedGuestbook from "../src/components/AnimatedGuestbook";

const Home: React.FC = () => {
  return (
    <div className="text-center font-sans">
      <header className="bg-black text-white p-6 shadow-md">
        <div className="flex justify-center">
          <div className="inline-flex flex-col md:flex-row items-center md:items-end justify-center max-w-full overflow-hidden">
            <div className="font-mono whitespace-pre text-center md:text-center text-xs xs:text-sm sm:text-base md:text-lg mx-auto">
              <pre className="m-0 p-0 inline-block text-left">{`
    ███████╗██████╗ ██╗██████╗  █████╗ ██╗   ██╗
    ██╔════╝██╔══██╗██║██╔══██╗██╔══██╗╚██╗ ██╔╝
    █████╗  ██████╔╝██║██║  ██║███████║ ╚████╔╝ 
    ██╔══╝  ██╔══██╗██║██║  ██║██╔══██║  ╚██╔╝  
    ██║     ██║  ██║██║██████╔╝██║  ██║   ██║   
    ╚═╝     ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   
`}</pre>
            </div>
            <AnimatedGuestbook />
          </div>
        </div>
      </header>
      <section className="max-w-3xl mx-auto my-8 p-5 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-5">
          How to Use Friday with this Project
        </h2>
        <ol className="pl-5 md:pl-8 space-y-4 text-left">
          <li>
            Navigate to the repository:{" "}
            <code className="bg-gray-200 px-2 py-1 rounded text-sm">
              cd /path/to/friday-tutorial
            </code>
          </li>
          <li>
            Review the Friday rules:{" "}
            <code className="bg-gray-200 px-2 py-1 rounded text-sm">
              cat .fridayrules
            </code>{" "}
            to understand project requirements
          </li>
          <li>
            Start Friday in your terminal:{" "}
            <code className="bg-gray-200 px-2 py-1 rounded text-sm">
              friday
            </code>
          </li>
          <li>
            Ask Friday to create a new guestbook entry. Describe what you want
            to say and what you want your icon to look like
          </li>
          <li>
            Follow Friday&apos;s guidance to complete your entry and submit a PR
          </li>
        </ol>
      </section>
      <main className="max-w-7xl mx-auto px-4">
        <GuestbookWall />
      </main>
      <footer className="bg-black text-white py-5 px-4 mt-10">
        <p className="text-sm md:text-base">
          Friday Tutorial - Virtual Guestbook | Sign the book by submitting a PR
        </p>
      </footer>
    </div>
  );
};

export default Home;
