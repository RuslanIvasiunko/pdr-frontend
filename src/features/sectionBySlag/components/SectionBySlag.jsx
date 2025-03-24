import { RulesList } from '@/shared/components/RulesList';
import { SignsList } from '@/shared/components/SignsList';
import { AllSignsList } from '@/shared/components/AllSignsList';

import s from './styles.module.scss';

import { notFound } from 'next/navigation';

const SectionBySlag = async ({ section }) => {
  if (!section) return notFound(); // Показываем страницу 404, если данных нет
  // console.log('section content:', section.content);
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 3 }}>
        <h1>{section.title}</h1>
        {section.content.length > 0 ? (
          <RulesList data={section.content} />
        ) : section.signs.length > 0 ? (
          <SignsList signs={section.signs} />
        ) : section.allSigns.length > 0 ? (
          <AllSignsList allSigns={section.allSigns} />
        ) : (
          <p>Немає даних для відображення.</p>
        )}
      </div>
    </div>
  );
};

export default SectionBySlag;
