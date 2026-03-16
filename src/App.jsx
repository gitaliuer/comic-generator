import { useState } from 'react'
import Header from './components/Header'
import InputArea from './components/InputArea'
import ComicGrid from './components/ComicGrid'

function App() {
  const [prompt, setPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setIsGenerated(false);

    // Simulate Fake API Loading
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 2000); // 2 second fake delay
  }

  return (
    <div className="relative min-h-screen bg-dark-900 text-white selection:bg-neon-purple/30 selection:text-white font-sans overflow-x-hidden">
      {/* Abstract Background Elements */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-screen filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="fixed top-1/3 right-1/4 w-[30rem] h-[30rem] bg-neon-blue rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-1/3 w-80 h-80 bg-neon-pink rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 flex flex-col items-center w-full mt-8">
          <InputArea
            prompt={prompt}
            setPrompt={setPrompt}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
          />
          {isGenerated && <ComicGrid />}
        </main>
      </div>
    </div>
  )
}

export default App
