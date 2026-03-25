import { CalendarDays } from 'lucide-react';

const PROGRAMA = [
  { num: 1, texto: 'Ingreso y ubicación de estudiantes por carreras' },
  { num: 2, texto: 'Recepción de autoridades' },
  { num: 3, texto: 'Inicio formal del Acto' },
  { num: 4, texto: 'Ingreso de banderas de ceremonia · Entonación de Himnos' },
  { num: 5, texto: 'Discurso de Apertura — Sra. Rectora IES Recreo, Esp. María Martínez' },
  { num: 6, texto: 'Palabras del Sr. Intendente de la Ciudad de Recreo, Luis Polti' },
  { num: 7, texto: 'Palabras de la Sra. Directora Provincial de Nivel Superior, Lic. Abahi Brizuela' },
  { num: 8, texto: 'Lectura de Disposición, Huésped de Honor — Sra. Secretaria Técnica, Prof. Nancy Tobares' },
  { num: 9, texto: 'Presentación del equipo de trabajo de apoyo a la gestión y coordinadores de carreras' },
  { num: 10, texto: 'Retiro de Banderas de Ceremonia' },
  { num: 11, texto: 'Presentación de la Agenda del Estudiante' },
  { num: 12, texto: 'Dinámica de socialización y sorteo de kits escolares' },
  { num: 13, texto: 'Inicio de Talleres: Reglamento Académico y SIU' },
  { num: 14, texto: 'Reflexión final a cargo de Magíster Oscar Gallardo · Cierre' },
];

function ActoBienvenida() {
  return (
    <section id="acto-bienvenida" className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">

        <div className="mb-10 flex items-center gap-3">
          <CalendarDays className="text-institutional-blue" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-institutional-blue">Día 1 · Semana de Ambientación</p>
            <h2 className="text-3xl font-bold text-slate-900">Acto de Bienvenida</h2>
          </div>
        </div>

        {/* Hero fecha */}
        <div className="relative mb-10 overflow-hidden rounded-3xl bg-institutional-blue px-8 py-12 text-white md:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute right-32 bottom-4 h-32 w-32 rounded-full bg-white/5" />

          <div className="relative grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
                Viernes<br />
                <span className="text-sky-300">27</span>
              </h3>
              <p className="mt-4 text-xl font-bold text-sky-100 md:text-2xl">Acto Oficial de Bienvenida</p>
              <div className="mt-4 space-y-1 text-blue-100">
  <p className="flex items-center gap-2">
    <span>📍</span> Cine Teatro Municipal
  </p>
  <p className="flex items-center gap-2">
    <span>🕒</span> 19:30 hs
  </p>
</div>
              <p className="mt-2 text-sm text-sky-200">Instituto de Educación Superior Recreo</p>
            </div>
            <div className="hidden md:block">
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-semibold text-sky-200">Programa</p>
                <p className="mt-1 text-4xl font-extrabold">{PROGRAMA.length}</p>
                <p className="text-sm text-sky-200">actividades planificadas</p>
                <div className="mt-4 h-px bg-white/20" />
                <p className="mt-4 text-xs text-sky-300">Acto oficial · Talleres · Sorteos · Cierre</p>
              </div>
            </div>
          </div>
        </div>

        {/* Programa */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10">
          <div className="space-y-0">
            {PROGRAMA.map((item, i) => (
              <div
                key={item.num}
                className={`flex items-start gap-5 py-4 ${i < PROGRAMA.length - 1 ? 'border-b border-slate-100' : ''}`}
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-institutional-sky text-xs font-extrabold text-institutional-blue">
                  {item.num}
                </div>
                <p className="pt-1 text-sm leading-relaxed text-slate-700">{item.texto}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-institutional-sky/30 p-5 text-center">
            <p className="text-sm font-semibold text-institutional-blue">
              🎓 ¡Te esperamos para dar inicio a esta nueva etapa!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ActoBienvenida;
