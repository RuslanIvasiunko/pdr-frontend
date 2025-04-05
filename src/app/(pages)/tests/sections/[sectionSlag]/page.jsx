import { TypesOfTests } from '@/features/typesOfTests';
import { Timer } from '@/shared/components/Timer';
import { QuestionsOfSection } from '@/features/questionsOfSection';
import { testsApiServer } from '@/shared/services';

export default async function DefaultPage({ params }) {
  const { sectionSlag } = params;
  const timerHeader = 'Загальний час:';
  const isActive = true;
  const isRandom = 'false';

  const sectionTests = await testsApiServer.getSectionDefaultTests(sectionSlag);

  return (
    <div>
      <TypesOfTests />
      <Timer timerHeader={timerHeader} isActive={isActive} />
      <QuestionsOfSection sectionTests={sectionTests} />
    </div>
  );
}
