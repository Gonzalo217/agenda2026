import { Users } from 'lucide-react';

function OrgNode({ title, name, color = 'bg-white', textColor = 'text-slate-800', borderColor = 'border-slate-200', small = false }) {
  return (
    <div className={`rounded-xl border-2 px-3 py-2.5 text-center shadow-sm ${color} ${borderColor} ${small ? 'text-xs' : 'text-sm'}`}>
      <p className={`font-bold leading-tight ${textColor} ${small ? 'text-xs' : 'text-sm'}`}>{title}</p>
      {name && <p className={`mt-0.5 font-medium opacity-80 ${textColor} ${small ? 'text-[10px]' : 'text-xs'}`}>{name}</p>}
    </div>
  );
}

function Connector() {
  return <div className="mx-auto h-5 w-px bg-slate-300" />;
}

function HorizontalGroup({ children, label }) {
  return (
    <div>
      {label && (
        <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">{label}</p>
      )}
      <div className="flex items-start justify-center gap-2">
        {children}
      </div>
    </div>
  );
}

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

        <div className="overflow-x-auto">
          <div className="min-w-[700px] space-y-0">

            {/* Rector */}
            <div className="mx-auto w-52">
              <OrgNode
                title="RECTORA"
                name="Martínez, María"
                color="bg-institutional-blue"
                textColor="text-white"
                borderColor="border-institutional-blue"
              />
            </div>
            <Connector />

            {/* Level 2: Sec Académica | Consejo Directivo | Sec Técnica */}
            <div className="relative flex items-start justify-center gap-4">
              {/* Left branch line */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2">
                <div className="h-px w-64 bg-slate-300 relative top-0 -translate-y-1/2" style={{position:'absolute', top:'0', left:'-128px'}} />
              </div>

              <div className="w-44">
                <OrgNode
                  title="Sec. Académica"
                  name="Martínez, María"
                  color="bg-green-50"
                  textColor="text-green-900"
                  borderColor="border-green-300"
                />
              </div>

              <div className="w-52">
                <OrgNode
                  title="Consejo Directivo"
                  name="4 doc · 3 est · 1 grad · 1 adm"
                  color="bg-slate-200"
                  textColor="text-slate-800"
                  borderColor="border-slate-400"
                />
              </div>

              <div className="w-44">
                <OrgNode
                  title="Sec. Técnica"
                  name="Tobares, Nancy"
                  color="bg-amber-50"
                  textColor="text-amber-900"
                  borderColor="border-amber-300"
                />
              </div>
            </div>

            <Connector />

            {/* Level 3: 4 jefaturas */}
            <HorizontalGroup label="Jefaturas">
              <div className="w-40">
                <OrgNode
                  title="Jef. de Grado"
                  name="Díaz, Dana"
                  color="bg-sky-50"
                  textColor="text-sky-900"
                  borderColor="border-sky-300"
                />
              </div>
              <div className="w-44">
                <OrgNode
                  title="Jef. de Investigación"
                  name="Fogonza, Sonia"
                  color="bg-sky-50"
                  textColor="text-sky-900"
                  borderColor="border-sky-300"
                />
              </div>
              <div className="w-48">
                <OrgNode
                  title="Jef. Cap. y Ext."
                  name="López, Francisco"
                  color="bg-sky-50"
                  textColor="text-sky-900"
                  borderColor="border-sky-300"
                />
              </div>
              <div className="w-44">
                <OrgNode
                  title="Jef. de Alumnos"
                  name="Herrera, Patricia"
                  color="bg-sky-50"
                  textColor="text-sky-900"
                  borderColor="border-sky-300"
                />
              </div>
            </HorizontalGroup>

            <Connector />

            {/* Level 4 */}
            <HorizontalGroup label="Áreas y Personal">
              <div className="w-40">
                <OrgNode title="Coord. de Carrera" color="bg-slate-100" borderColor="border-slate-300" small />
              </div>
              <div className="w-44">
                <OrgNode title="Referente TICs" color="bg-slate-100" borderColor="border-slate-300" small />
              </div>
              <div className="w-48">
                <OrgNode title="CIPES" color="bg-slate-100" borderColor="border-slate-300" small />
              </div>
              <div className="w-44 space-y-1.5">
                <OrgNode title="Bedeles: 4" color="bg-slate-100" borderColor="border-slate-300" small />
                <OrgNode title="Aux. Administrativo: 1" color="bg-slate-100" borderColor="border-slate-300" small />
              </div>
            </HorizontalGroup>

            <Connector />

            {/* Level 5: base */}
            <HorizontalGroup label="Comunidad Educativa">
              <div className="w-40">
                <OrgNode
                  title="Docentes"
                  name="190 docentes"
                  color="bg-institutional-sky"
                  textColor="text-institutional-blue"
                  borderColor="border-institutional-lightBlue"
                  small
                />
              </div>
              <div className="w-44">
                <OrgNode
                  title="Centro de Estudiantes"
                  color="bg-institutional-sky"
                  textColor="text-institutional-blue"
                  borderColor="border-institutional-lightBlue"
                  small
                />
              </div>
              <div className="w-48">
                <OrgNode
                  title="Alumnos"
                  color="bg-institutional-sky"
                  textColor="text-institutional-blue"
                  borderColor="border-institutional-lightBlue"
                  small
                />
              </div>
              <div className="w-44">
                <OrgNode
                  title="Maestranza"
                  name="3 personas"
                  color="bg-slate-100"
                  borderColor="border-slate-300"
                  small
                />
              </div>
            </HorizontalGroup>

          </div>
        </div>

        <p className="mt-8 text-xs text-slate-400">
          * Organigrama vigente al inicio del ciclo lectivo 2026.
        </p>
      </div>
    </section>
  );
}

export default Organigrama;
