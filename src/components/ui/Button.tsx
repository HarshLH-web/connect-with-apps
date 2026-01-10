export interface ButtonProps {
  className?: string;
  isArrow?: boolean;
  link: string;
  text: string;
}

export const Button = ({
  isArrow = false,
  link,
  text,
  className,
}: ButtonProps) => {
  return (
    <a
      href={link}
      className={`btn-hover flex items-center gap-2 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 mt-4 w-fit ${className} text-base lg:text-lg`}
      >
      {text}
      {isArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-6 z-10 transition-transform duration-300 ease-out group-hover:scale-x-125 origin-left"
        >
          <path
            d="M4 12H20M20 12L16 8M20 12L16 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
};
