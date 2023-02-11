import { useNavigate } from "react-router-dom";

export default function NavItem({
  value,
  href,
}: {
  value: string;
  href: string;
}) {
  const navigate = useNavigate()
  const currentPath = window.location.pathname === href

    return (
    <li className="group uppercase font-me">
      <button onClick={() => navigate(href)}>{value}</button>
      <div className={`transition-all duration-300 border-b-2 border-black ${currentPath ? 'w-full text-black' : 'text-black/80 group-hover:w-[100%] w-[0%]'}`}></div>
    </li>
  );
}
