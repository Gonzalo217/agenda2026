import { useEffect, useMemo, useState } from 'react';
import { ArrowUp, BookOpen, ClipboardList, Download, MapPin, Phone, School, ScrollText } from 'lucide-react';
import CareerCard from './components/CareerCard';
import ScheduleTable from './components/ScheduleTable';
import Reglamento from './components/Reglamento';
import Organigrama from './components/Organigrama';
import Encuesta from './components/Encuesta';
import schedules from './data/schedules.json';

const STORAGE_KEY = 'ies-recreo-selected-career';

function App() {
  const allCareers = useMemo(
    () => [...schedules.formacionDocente, ...schedules.formacionTecnica],
    []
  );

  const [selectedCareer, setSelectedCareer] = useState(null);

  useEffect(() => {
    const storedCareerId = localStorage.getItem(STORAGE_KEY);
    if (!storedCareerId) return;
    const found = allCareers.find((career) => career.id === storedCareerId);
    if (found) setSelectedCareer(found);
  }, [allCareers]);

  const handleSelectCareer = (career) => {
    setSelectedCareer(career);
    localStorage.setItem(STORAGE_KEY, career.id);
    setTimeout(() => {
      document.getElementById('cronograma')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <div id="top" className="text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-institutional-blue/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <span className="shrink-0 text-sm font-bold text-white">IES Recreo · 2026</span>
          <div className="flex gap-1 overflow-x-auto text-xs">
            {[
              { href: '#oferta-academica', label: 'Carreras' },
              { href: '#cronograma', label: 'Cronograma' },
              { href: '#reglamento', label: 'Reglamento' },
              { href: '#organigrama', label: 'Organigrama' },
              { href: '#encuesta', label: 'Encuesta' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-lg px-3 py-1.5 font-semibold text-sky-100 transition hover:bg-white/15 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <header className="bg-hero bg-cover bg-center text-white">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-14">
          <div className="mb-10 flex items-center gap-4">
            <img
              src="/logo-ies-recreo.svg"
              alt="Logo Instituto de Educación Superior Recreo"
              className="h-20 w-20 rounded-xl border border-white/30 bg-white/15 object-contain p-2 backdrop-blur"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sky-100">Instituto de Educación Superior Recreo</p>
              <h1 className="text-lg font-bold md:text-2xl">Agenda Digital 2026</h1>
            </div>
          </div>

          <div className="max-w-3xl space-y-6">
            <p className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-sky-50 backdrop-blur">
              Semana de los Ingresantes
            </p>
            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Bienvenidos a la Semana de los Ingresantes 2026
            </h2>
            <p className="text-lg text-sky-100 md:text-xl">
              Tu primer paso en la educación superior comienza aquí.
            </p>
            <p className="max-w-2xl text-sm text-sky-100 md:text-base">
              Desde el IES Recreo te damos la bienvenida con una propuesta de acompañamiento integral para que inicies
              esta nueva etapa con confianza, información clara e identidad institucional.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#oferta-academica" className="inline-flex items-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-institutional-blue transition hover:bg-slate-100">
                Elegí tu carrera
              </a>
              <a href="#reglamento" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <BookOpen size={16} /> Ver Reglamento
              </a>
              <a href="#encuesta" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                <ClipboardList size={16} /> Encuesta
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="oferta-academica" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-10 flex items-center gap-3">
            <School className="text-institutional-blue" />
            <h2 className="text-3xl font-bold text-slate-900">Oferta Académica</h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-3xl bg-institutional-sky/35 p-6">
              <h3 className="mb-5 text-xl font-bold text-institutional-blue">🎓 Formación Docente</h3>
              <div className="grid gap-4">
                {schedules.formacionDocente.map((career) => (
                  <CareerCard key={career.id} career={career} onSelect={handleSelectCareer} isActive={selectedCareer?.id === career.id} />
                ))}
              </div>
            </div>
            <div className="rounded-3xl bg-institutional-gray/40 p-6">
              <h3 className="mb-5 text-xl font-bold text-institutional-blue">🏢 Formación Técnica</h3>
              <div className="grid gap-4">
                {schedules.formacionTecnica.map((career) => (
                  <CareerCard key={career.id} career={career} onSelect={handleSelectCareer} isActive={selectedCareer?.id === career.id} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 transition-all duration-500">
          <ScheduleTable career={selectedCareer} />
        </section>

        <Reglamento />
        <Organigrama />
        <Encuesta />

        <section className="bg-white">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-2">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-institutional-blue">
                <ScrollText size={18} /> Mensaje Institucional
              </p>
              <h2 className="mb-4 text-3xl font-bold text-slate-900">Acompañamos tus primeros pasos</h2>
              <p className="mb-4 text-slate-700">
                Instituto de Educación Superior Recreo te da la bienvenida. Estamos comprometidos con tu formación académica y profesional. Durante esta semana conocerás tu carrera, docentes y compañeros.
              </p>
              <p className="rounded-xl border-l-4 border-institutional-blue bg-institutional-sky/40 p-4 text-lg font-medium text-slate-800">
                "Aprender transforma, enseñar inspira y acompañar construye futuro".
              </p>
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
                alt="Estudiantes compartiendo actividades institucionales"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-institutional-blue text-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Información útil</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <MapPin className="mb-2" />
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-sm text-sky-100">Instituto de Educación Superior Recreo, Catamarca, Argentina.</p>
              </article>
              <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <School className="mb-2" />
                <h3 className="font-semibold">Horarios de atención</h3>
                <p className="text-sm text-sky-100">Lunes a viernes de 08:00 a 12:30 y de 14:00 a 20:00.</p>
              </article>
              <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <Phone className="mb-2" />
                <h3 className="font-semibold">Contacto institucional</h3>
                <p className="text-sm text-sky-100">+54 383 000 000 | ingresantes2026@iesrecreo.edu.ar</p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/cronograma-ingresantes-2026.pdf" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-institutional-blue transition hover:bg-slate-100">
                <Download size={18} /> Descargar cronograma en PDF
              </a>
              <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
                <ArrowUp size={18} /> Volver arriba
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
