import React from "react";
import { Mail } from "lucide-react";

const Mailbox = () => {
  const handleMailClick = () => {
    const email = "arpit.agre2405@gmail.com";
    const subject = encodeURIComponent("Inquiry Regarding Services");
    const body = encodeURIComponent("Hello, I would like to get more");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <button
      onClick={handleMailClick}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-800 transition"
    >
      <Mail size={18} />

      {/* Desktop */}
      <span className="hidden lg:inline">
        arpit.agre2405@gmail.com
      </span>

      {/* Tablet */}
      <span className="hidden sm:inline lg:hidden">
        arpit.agre...
      </span>

      {/* Mobile - icon only */}
    </button>
  );
};

export default Mailbox;