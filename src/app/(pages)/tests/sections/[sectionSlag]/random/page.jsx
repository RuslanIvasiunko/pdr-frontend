'use client';

import { useParams } from 'next/navigation';

import TypesOfTests from '../../../../../components/TypesOfTests.jsx';
import SectionRandomTests from '../../../../../components/SectionRandomTests.jsx';
import Timer from '../../../../../components/Timer.jsx';

export default function RandomPage() {
  const { sectionSlag } = useParams();
  const timerHeader = "Загальний час:";

  return (
    <div>
      <TypesOfTests />
      <Timer 
        timerHeader={timerHeader}
      />
      <SectionRandomTests sectionSlag={sectionSlag} />
    </div>
  );
}
