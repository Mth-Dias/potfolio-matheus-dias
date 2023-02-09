import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function NavItem({
  value,
  href,
}: {
  value: string;
  href: string;
}) {
    return (
    <li className="group">
      <a href={href}>{value}</a>
      <div className="transition-all duration-300 border-b-2 border-black group-hover:w-[100%] w-[0%]"></div>
    </li>
  );
}
