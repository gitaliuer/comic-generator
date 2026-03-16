import { Settings } from 'lucide-react';

export default function Header({ onOpenSettings }) {
    return (
        <header className="flex items-center justify-between p-6 w-full max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter">
                <span className="text-neon-gradient drop-shadow-[0_0_10px_rgba(176,38,255,0.8)]">AI Comic Strips</span>
            </h1>
            <button
                onClick={onOpenSettings}
                className="p-2 rounded-full glass-panel hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                aria-label="Settings"
            >
                <Settings className="w-6 h-6" />
            </button>
        </header>
    );
}
