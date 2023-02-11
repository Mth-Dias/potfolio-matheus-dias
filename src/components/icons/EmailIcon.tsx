export default function EmailIcon() {
  return (
    <svg
      fill="#000000"
      width="80"
      height="80"
      viewBox="0 0 24 24"
      id="email"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-110 transition-all duration-200 w-[60px] sm:w-[80px]"
    >
      <path
        id="secondary"
        d="M20.61,5.23l-8,6.28a1,1,0,0,1-1.24,0l-8-6.28A1,1,0,0,0,3,6V18a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V6A1,1,0,0,0,20.61,5.23Z"
        style={{fill:"none", strokeWidth: '.1'}}
      ></path>
      <path
        id="primary"
        d="M20,19H4a1,1,0,0,1-1-1V6A1,1,0,0,1,4,5H20a1,1,0,0,1,1,1V18A1,1,0,0,1,20,19ZM20,5H4a1,1,0,0,0-.62.22l8,6.29a1,1,0,0,0,1.24,0l8-6.29A1,1,0,0,0,20,5Z"
        style={{fill: '#0A66C2', stroke: 'rgb(0, 0, 0)', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '.1'}}
      ></path>
    </svg>
  );
}
