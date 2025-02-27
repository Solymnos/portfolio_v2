import Home from "./components/Home";
import Side from "./components/Side";
import Title from './components/Title';

const App = () => 
{
    return (
        <div className="bg-prim h-screen w-screen p-8 overflow-hidden">
            <div className="bg-dark h-full w-full rounded-3xl overflow-x-auto scrollbar-hide scroll-smooth">
                
                <div className="flex w-[150%] h-full relative">
                    <Home />
                    <div className="bg-prim h-full w-1/3"></div>
                    <div className="h-full w-1/3"></div>
                </div>
            </div>
        </div>
    )
}

export default App;
