import { useState, useEffect } from 'react'
import Prism from 'prismjs'

export default function CodeBoard({ modes = false }) {
    const [currentMode, setCurrentMode] = useState(0)
    useEffect(() => {
        Prism.highlightAll()
    }, [currentMode])

    return (
        <div className="relative text-small bg-qosdark md:text-msm md:max-w-3xl max-w-max rounded-md md:rounded-3xl md:p-2 p-2">
            <header className="md:h-8 h-6 py-2 flex items-center justify-between">
                <div className="w-3/12">
                    <span className="inline-block p-0.5 md:h-3  md:w-3 h-2 w-2 bg-qosred rounded-full m-1"></span>
                    <span className="inline-block p-0.5 md:h-3  md:w-3 h-2 w-2 bg-qosorange rounded-full m-1"></span>
                    <span className="inline-block p-0.5 md:h-3  md:w-3 h-2 w-2 bg-qosgreen rounded-full m-1"></span>
                </div>
                <div className="min-w-max">
                    {modes ? modes.map((mode, index) => <button className={`text-qosgray text-opacity-70 inline-block mx-2  p-2 min-w-min rounded shadow-lg ${currentMode === index && 'btn-primary'}`} onClick={() => setCurrentMode(index)}> {mode.name}</button>) : ''}
                </div>
                <div className="w-3/12"></div>
            </header>
            <div className="Code flex max-w-min">
                <pre className="min-w-full p-2 line-numbers rounded-lg max-h-96">
                    <code className={`language-${modes[currentMode].language} max-w-min`}>{modes[currentMode].code}</code>
                </pre>
            </div>
        </div>
    )
}