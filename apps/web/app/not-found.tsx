import Link from "next/link";
import { Icon } from "@/components/ui/icon";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0A192F] text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div className="relative z-10 max-w-md w-full p-8 md:p-10 rounded-3xl glass-panel border border-white/10 shadow-2xl text-center">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
          <Icon name="explore_off" className="text-[#C5A059] text-3xl" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A059] mb-2 block">
          404 Destination Uncharted
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Page Not Located
        </h1>
        <p className="text-sm text-slate-300 mb-8 leading-relaxed">
          The requested recruitment vacancy, candidate profile, or portal view does not exist within the VROLBD registry.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0A192F] bg-[#C5A059] hover:bg-[#D4AF37] transition-all rounded-xl shadow-lg"
        >
          <Icon name="arrow_back" size={18} />
          Return to Portal
        </Link>
      </div>
    </div>
  );
}
