export default function Footer() {
  return (
    <div className="w-full flex justify-center items-center py-4 flex-col gap-y-2  text-gray-500 text-center">
      <div>built with React.js && TailwindCSS && FramerMotion</div>
      <a
        className="transition-all duration-200 hover:text-black underline"
        href="https://github.com/Mth-Dias/potfolio-matheus-dias"
        target="_blank"
      >
        see repo here
      </a>
    </div>
  );
}
