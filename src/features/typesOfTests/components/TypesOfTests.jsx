import Link from 'next/link.js';

import { testsApiServer } from '@/shared/services';

import s from './styles.module.scss';

export default async function TypesOfTests() {
  const types = await testsApiServer.getTypesOfTests();

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: '15px',
          listStyleType: 'none',
        }}
      >
        {Array.isArray(types) &&
          types.map((type, index) => {
            return (
              <li key={index} style={{}}>
                <Link href={`/tests/${type.href}`}>{type.title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
