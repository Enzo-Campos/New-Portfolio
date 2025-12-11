import ButtonContato from "./botao";

export default function Header () {
    return (
        <div className="main-container p-5 fixed top-0 left-0 w-full">
            <div className="secondary-container flex place-content-between w-[80%] max-w-[1400px] m-auto bg-[#ffffff03] backdrop-blur-[5px] py-[16] px-[16] rounded-full items-center border border-[#ffffff1f]">
                <h1 className="font-black text-[21px] w-[40%] items-center ml-[42px]">CAMPOS.DEV</h1>
                <ul className="flex place-content-between w-[45%] items-center">
                    <a href="#"><li>SITES</li></a>
                    <a href="#"><li>E-COMMERCE</li></a>
                    <a href="#"><li>LANDING PAGES</li></a>
                    <a href="#"><li>MANUTENÇÃO</li></a>
                </ul>
                <div className="w-[40%] flex place-content-end items-center">
                <ButtonContato />
                </div>
            </div>
        </div>
    );
}