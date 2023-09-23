import { techStack, otherTools } from "../config";

export default function App() {

    return (
        <div class="page-section bg-gray-200 relative flex flex-col justify-center items-center min-h-screen w-full py-8 text-pri-dark">
            <div class="flex flex-col items-center justify-center gap-8 w-full">
                <h2 class="my-5 text-5xl md:text-6xl xl:text-7xl font-bold">
                    Tech Stack
                </h2>
                <ul class="w-[80%] flex flex-wrap justify-center gap-3 mb-6">
                    {techStack.map(tech => (
                        <li class="p-3 bg-white border-2 border-black flex flex-col items-center justify-center gap-2 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-reg transition-all ease-in-out duration-300">
                            <img 
                                srcset={`${tech.icon1x} 1x, ${tech.icon2x} 2x`}
                                src={tech.icon} 
                                alt={`${tech.name} icon`} />
                            <h3>{tech.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            <div class="flex flex-col items-center justify-center gap-8 w-full">
                <h3 class="my-5 text-1xl md:text-2xl xl:text-4xl">Other Tools and Technologies</h3>
                <ul class="w-[80%] flex flex-wrap justify-center gap-3 mb-6">
                    {otherTools.map(tools => (
                        <li class="py-2 px-3 border-2 border-black bg-white flex flex-col items-center justify-center gap-2  hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-reg transition-all ease-in-out duration-300">
                            <img 
                                srcset={`${tools.icon1x} 1x, ${tools.icon2x} 2x`}
                                src={tools.icon} 
                                alt={`${tools.name} icon`} />
                            <h3>{tools.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}