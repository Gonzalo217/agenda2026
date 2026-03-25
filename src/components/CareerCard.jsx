import {
  BriefcaseBusiness,
  Calculator,
  FlaskConical,
  Globe,
  HeartPulse,
  Landmark,
  Languages,
  Leaf,
  Palette
} from 'lucide-react';

const iconMap = {
  Calculator,
  Leaf,
  Palette,
  Landmark,
  Globe,
  Languages,
  BriefcaseBusiness,
  FlaskConical,
  HeartPulse
};

function CareerCard({ career, onSelect, isActive }) {
  const Icon = iconMap[career.icono] ?? Calculator;

  return (
    <article
      className={`rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-soft ${
        isActive ? 'border-institutional-blue ring-2 ring-institutional-lightBlue/50' : 'border-slate-200'
      }`}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-institutional-sky p-3 text-institutional-blue">
          <Icon size={24} />
        </div>
        <h3 className="text-base font-semibold text-slate-800">{career.nombre}</h3>
      </div>

      
    </article>
  );
}

export default CareerCard;
