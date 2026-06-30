import Header from "./src/components/header";
import Hero from "./src/components/hero";
import Skills from "./src/components/skills";
import Smartway from "./src/components/sites";

export default function Home() {
  return (<>
    <Header />
    <Hero />
    <h2 className="text-4xl font-bold text-white text-center" id="skills" >SKILLS</h2>
    <div className="flex flex-col items-center">
      <div className="lg:flex lg:flex-row lg:w-[973px]">
        <Skills title="Linguagens de programação" tags={["Javascript", "TypeScript", "PHP"]} />
        <Skills title="Desenvolvimento Front-end" tags={["React", "Next.js", "Tailwind CSS"]} />
        <Skills title="Desenvolvimento Backend" tags={["Express.js", "Node.js", "REST API"]} />
      </div>
      <div className="lg:flex lg:flex-row lg:w-[973px]">
        <Skills title="Ferramentas" tags={["GIT", "Vercel", "WordPress"]} />
        <Skills title="Banco de dados" tags={["MySQL", "Supabase"]} />
        <Skills title="Design" tags={["Figma", "Wireframing"]} /></div>
    </div>
    <h2 className="text-4xl font-bold text-white text-center" id="portfolio"><br></br>ALGUNS DOS<br></br>MEUS TRABALHOS<br></br><br></br></h2>
    <div className="flex flex-col items-center lg:bg-[url('/images/portfolio.png')] bg-[url('/images/sm-background.png')] lg:lg-contain bg-contain lg:bg-repeat-x bg-no-repeat pt-12">
      <div className="lg:flex lg:flex-row lg:w-[1000px] xl:w-[1200px] gap-5 bg-no-repeat">
        <Smartway img="/images/hidrico-quimica.png" siteUrl='https://hidrico-institucional.vercel.app/' title="Institucional - Hídrico Química" description="ㅤ" category="Química / Indústria"/>
        <Smartway siteUrl='https://smartwaycs.com.br' img='/images/smartway.png' title="Institucional - Smartway" description="ㅤ" category="Indústria"/>
        <Smartway siteUrl='https://taedarquitetura.com.br' img="/images/taed.png" title="Institucional - Taed Arquitetura" description="ㅤ" category="Arquitetura"/>
        </div>
      <div className="lg:flex lg:flex-row lg:w-[1000px] xl:w-[1200px] gap-5 bg-no-repeat">
        <Smartway siteUrl='https://campinas-aopharmaceutico.com.br' img="/images/campinas.png" title="Institucional - Ao Pharmacêutico" description="Em parceria com @iblancomarketing" category="Farmácia"/>
        <Smartway img="/images/dashboard-financeiro-crm.png" siteUrl='#' title="Dashboard - Financeiro integrado com CRM" description="ㅤ" category="Fintech"/>
        <Smartway img="/images/agente-ia-whatsapp-dashboard.png" siteUrl='#' title="Agente de IA para WhatsApp + Dashboard" description="ㅤ" category="Inteligência Artificial"/>
        </div>
      <div className="lg:flex lg:flex-row lg:w-[1000px] xl:w-[1200px] gap-5 bg-no-repeat">
        <Smartway img="/images/skania.png" siteUrl='https://vernizskania.com.br' title="E-commerce - Verniz Skania" description="Em parceria com @iblancomarketing" category="Limpeza"/>
        <Smartway img="/images/landing-page-tricologista.png" siteUrl='https://lp.erysantostricologista.com.br/' title="Landing Page - Tricologista" description="ㅤ" category="Saúde"/>
        <Smartway img="/images/landing-page-game-changer.png" siteUrl='https://gamechanger.reliveclinic.com.br/' title="Landing Page - Game Changer" description="ㅤ" category="Saúde / Estética"/>
      </div>
      <div className="lg:flex lg:flex-row lg:w-[1000px] xl:w-[1200px] gap-5 bg-no-repeat">
        <Smartway img="/images/landing-page-indusparquet.png" siteUrl='https://lancamentos.grupoindusparquet.com.br/' title="Landing Page - Grupo Indusparquet" description="ㅤ" category="Construção / Decoração"/>
        <Smartway img="/images/fisioclinic.png" siteUrl='https://fisioclinicsantos.com.br' title="Institucional - FisioClinic" description="Em parceria com @iblancomarketing" category="Saúde"/>
        <Smartway img="/images/bailinho.png" siteUrl='https://bailinhomara.com.br' title="Landing Page - Bailinho" description="ㅤ" category="Eventos"/>
      </div>
    </div>
  </>
  );
}
