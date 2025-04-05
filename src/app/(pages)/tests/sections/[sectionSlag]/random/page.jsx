import { QuestionsOfSection } from '@/features/questionsOfSection';
import { TypesOfTests } from '@/features/typesOfTests';
import { Timer } from '@/shared/components/Timer';
import { testsApiServer } from '@/shared/services';

export default async function RandomPage({ params }) {
  const { sectionSlag } = params;
  const timerHeader = 'Загальний час:';
  const isActive = true;

  const sectionTests = await testsApiServer.getSectionRandomTests(sectionSlag);

  return (
    <div>
      <TypesOfTests />
      <Timer timerHeader={timerHeader} isActive={isActive} />
      <QuestionsOfSection sectionTests={sectionTests} />
    </div>
  );
}
