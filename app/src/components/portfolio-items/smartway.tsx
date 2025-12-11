export default function Smartway () {
    return (
        <div className='bg-[#ffffff03] backdrop-blur-[5px] sticky max-w-[90vw] mx-auto p-4 rounded-[20px] text-white h-[60%] flex flex-col justify-between my-[30px] cursor-pointer border border-[#ffffff1f] xl:h-auto lg:h-auto'>
          <img   
            className="w-full rounded-[20px]"
            src="/images/smartway.png"
            width={1920} // Defina a largura desejada da imagem
            height={1080} // Defina a altura desejada da imagem
          />
          <h3 className='font-bold pt-4'>SMARTWAY</h3>
          <p className='font-thin pb-4 text-[0.9rem]'>DESCRIÇÃO</p>
        </div>
    );
}