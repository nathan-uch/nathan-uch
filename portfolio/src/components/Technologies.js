import { techStack, otherTools } from "../config";

export default function App() {

    return (
        <div class="page-section relative flex flex-col justify-center items-center min-h-screen w-full py-8 text-pri-dark">
            <div class="">
                <div class="my-5 text-5xl md:text-6xl xl:text-7xl font-bold">
                    Tech Stack
                </div>
                <ul class="w-[80%] flex flex-wrap justify-center gap-3 mb-6">
                    
                </ul>
            </div>
            <div>
                <div class="my-5 text-1xl md:text-2xl xl:text-4xl">Other Tools and Technologies</div>
                <div class="flex flex-wrap flex-row justify-center items-center">

                </div>
            </div>
        </div>
    );
  }