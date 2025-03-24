'use client';

import React, { useEffect, useState } from 'react';
import TypesOfTests from '../../../components/TypesOfTests.jsx';
import { getErrors } from '@/utils/errors.js';
import QuestionsOfSection from '@/app/components/QuestionsOfSection.jsx';

export default function ErrorCorrectionPage({}) {
  const [sectionTests, setSectionTests] = useState({});

  useEffect(() => {
    const errors = getErrors();
    setSectionTests({
      slag: 'section0',
      title: 'Робота над помилками',
      content: errors.length ? errors : [],
    });
  }, []);

  return (
    <div>
      <TypesOfTests />
      <QuestionsOfSection sectionTests={sectionTests} />
    </div>
  );
}
