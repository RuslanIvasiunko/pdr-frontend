'use client';

import { useParams } from 'next/navigation';
import SectionDefaultTests from '../../../../components/SectionDefaulfTests.jsx';
import Timer from '../../../../components/Timer.jsx';
import TypesOfTests from '../../../../components/TypesOfTests.jsx';

export default function SectionPage() {
  const { sectionSlag } = useParams();
  const timerHeader = "Загальний час:";
  const isActive = true;

  return (
    <div>
      <TypesOfTests />
      <Timer 
        timerHeader={timerHeader}
        isActive={isActive}
      />
      <SectionDefaultTests 
        sectionSlag={sectionSlag} 
      />
    </div>
  );
}
