export interface ButtonProps {
  className: string;
  isArrow?: boolean;
  link: string;
  text: string;
}

export const Button = ({
  className,
  isArrow = false,
  link,
  text,
}: ButtonProps) => {
  return (
    <a
      href={link}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
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
