export default function App() {

    return (
        <div class="page-section relative flex flex-col justify-center items-center min-h-screen w-full py-8 text-pri-dark">
            <div class="text-center text-xl md:text-2x">
                <div class="w-3/4 mx-auto my-5 text-5xl md:text-6xl xl:text-7xl font-bold">About Me</div>
                <div class="w-3/4 mx-auto mt-8 text-2xl md:text-3x">Hello! Olá! 您好!</div>
                <div class="relative group flex flex-col justify-center items-center my-8 gap-8 text-xl md:text-2x">
                    <div class="w-3/4">I'm Nathan Huang, a web developer currently working in front-end at <a class="link underline" rel="noreferrer" target="_blank" href="https://www.nosto.com/">Nosto</a>. I enjoy creating websites and programming because the process has a great balance of creating and applying what you know versus learning and finding new methods of doing something.</div>
                    <div class="w-3/4">I like searching for solutions through observing details and testing. Software engineering can sometimes feel like a great puzzle that makes time fly. The satisfaction of finding and coming up with a way to fix or improve makes the process so enjoyable. There's never a single way to do it!</div>
                    <div class="text-xs md:text-base absolute -bottom-14 left-0 right-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">Fun fact: I've lived in 3 different continents</div>
                </div>
            </div>
        </div>
    );
  }