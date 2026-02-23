import Profile from "./profile";
import Smartway from "./sites";
import ButtonContato from "./botao";

export default function Hero() {
    return (
        <>
        <div className=" flex flex-col lg:h-[600px] h-[850px] bg-[url('/images/light.png')] bg-contain bg-no-repeat bg-top-right pt-35 mb-20">
            <div className="flex flex-col justify-center lg:h-[800px] lg:items-center lg:flex-row lg:gap-24 lg:w-[1000px] m-auto">
               <div className="flex flex-col gap-3 max-w-[400px] p-4 m-auto">
                        <p className="text-[13px] ">https://whois.com/enzocampos.dev</p>
                        <h1 className="text-4xl font-bold text-white">Enzo Campos</h1>
                        <p>Olá, me chamo Enzo! <br></br>Sou desenvolvedor fullstack apaixonado por criar. Trabalho principalmente com WordPress, React e Node, mas estou sempre explorando novas tecnologias e aprimorando minhas habilidades.
                        <br></br><br></br>Foco sempre no aprendizado contínuo e em construir interfaces web modernas e funcionais. <br></br></p>
                    <div className="flex gap-3">
                        <ButtonContato link="/docs/Enzo_Campos_Desenvolvedor_Fullstack.pdf">
                            Currículo
                        </ButtonContato>
                        <ButtonContato link="/docs/Enzo_Campos_Fullstack_Developer.pdf" variant="glass">
                            Resume
                        </ButtonContato>
                    </div>
                </div>
                <Profile />
            </div>
            </div>
        </>
    );
}