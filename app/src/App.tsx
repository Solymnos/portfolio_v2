import Home from './components/Home';
import Side from './components/Side';
import Title from './components/Title';
import PP from './components/PP';
import About from './components/About';
import Career from './components/Career';

const App = () => 
{
    return (
        <div className="bg-prim h-screen w-screen p-8 overflow-hidden relative">
            <Side />
            <Title />
            <div className="bg-dark h-full w-full rounded-3xl overflow-x-auto scrollbar-hide scroll-smooth">
                <div className="flex w-[250%] h-full relative">
                    <Home />
                    <PP />
                    <About />
                    <Career />
                </div>
            </div>
        </div>
    )
}

export default App;
