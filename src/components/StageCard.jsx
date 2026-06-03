import { CheckCircle2, Clock } from 'lucide-react';

export default function StageCard({ stage }) {
  const isManual = stage.status === 'Manual Approval';

  return (
    <article className="stage-card">
      <div className="stage-icon">
        {isManual ? <Clock size={26} /> : <CheckCircle2 size={26} />}
      </div>
      <div>
        <h3>{stage.name}</h3>
        <p className={isManual ? 'status manual' : 'status'}>{stage.status}</p>
        <p>{stage.description}</p>
      </div>
    </article>
  );
}
