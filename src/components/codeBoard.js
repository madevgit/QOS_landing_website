import { useState, useEffect } from 'react'
import Prism from 'prismjs'

export default function CodeBoard({ modes = false }) {
    const [currentMode, setCurrentMode] = useState(0)
    useEffect(() => {
       
        Prism.highlightAll()
    }, [currentMode])

    return (
        <div className="relative text-small bg-qosdark bg-opacity-80 md:text-msm max-w-sm  mx-auto rounded-xl my-4 p-2">
            <header className="md:h-8 h-6 py-2 flex items-center justify-between">
                <div className="w-3/12 flex">
                    <span className="inline-block p-0.5 md:h-3  md:w-3 h-2 w-2 bg-qosred rounded-full m-1"></span>
                    <span className="inline-block p-0.5 md:h-3  md:w-3 h-2 w-2 bg-qosorange rounded-full m-1"></span>
                    <span className="inline-block p-0.5 md:h-3  md:w-3 h-2 w-2 bg-qosgreen rounded-full m-1"></span>
                </div>
                <div className="min-w-max">
                    {modes ? modes.map((mode, index) => <button className={`text-qosgray text-opacity-70 bg-opacity-80 inline-block mx-2  p-2 min-w-min rounded outline-none focus:outline-none ${currentMode === index && `${mode.name === 'Success' ? 'bg-qosgreen' : `${mode.name === "Error" ? 'bg-qosred' : 'bg-qosblue'}`}`}`} onClick={() => setCurrentMode(index)}> {mode.name}</button>) : ''}
                </div>
                <div className="w-3/12"></div>
            </header>
            <div className="Code flex">
                <pre className="p-2 h-64 md:h-48 max-h-80 min-w-full hideScroll overflow-hidden rounded-lg">
                    <code className={`language-${modes[currentMode].language} max-w-min`}>{modes[currentMode].code}</code>
                </pre>
            </div>
        </div>
    )
}