import ButtonContato from "./botao";

export default function Header () {
    return (
        <div className="main-container p-5 fixed top-0 w-full z-40">
            <div className="secondary-container flex place-content-between w-full lg:max-w-[1000px] max-w-[400px] m-auto bg-[#ffffff03] backdrop-blur-[5px] py-[16] px-[16] rounded-full items-center border border-[#ffffff1f] lg:w-full ">
                <h1 className="font-black text-[18px] w-[40%] items-center lg:ml-[42px]">CAMPOS.DEV</h1>
                <ul className="place-content-between w-[45%] max-w-[320px] items-center hidden lg:flex">
                    <a href="/#skills"><li>SKILLS</li></a>
                    <a href="/#portfolio"><li>PORTFOLIO</li></a>
                    <a href="/docs/Enzo_Campos_Front-end_Developer.pdf" download><li>DOWNLOAD CV</li></a>
                </ul>
                <div className="w-[40%] flex place-content-end items-center">
                <ButtonContato link="https://api.whatsapp.com/send?phone=5513996595151&text=Ol%C3%A1%20Enzo,%20gostei%20do%20seu%20portif%C3%B3lio!%20Quando%20podemos%20come%C3%A7ar?">
                CONTATO
                </ButtonContato>

                </div>
            </div>
        </div>
    );
}