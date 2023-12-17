import React, { useState } from 'react'
import { gemini } from '@utils/google-ai'
import Markdown from 'react-markdown';
// import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
// import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

type Languages = 'python' | 'typescript' | 'rust' | 'golang' | 'scala' | 'elixer' | 'javascript' | 'java' | 'php'
const LANGUAGES = ['python', 'typescript', 'rust', 'golang', 'scala', 'elixer', 'javascript', 'java', 'php']

export const CodeChanger = () => {
  const [inputCode, setInputCode] = useState<string>();
  const [resultCode, setResultCode] = useState<string>();
  const [inputLanguage, setInputLanguage] = useState<Languages>('javascript')
  const [outputLanguage, setOutputLanguage] = useState<Languages>('python')
  const [loading, setLoading] = useState(false);

  const handleConvertCode = async () => {
    setLoading(true)
    const prompt = `You are an expert programmer that know everything about every programming language. Conver the following ${inputLanguage} code into ${outputLanguage} code. Only return the code. Here is the ${inputLanguage} code "${inputCode}"`
    try {
        const res = await gemini(prompt)
        setResultCode(res.text)
        setLoading(false)
    } catch (err) {
        alert(err)
        setLoading(false)
    }
  }

  return (
    <div className='mt-8'>
        <div className='mt-4 flex flex-col md:flex-row gap-4'>
            <div className='w-full md:w-1/2'>
                <div className="flex justify-between items-center w-full">
                    <h3>Input Code</h3>
                    <select defaultValue={inputLanguage} onChange={(e) => setInputLanguage(e.target.value as Languages)}>
                        {LANGUAGES.map(lang => (
                            <option key={lang} value={lang} className="capitalize">{lang}</option>
                        ))}
                    </select>
                </div>
                <textarea value={inputCode} onChange={(e) => setInputCode(e.target.value)} className='w-full border-2 resize-none min-h-[384px] p-2 text-base font-mono'  />
            </div>
            <div className='w-full md:w-1/2'>
                <div className="flex justify-between items-center w-full">
                    <h3>Output Code</h3>
                    <select defaultValue={outputLanguage} onChange={(e) => setOutputLanguage(e.target.value as Languages)}>
                        {LANGUAGES.map(lang => (
                            <option key={lang} value={lang} className="capitalize">{lang}</option>
                        ))}
                    </select>
                </div>
                <div className="min-h-[384px] w-full border-2 p-2 text-base overflow-x-auto">
                    <Markdown
                     children={resultCode}
                    //  components={{
                    //     code(props) {
                    //       const {children, className, node, ...rest} = props
                    //       const match = /language-(\w+)/.exec(className || '')
                    //       return match ? (
                    //         <SyntaxHighlighter
                    //           PreTag="div"
                    //           children={String(children).replace(/\n$/, '')}
                    //           language={match[1]}
                    //           style={dark}
                    //         />
                    //       ) : (
                    //         <code {...rest} className={className}>
                    //           {children}
                    //         </code>
                    //       )
                    //     }
                    //   }}
                    />
                </div>
                {/* <textarea value={resultCode} className='w-full border-2 resize-none h-96 p-2 text-base font-mono'  /> */}
            </div>
        </div>
        <div className='flex justify-end mt-4'>
            <button
                type="submit"
                onClick={handleConvertCode}
                disabled={loading}
                className="bg-black text-white rounded-full px-3 py-1"
            >
                {loading ? "Converting..." : "Convert"}
            </button>
        </div>
    </div>
  )
}
