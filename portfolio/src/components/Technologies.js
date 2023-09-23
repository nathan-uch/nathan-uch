import { techStack, otherTools } from "../config";

export default function App() {

    return (
        <div class="page-section relative flex flex-col justify-center items-center min-h-screen w-full py-8 text-pri-dark">
            <div class="">
                <div class="my-5 text-5xl md:text-6xl xl:text-7xl font-bold">
                    Tech Stack
                </div>
                <ul class="w-[80%] flex flex-wrap justify-center gap-3 mb-6">
                    {techStack.map(tech => (
                        <li>
                            <img 
                                srcset={`${tech.icon1x} 1x, ${tech.icon2x} 2x`}
                                src={tech.icon} 
                                alt={`${tech.name} icon`} />
                            <h3>{tech.name}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <div class="my-5 text-1xl md:text-2xl xl:text-4xl">Other Tools and Technologies</div>
                <ul class="w-[80%] flex flex-wrap justify-center gap-3 mb-6">
                    {otherTools.map(tools => (
                        <li>
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