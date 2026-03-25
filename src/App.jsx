import { useEffect, useMemo, useState } from 'react';
import { ArrowUp, BookOpen, ClipboardList, Download, GraduationCap, MapPin, Phone, School, ScrollText, Users } from 'lucide-react';
import CareerCard from './components/CareerCard';
import Bienvenida from './components/Bienvenida';
import ActoBienvenida from './components/ActoBienvenida';
import Reglamento from './components/Reglamento';
import Organigrama from './components/Organigrama';
import Encuesta from './components/Encuesta';
import Becas from './components/Becas';
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
              { href: '#bienvenida', label: 'Bienvenida' },
              { href: '#reglamento', label: 'Reglamento' },
              { href: '#organigrama', label: 'Organigrama' },
              { href: '#becas', label: 'Becas' },
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
              src="/logo-ies-recreo.png"
              alt="Logo Instituto de Educación Superior Recreo"
              className="h-24 w-24 object-contain drop-shadow-lg"
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
                <a href="#bienvenida" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <ScrollText size={16} /> Mensaje de la Rectora
                </a>
                <a href="#becas" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <GraduationCap size={16} /> Becas Progresar
                </a>
                <a href="#reglamento" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <BookOpen size={16} /> Reglamento
                </a>
                <a href="#organigrama" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <Users size={16} /> Organigrama
                </a>
                <a href="#encuesta" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <ClipboardList size={16} /> Encuesta
                </a>
              </div>
          </div>
        </div>
      </header>

      <main>
        <Bienvenida />
        <ActoBienvenida />
        <Organigrama />
        <Reglamento />
        <Becas />
        <Encuesta />
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

        <section className="bg-institutional-blue text-white">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Información útil</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <MapPin className="mb-2" />
                <h3 className="font-semibold">Dirección</h3>
                <p className="text-sm text-sky-100">Dr Raul Sabagh 31 - Recreo, La Paz, Catamarca.</p>
              </article>
              <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <School className="mb-2" />
                <h3 className="font-semibold">Horarios de atención</h3>
                <p className="text-sm text-sky-100">Lunes a viernes de 19:00 a 00:00.</p>
              </article>
              <article className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <Phone className="mb-2" />
                <h3 className="font-semibold">Contacto institucional</h3>
                <p className="text-sm text-sky-100">(+54) 3832-688376 / (+54) 3834-790509 iesrecreo@catamarca.edu.a</p>
              </article>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              
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
