import { Button } from "@nextui-org/react";

export const ButtonCta = ({ className, children }) => {
    return (
      <Button className={`group bg-primary font-semibold text-black text-lg w-full py-6 lg:w-auto lg:px-20 lg:py-7 hover:bg-primaryScale-500 hover:text-white ${className} `}>
        {children}
        <svg width="24" height="24" fill="none">
            <path d="m11.68 14.62 2.56-2.56-2.56-2.56" fill="#fff"/>
            <path d="m11.68 14.62 2.56-2.56-2.56-2.56M4 12.06h10.17" stroke="#292D32" className="transition duration-200 group-hover:stroke-white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 4c4.42 0 8 3 8 8s-3.58 8-8 8" stroke="#292D32" className="transition duration-200 group-hover:stroke-white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Button>
    );
  };
  export default ButtonCta;