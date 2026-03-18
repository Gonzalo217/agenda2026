import schedules from '../data/schedules.json';

const DIAS = schedules.dias;

const COLOR_MAP = {
  'Jornada de Inicio de Talleres':
    'bg-cyan-100 border-cyan-300 text-cyan-900',
  'Presentación de la Carrera':
    'bg-green-100 border-green-300 text-green-900',
  'Normativa Vigente / SIU y RAI':
    'bg-slate-100 border-slate-300 text-slate-700',
  'Alfabetización, Lectura y Escritura Académica':
    'bg-orange-100 border-orange-300 text-orange-900',
  'Alfabetización Digital / Ofimática':
    'bg-pink-100 border-pink-300 text-pink-900',
  'Sujeto de Educación Superior':
    'bg-teal-100 border-teal-300 text-teal-900',
  'Bienestar Estudiantil y Convivencia Institucional':
    'bg-rose-100 border-rose-300 text-rose-900',
  'Presentación de la Carrera / Aproximación al Perfil Profesional':
    'bg-fuchsia-100 border-fuchsia-300 text-fuchsia-900',
  'Tecnologías Emergentes en el Ámbito Académico':
    'bg-violet-100 border-violet-300 text-violet-900',
};

const LEGEND = [
  { label: 'Jornada de Inicio', color: 'bg-cyan-200' },
  { label: 'Presentación de la Carrera', color: 'bg-green-200' },
  { label: 'Normativa / SIU y RAI', color: 'bg-slate-200' },
  { label: 'Alfabet. Lectura y Escritura', color: 'bg-orange-200' },
  { label: 'Alfabet. Digital / Ofimática', color: 'bg-pink-200' },
  { label: 'Sujeto de Educ. Superior', color: 'bg-teal-200' },
  { label: 'Bienestar Estudiantil', color: 'bg-rose-200' },
  { label: 'Aprox. al Perfil Profesional', color: 'bg-fuchsia-200' },
  { label: 'Tecnologías Emergentes', color: 'bg-violet-200' },
];

function ActivityCard({ actividad, horario }) {
  const colorClass = COLOR_MAP[actividad] ?? 'bg-slate-50 border-slate-200 text-slate-700';
  return (
    <div className={`rounded-xl border p-2.5 ${colorClass}`}>
      <p className="mb-0.5 text-[10px] font-medium opacity-60">{horario}</p>
      <p className="text-xs font-bold leading-tight">{actividad}</p>
    </div>
  );
}

function ScheduleTable({ career }) {
  if (!career) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500">
        <p className="text-base font-medium">Seleccioná una carrera para ver su cronograma de actividades.</p>
      </div>
    );
  }

  return (
    <section id="cronograma" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-institutional-blue">Cronograma · Semana de Ambientación</p>
        <h3 className="mt-1 text-xl font-bold text-slate-900 md:text-2xl">{career.nombre}</h3>
        <p className="mt-1 text-sm text-slate-500">25 de marzo al 1 de abril · Horario nocturno 19:00 hs</p>
      </div>

      {/* Desktop grid */}
      <div className="hidden overflow-x-auto lg:block">
        <div className="grid min-w-[860px] grid-cols-6 gap-2">
          {DIAS.map((dia) => (
            <div key={dia.key} className="rounded-xl bg-amber-50 px-2 py-2 text-center text-xs font-bold text-amber-800 border border-amber-200">
              {dia.label}
            </div>
          ))}
          {DIAS.map((dia) => {
            const actividades = career.cronograma[dia.key] ?? [];
            return (
              <div key={dia.key} className="space-y-2">
                {actividades.map((act, i) => (
                  <ActivityCard key={i} actividad={act.actividad} horario={act.horario} />
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tablet: 3-col grid */}
      <div className="hidden sm:grid lg:hidden grid-cols-3 gap-3">
        {DIAS.map((dia) => {
          const actividades = career.cronograma[dia.key] ?? [];
          return (
            <div key={dia.key} className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-2 text-xs font-bold text-amber-700">{dia.label}</p>
              <div className="space-y-2">
                {actividades.map((act, i) => (
                  <ActivityCard key={i} actividad={act.actividad} horario={act.horario} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: 2-col */}
      <div className="grid grid-cols-2 gap-3 sm:hidden">
        {DIAS.map((dia) => {
          const actividades = career.cronograma[dia.key] ?? [];
          return (
            <div key={dia.key} className="rounded-2xl bg-slate-50 p-3">
              <p className="mb-2 text-xs font-bold text-amber-700">{dia.label}</p>
              <div className="space-y-2">
                {actividades.map((act, i) => (
                  <ActivityCard key={i} actividad={act.actividad} horario={act.horario} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">Referencias</p>
        <div className="flex flex-wrap gap-2">
          {LEGEND.map((item) => (
            <span key={item.label} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-700 ${item.color}`}>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScheduleTable;
