function App() 
{
    return (
        <div className="bg-prim h-screen w-screen p-8 flex">
            <div className="bg-dark h-full w-full rounded-3xl overflow-x-auto">
                <div className="flex w-[150%] h-full">
                    <div className="bg-red-500 h-full w-1/3"></div>
                    <div className="bg-blue-500 h-full w-1/3"></div>
                    <div className="bg-green-500 h-full w-1/3"></div>
                </div>
            </div>
        </div>
    )
}

export default App
