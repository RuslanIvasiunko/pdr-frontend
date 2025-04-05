import { testsApiServer } from '@/shared/services';
import Link from 'next/link.js';

export default async function TitlesOfSectionsTests() {
  const titles = await testsApiServer.getTitlesOfSectionsTests();

  return (
    <div>
      <ul>
        {Array.isArray(titles) &&
          titles.map(title => {
            return (
              <li
                key={title.slag}
                style={{
                  display: 'flex',
                  gap: '20px',
                }}
              >
                <h3>{title.title}</h3>
                <Link href={`/tests/sections/${title.slag}`}>
                  Послідовний порядок питань
                </Link>
                <Link href={`/tests/sections/${title.slag}/random`}>
                  Випадковий порядок питань
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
