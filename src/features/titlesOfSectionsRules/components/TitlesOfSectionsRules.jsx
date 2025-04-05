import Link from 'next/link';
import { notFound } from 'next/navigation';

import { rulesApiServer } from '@/shared/services';

import s from './styles.module.scss';

export default async function TitlesOfSectionsRules() {
  const sections = await rulesApiServer.getTitlesOfSections();

  if (!sections) return notFound();

  return (
    <div>
      <Link href="/rules">Зміст</Link>
      <ul>
        {Array.isArray(sections) &&
          sections.map(section => {
            return (
              <li key={section.slag}>
                <Link href={`/rules/${section.slag}`}>{section.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
