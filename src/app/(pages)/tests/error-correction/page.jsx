import { QuestionsOfSection } from '@/features/questionsOfSection';
import { Timer } from '@/shared/components/Timer';
import ClientErrorCorrection from '@/shared/components/ClientErrorCorrection/ClientErrorCorrection';
import { TypesOfTests } from '@/features/typesOfTests';

export default function ErrorCorrectionPage({}) {
  const timerHeader = 'Загальний час:';
  const isActive = true;

  return (
    <div>
      <TypesOfTests />
      <Timer timerHeader={timerHeader} isActive={isActive} />
      <ClientErrorCorrection />
    </div>
  );
}
