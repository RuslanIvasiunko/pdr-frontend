import Link from 'next/link';

import { rulesApi } from '@/shared/services';

import s from './styles.module.scss';
import { notFound } from 'next/navigation';

export default async function TitlesOfSectionsRules() {
  const sections = await rulesApi.getTitlesOfSections();
  if (!sections) return notFound();
  return (
    <div>
      <Link href="/rules">Зміст</Link>
      <ul>
        {Array.isArray(sections) &&
          sections.map(section => {
            return (
              <li key={section.slag}>
                <Link href={`/rules/${section.slag}`}>
                  <button>{section.title}</button>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

// export default TitlesOfSectionsRules;

// import Link from 'next/link.js';

// import { apiTitlesOfSectionsRules } from '../redux/rules/operations.js';

//     dispatch(apiTitlesOfSectionsRules());
