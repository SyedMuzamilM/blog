import { gemini } from "@utils/google-ai";
import { useState } from "react"
import Markdown from "react-markdown";


export const RenderCode = () => {
    const [prompt, setPrompt] = useState<string>('');
    const [output, setOutput] = useState<string>('');
    const [loading, setLoading] = useState(false);

    const getData = async (e: React.FormEvent<HTMLFormElement>) => {
        const content = `You are a usefull assistant who know how to code UI in reactjs with tailwindcss for styles. Try to return the reactjs code with tailwindcss styles. Only return the code back. Follow the instruction properly and return the code in reactjs and tailwindcss "${prompt}"`
        e.preventDefault();
        setLoading(true);
        try {
            const res = await gemini(content)
            setOutput(res.text)
            setLoading(false)
            setPrompt('')
        } catch (err) {
            setLoading(false)
            setOutput("Something went wrong please try again later")
        }
    }

    return (
        <div className="mt-8">
            <h2 className='font-bold text-3xl mb-2'>Get code from your prompt</h2>
            <form onSubmit={getData} className="flex items-center mb-4">
                <input
                    type="text"
                    placeholder="Enter something"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="border border-gray-300 rounded-lg px-2 py-1 mr-2 w-full"
                />
                <button
                    type="submit"
                    className="bg-black text-white rounded-full px-3 py-1"
                >
                    Go
                </button>
            </form>
            <div>
                {
                    loading ? (
                        <p>Generating...</p>
                    ) : (
                        <Markdown>
                            {output}
                        </Markdown>
                    )
                }
            </div>
        </div>
    )
}