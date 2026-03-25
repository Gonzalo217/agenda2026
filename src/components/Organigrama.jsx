import { Users } from 'lucide-react';

function Organigrama() {
  return (
    <section id="organigrama" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 flex items-center gap-3">
          <Users className="text-institutional-blue" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Organigrama Institucional</h2>
            <p className="mt-1 text-sm text-slate-500">Estructura organizativa · IES Recreo</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
          <img
            src="/organigrama.jpeg"
            alt="Organigrama IES Recreo"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Organigrama;