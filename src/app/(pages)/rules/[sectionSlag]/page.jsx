import { SectionBySlag } from '@/features/sectionBySlag';
import { TitlesOfSectionsRules } from '@/features/titlesOfSectionsRules';
import { rulesApiServer } from '@/shared/services';

import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const { sectionSlag } = params;
  const section = await rulesApiServer.getSection(sectionSlag);
  if (!section) return notFound();

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <TitlesOfSectionsRules />
      </div>
      <SectionBySlag section={section} />
    </div>
  );
}
