import { Links } from "@/types";
import Link from "next/link";

const Navbar = () => {
  const links: Links[] = [
    {
      label: "Trending",
      link: "/trending",
    },
    {
      label: "List",
      link: "/list",
    },
  ];

  return (
    <div>
      <div className="w-full max-w-[1251px] m-auto p-3 md:p-5 lg:p-8 xl:px-0 border-b border-b-[#E5E7EB] flex justify-between items-center">
        <div className="w-[109px] lg:w-[200px]">
          <h1>Explorar</h1>
        </div>

        <div className="flex gap-5 ">
          {links.map((link) => (
            <Link
              href={link.link}
              key={link.label}
              className="font-normal lg:text-lg"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
