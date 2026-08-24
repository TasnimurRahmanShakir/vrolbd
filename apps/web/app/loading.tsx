import { Icon } from "@/components/ui/icon";

export default function Loading() {
  return (
    <div className="min-h-screen w-full bg-[#0A192F] flex flex-col items-center justify-center p-6 relative">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-[#C5A059]/20 border-t-[#C5A059] animate-spin" />
          <div className="absolute">
            <Icon name="work" className="text-[#C5A059] text-xl" />
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-[#C5A059] uppercase">
            Vision Recruiting Overseas Gateway
          </p>
          <p className="text-xs text-slate-400 mt-1">Initializing Secure Portal...</p>
        </div>
      </div>
    </div>
  );
}
