import { handleColors } from "../helpers/handleIconColors";

export default function SkillsCard({
  children,
  name,
}: {
  children: JSX.Element;
  name: string;
}) {
  return (
    <div className={`w-10 sm:w-auto transition-all duration-300 ${handleColors(name)} text-gray-400 ${handleColors(name)} fill-gray-400 w-fit flex flex-col items-center gap-y-1 scale-90 hover:scale-100`}>
      {children}
      <span className="text-xl">{name}</span>
    </div>
  );
}
