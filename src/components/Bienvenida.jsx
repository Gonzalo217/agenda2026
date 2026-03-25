import { Quote } from 'lucide-react';

function Bienvenida() {
  return (
    <section id="bienvenida" className="relative overflow-hidden bg-institutional-blue text-white">

      {/* Círculos decorativos de fondo */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">

        {/* Header */}
        <div className="mb-10 flex items-center gap-3">
          <div className="rounded-xl bg-white/15 p-2 backdrop-blur">
            <Quote size={20} className="text-sky-200" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Mensaje de la Rectora</p>
            <h2 className="text-3xl font-bold text-white">Un nuevo comienzo</h2>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-3">

          {/* Texto principal — ocupa 2 cols */}
          <div className="space-y-5 md:col-span-2">
            <p className="text-base leading-relaxed text-sky-100">
              Es un verdadero honor darles la bienvenida a este nuevo comienzo, a este primer paso en un camino que, sin dudas, marcará sus vidas. Hoy reciben no solo el saludo del Instituto de Estudios Superiores Recreo, sino también el abrazo simbólico de toda una comunidad educativa que los recibe con alegría, esperanza y compromiso.
            </p>
            <p className="text-base leading-relaxed text-sky-100">
              Queridos ingresantes de primer año: hoy comienzan una etapa llena de desafíos, aprendizajes y crecimiento. Han elegido formarse, superarse, apostar por ustedes mismos, y eso ya es un gran logro. Este Instituto será, desde hoy, un espacio de encuentro, de construcción de conocimientos, de intercambio de ideas y de formación no solo académica, sino también humana.
            </p>
            <p className="text-base leading-relaxed text-sky-100">
              Sabemos que iniciar este camino puede generar incertidumbre, dudas o temores. Pero también está lleno de oportunidades. Aquí encontrarán docentes comprometidos, compañeros con quienes compartirán experiencias y un equipo que estará dispuesto a acompañarlos en cada paso.
            </p>
            <p className="text-base leading-relaxed text-sky-100">
              Los invitamos a transitar esta etapa con responsabilidad, con esfuerzo, pero también con entusiasmo y sentido de pertenencia. Que cada clase, cada trabajo, cada encuentro sea una oportunidad para crecer, para preguntar, para construir, para equivocarse y volver a intentar.
            </p>

            {/* Cita destacada */}
            <div className="relative rounded-2xl bg-white/10 p-6 backdrop-blur">
              <Quote size={28} className="mb-3 text-sky-300/60" />
              <p className="text-lg font-semibold italic leading-relaxed text-white">
                Confíen en sus capacidades, anímense a soñar en grande y no pierdan de vista el objetivo que los trajo hasta aquí.
              </p>
            </div>

            <p className="text-base leading-relaxed text-sky-100">
              Este es el inicio de un gran desafío, pero también de una hermosa etapa.
            </p>
            <p className="text-base font-bold text-white">
              Bienvenidos al Instituto de Estudios Superiores Recreo.<br />
              Bienvenidos a esta nueva historia que hoy comienzan a escribir.
            </p>
            <p className="text-sm text-sky-200">Muchas gracias.</p>
          </div>

          {/* Card firma — 1 col */}
          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-2xl font-extrabold text-white">
                MV
              </div>
              <p className="text-lg font-bold text-white">Esp. María del Valle Martínez</p>
              <p className="mt-1 text-sm text-sky-300">Rectora</p>
              <p className="text-sm text-sky-300">IES Recreo</p>
              <div className="mt-5 h-px bg-white/20" />
              <p className="mt-4 text-xs leading-relaxed text-sky-200">
                "Aprender transforma, enseñar inspira y acompañar construye futuro."
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur text-center">
              <p className="text-3xl font-extrabold text-sky-300">2026</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sky-200">Semana de Ambientación</p>
              <p className="mt-1 text-xs text-sky-300"></p> 
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Bienvenida;
