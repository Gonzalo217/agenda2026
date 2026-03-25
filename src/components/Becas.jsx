import { ExternalLink, GraduationCap } from 'lucide-react';

function Becas() {
  return (
    <section id="becas" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-8 flex items-center gap-3">
          <GraduationCap className="text-institutional-blue" />
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Becas</h2>
            <p className="mt-1 text-sm text-slate-500">Becas Progresar · Ministerio de Educación de la Nación</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-slate-700">
                El <strong className="text-slate-900">Programa Becas Progresar</strong> es un beneficio económico del Ministerio de Educación de la Nación destinado a estudiantes que deseen iniciar o continuar sus estudios en el nivel superior.
              </p>
              <p className="text-base leading-relaxed text-slate-700">
                Para acceder a la beca debés estar inscripto en una carrera del nivel superior y cumplir con los requisitos de ingresos del grupo familiar. La inscripción se realiza de forma online a través del sitio oficial.
              </p>
              <p className="rounded-xl border-l-4 border-institutional-blue bg-institutional-sky/40 p-4 text-sm font-medium text-slate-800">
                Si tenés dudas sobre cómo tramitar la beca, podés consultar en la Jefatura de Alumnos del IES Recreo.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-8 text-center shadow-soft">
              <div className="rounded-2xl bg-institutional-sky p-4">
                <GraduationCap size={40} className="text-institutional-blue" />
              </div>
              <div>
                <p className="text-lg font-bold text-slate-900">Becas Progresar</p>
                <p className="mt-1 text-sm text-slate-500">Ministerio de Educación · Argentina</p>
              </div>
              <a
                href="https://www.argentina.gob.ar/educacion/progresar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-institutional-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-sky-700"
              >
                <ExternalLink size={18} /> Ir al sitio oficial
              </a>
              <p className="text-xs text-slate-400">Se abre en una nueva pestaña</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Becas;
