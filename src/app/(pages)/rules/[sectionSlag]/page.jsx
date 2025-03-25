import { SectionBySlag } from '@/features/sectionBySlag';
import { TitlesOfSectionsRules } from '@/features/titlesOfSectionsRules';
import { rulesApi } from '@shared/services/rulesApi';

import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  const { sectionSlag } = params;
  const section = await rulesApi.getSection(sectionSlag);
  if (!section) return notFound();
  // console.log(section);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <TitlesOfSectionsRules />
      </div>
      <SectionBySlag section={section} />
    </div>
  );
}
