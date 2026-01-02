import Profile from "./profile";
import Smartway from "./sites";
import ButtonContato from "./botao";

export default function Hero() {
    return (
        <>
        <div className=" flex flex-col lg:h-[700px] h-[1100px] bg-[url('/images/light.png')] bg-contain bg-no-repeat bg-top-right pt-35 mb-20">
            <div className="flex flex-col justify-center lg:h-[800px] lg:items-center lg:flex-row lg:gap-24 lg:w-[1000px] m-auto">
               <div className="flex flex-col gap-3 max-w-[400px] p-4 m-auto">
                        <p className="text-[13px] ">https://whois.com/enzocampos.dev</p>
                        <h1 className="text-4xl font-bold text-white">Enzo Campos</h1>
                        <p>Olá, sou Enzo Campos, desenvolvedor Front-end apaixonado por criar interfaces web modernas e funcionais.<br></br> Trabalho principalmente com WordPress e React, sempre explorando novas tecnologias e aprimorando minhas habilidades. Focado em aprendizado contínuo e colaboração. <br></br>
                        <br></br><br></br>
                        <strong>English: </strong>
                        Hi, I'm Enzo Campos, a Front-end Developer passionate about building modern and functional web interfaces. <br></br>I work mainly with WordPress and React, constantly exploring new technologies and improving my skills. Focused on learning and collaboration.</p>
                    <div className="flex gap-3">
                        <ButtonContato link="/docs/Enzo_Campos_Desenvolvedor_Front-end.pdf">
                            Currículo
                        </ButtonContato>
                        <ButtonContato link="/docs/Enzo_Campos_Front-end_Developer.pdf" variant="glass">
                            Resume
                        </ButtonContato>
                    </div>
                </div>
                <Profile />
            </div>
            </div>
            {/*<div className="h-[80vh] flex items-center bg-[url(/images/portfolio.png)] bg-no-repeat bg-cover bg-center flex-col">
                <div className="max-w-[1400px] flex items-center gap-5 m-auto">
                    <Smartway />
                    <Smartway />
                </div>
            </div>*/}
        </>
    );
}