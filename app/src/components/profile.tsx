export default function Profile() {
    return (
        <div className='bg-[#ffffff03] backdrop-blur-[5px] w-[90vw] max-w-[400px] p-4 rounded-[30px] text-white flex flex-col justify-between my-[30px] cursor-pointer border border-[#ffffff1f] max-h-[330px] m-auto'>
          <img   
            className="w-full rounded-[20px]"
            src="/images/self.png"
            width={1920} // Defina a largura desejada da imagem
            height={1080} // Defina a altura desejada da imagem
          />
        </div>
    );
}