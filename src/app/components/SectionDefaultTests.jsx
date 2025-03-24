'use client';

import { apiSectionDefaultTests } from '../redux/tests/operations.js';
import { selectSectionDefaultTests } from '../redux/tests/selectors.js';
import SectionTests from './SectionTests.jsx';

const SectionDefaultTests = ({ sectionSlag }) => {
  const isRandom = false;
  return (
    <div>
      <SectionTests
        sectionSlag={sectionSlag}
        operation={apiSectionDefaultTests}
        selector={selectSectionDefaultTests}
        isRandom={isRandom}
      />
    </div>
  );
};

export default SectionDefaultTests;
