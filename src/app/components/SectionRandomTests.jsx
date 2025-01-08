'use client';

import { apiSectionRandomTests } from '../redux/tests/operations.js';
import { selectSectionRandomTests } from '../redux/tests/selectors.js';

import SectionTests from './SectionTests.jsx';

const SectionRandomTests = ({ sectionSlag }) => {
const isRandom = true;
  return (
    <div>
      <SectionTests
        sectionSlag={sectionSlag}
        operation={apiSectionRandomTests}
        selector={selectSectionRandomTests}
        isRandom={isRandom}
      />
    </div>
  );
};

export default SectionRandomTests;
