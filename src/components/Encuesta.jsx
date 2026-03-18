import { ClipboardList, ExternalLink } from 'lucide-react';

function Encuesta() {
  return (
    <section id="encuesta" className="bg-institutional-sky/20">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <ClipboardList className="text-institutional-blue" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Encuesta de Investigación</h2>
            <p className="mt-1 text-sm text-slate-500">Área de Investigación · IES Recreo · 2026</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-slate-700">
                El <strong className="text-slate-900">Área de Investigación del IES Recreo</strong> te invita a participar de una encuesta destinada a los ingresantes 2026.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Tu participación nos ayuda a conocer mejor el perfil de quienes eligen nuestra institución para mejorar continuamente la propuesta formativa.
              </p>
              <p className="rounded-xl border-l-4 border-institutional-blue bg-institutional-sky/40 p-4 text-sm font-medium text-slate-800">
                Completar la encuesta lleva menos de 5 minutos. ¡Tu opinión es muy importante para nosotros!
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-slate-50 p-8 text-center shadow-soft">
              <div className="rounded-2xl bg-institutional-sky p-4">
                <ClipboardList size={40} className="text-institutional-blue" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">Encuesta para Ingresantes</p>
                <p className="mt-1 text-sm text-slate-500">Área de Investigación · Anónima · 5 min</p>
              </div>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSflQMHAKeiCtzfMVM3Oj3QGGUMmI3m3pZR0tCzie6n8EkPgyg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-institutional-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
              >
                <ExternalLink size={18} /> Completar la encuesta
              </a>
              <p className="text-xs text-slate-400">Se abre en una nueva pestaña</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Encuesta;
