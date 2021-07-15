import { useEffect } from "react"
import Prism from 'prismjs'

export default function SimpleCodeBoard({ code, language }) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])
    return (
        <div className="Code bg-qosdark rounded-sm max-w-min text-small md:text-msm">
            <pre className="bg-qosdark rounded-sm p-1 px-2">
                <code className={`language-${language}`}>
                    {code}
                </code>
            </pre>
        </div>
    )
}