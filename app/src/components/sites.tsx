interface SitesProps {
  title: string,
  category: string,
  description: string,
  img: string,
  siteUrl: string
}
export default function Sites({ title, category, description, img, siteUrl }: SitesProps) {
  return (
    <a target="_blank" href={siteUrl}>
      <div className='bg-[#ffffff01] backdrop-blur-[7px] sticky max-w-[90vw] mx-auto p-4 rounded-[20px] text-white h-[60%] flex flex-col justify-between my-[15px] cursor-pointer border border-white/5 xl:h-auto lg:h-auto'>
        <img
          className="w-full rounded-[20px]"
          src={img}
          width={1920} // Defina a largura desejada da imagem
          height={1080} // Defina a altura desejada da imagem
        />
        <h3 className='font-bold pt-4 lg:text-[14px] xl:text-[16px]'>{title}</h3>
        <p className='font-thin pb-4 text-[0.8rem] text-gray-500'>{category}</p>
        <p className='font-thin pb-4 text-[0.8rem]'>{description}</p>
      </div>
    </a>
  );
}