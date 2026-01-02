interface ButtonContatoProps {
  link: string;
  variant?: "white" | "glass";
  children: React.ReactNode;
}

export default function ButtonContato ({
  link, 
  variant = "white",
  children,
}: ButtonContatoProps){
  const base =
  "rounded-full py-2 px-6 lg:py-2.5 lg:px-10 font-black transition-all duration-300 border-1 border-white border-solid";
  
  const variants = {
  white: "bg-white border-2 text-black hover:bg-transparent hover:text-white hover:border-white",
  glass:
    "bg-white/5 backdrop-blur-md border-white/20 text-white hover:bg-white/10",
  };

    return (
        <a 
        href={link} 
        download
        className={`${base} ${variants[variant]}`}
        target="_blank"
        rel="noopener noreferrer"
        >
        {children} 
        </a>
    );
}