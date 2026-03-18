import { BookOpen, Download } from 'lucide-react';

function Reglamento() {
  return (
    <section id="reglamento" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <BookOpen className="text-institutional-blue" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Reglamento Académico Institucional</h2>
            <p className="mt-1 text-sm text-slate-500">RAI · IES Recreo · Disposición DISPC-2019-97-E-CAT-DESU#MECT</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-slate-700">
                El <strong className="text-slate-900">Reglamento Académico Institucional (RAI)</strong> regula y ordena las acciones académicas y administrativas del IES "Recreo", siendo la autoridad de contralor la Dirección General de Educación Superior.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Es el dispositivo que acompaña y sostiene la trayectoria formativa de los estudiantes en todas las carreras, estableciendo las condiciones de{' '}
                <strong className="text-slate-900">ingreso, permanencia, evaluación y egreso</strong>.
              </p>
              <p className="rounded-xl border-l-4 border-institutional-blue bg-institutional-sky/40 p-4 text-sm font-medium text-slate-800">
                Conocer el RAI es fundamental para una trayectoria formativa exitosa. Te recomendamos leerlo con atención al inicio de tu carrera.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-soft">
              <div className="rounded-2xl bg-institutional-sky p-4">
                <BookOpen size={40} className="text-institutional-blue" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">Reglamento Académico</p>
                <p className="mt-1 text-sm text-slate-500">Documento oficial · IES Recreo · 2019</p>
              </div>
              <a
                href="/REGLAMENTO.pdf"
                download
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-institutional-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
              >
                <Download size={18} /> Descargar RAI en PDF
              </a>
              <p className="text-xs text-slate-400">Formato PDF · 16 páginas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reglamento;
