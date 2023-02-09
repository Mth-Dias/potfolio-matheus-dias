import NavItem from "../components/NavItem";

export default function NavBar() {
  return (
    <div className="transition-all duration-300 w-full border-b-2 border-black py-4 flex justify-between items-center px-20 xl:px-52">
      <img
        src="/assets/images/Logo.png"
        alt="Logo"
        className="w-52"
        draggable={false}
      />
      <ul className="sm:flex gap-x-7 hidden">
        <NavItem href="/" value="Home" />
        <NavItem href="/" value="Home" />
        <NavItem href="/" value="Home" />
        <NavItem href="/" value="Home" />
      </ul>
    </div>
  );
}
