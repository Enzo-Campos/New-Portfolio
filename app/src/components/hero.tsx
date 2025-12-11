import Smartway from "./portfolio-items/smartway";

export default function Hero() {
    return (
        <>
            <div className="h-[70vh] bg-[url('/images/light.png')] bg-no-repeat bg-top-right flex items-center">
                <h1 className="m-auto text-6xl text-center text-[#656565]">Transforme ideias em <br /><span className="text-[white]">sites que vendem.</span></h1>
            </div>
            <div className="h-[80vh] flex items-center bg-[url(/images/portfolio.png)] bg-no-repeat bg-cover bg-center flex-col">
                <div className="max-w-[1400px] flex items-center gap-5 m-auto">
                    <Smartway />
                    <Smartway />
                    <Smartway />
                </div>
            </div>
        </>
    );
}