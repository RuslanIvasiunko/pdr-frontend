import React from 'react';

import { TitlesOfSectionsRules } from '@/features/titlesOfSectionsRules';
import { rulesApi } from '@/shared/services';

export default async function Page() {
  const sections = await rulesApi.getTitlesOfSections();
  return (
    <div>
      <TitlesOfSectionsRules sections={sections} />
    </div>
  );
}
