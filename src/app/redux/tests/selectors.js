import { createSelector } from '@reduxjs/toolkit';

export const selectTypesOfTests = state => state.tests.types.data;
export const selectTitlesOfSectionsTests = state => state.tests.titles.data;
export const selectSectionDefaultTests = state =>
  state.tests.sectionDefault.data;
export const selectSectionRandomTests = state => state.tests.sectionRandom.data;
