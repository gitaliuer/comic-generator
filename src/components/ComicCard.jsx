export default function ComicCard({ index }) {
    // Array of distinct gradients to give each panel a unique glowing look
    const gradients = [
        "from-neon-purple to-neon-blue",
        "from-neon-pink to-neon-purple",
        "from-neon-blue to-teal-400",
        "from-neon-purple to-neon-pink",
    ];

    const currentGradient = gradients[(index - 1) % gradients.length];

    return (
        <div className="glass-card flex flex-col items-center text-left relative group w-full max-w-sm mx-auto overflow-hidden">
            {/* Image Container with 3/4 aspect ratio */}
            <div className={`relative w-full aspect-[3/4] bg-gradient-to-br ${currentGradient} overflow-hidden rounded-lg flex flex-col items-center justify-center p-6 text-center shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]`}>
                
                {/* Glow behind the text */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-0"></div>

                <div className="z-10 flex flex-col items-center justify-center gap-4 transform transition-transform duration-500 group-hover:scale-110">
                    <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <span className="text-3xl font-bold text-white drop-shadow-lg">{index}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-widest text-white drop-shadow-md uppercase mt-4">
                        Кадр {index}
                    </h3>
                    
                    <p className="text-sm font-medium text-white/70 max-w-[80%] leading-relaxed">
                        Сгенерированное изображение появится здесь
                    </p>
                </div>

                {/* Cyberpunk grid overlay lines */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDAuNWg0ME0wLjUgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=')] opacity-50 z-0 pointer-events-none mix-blend-overlay"></div>
            </div>

            {/* Hover Action overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20 pointer-events-none group-hover:pointer-events-auto backdrop-blur-sm">
                <button
                    className="flex flex-col items-center gap-3 text-white transition-all hover:scale-105 active:scale-95 shadow-xl"
                >
                    <span className="bg-white/10 border border-white/20 px-6 py-3 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
                        Скачать отключено
                    </span>
                    <span className="text-xs text-white/50 bg-black/50 px-3 py-1 rounded-full">Демо-режим</span>
                </button>
            </div>
        </div>
    );
}
