import { createSlice } from '@reduxjs/toolkit';
import {
  apiTypesOfTests,
  apiTitlesOfSectionsTests,
  apiSectionDefaultTests,
  apiSectionRandomTests,
} from './operations';

const INITIAL_STATE = {
  types: {
    data: [],
    isLoading: false,
    isError: false,
  },
  titles: {
    data: [],
    isLoading: false,
    isError: false,
  },
  sectionDefault: {
    data: {},
    isLoading: false,
    isError: false,
  },
  sectionRandom: {
    data: {},
    isLoading: false,
    isError: false,
  },
};

const testsSlice = createSlice({
  name: 'tests',
  initialState: INITIAL_STATE,
  reducers: {
    clearSectionRandom: state => {
      state.sectionRandom = {
        data: {},
        isLoading: false,
        isError: false,
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(apiTypesOfTests.pending, state => {
        state.types.isLoading = true;
        state.types.isError = false;
      })
      .addCase(apiTypesOfTests.fulfilled, (state, action) => {
        state.types.isLoading = false;
        state.types.isError = false;
        state.types.data = action.payload;
      })
      .addCase(apiTypesOfTests.rejected, state => {
        state.types.isLoading = false;
        state.types.isError = true;
      })
      .addCase(apiTitlesOfSectionsTests.pending, state => {
        state.titles.isLoading = true;
        state.titles.isError = false;
      })
      .addCase(apiTitlesOfSectionsTests.fulfilled, (state, action) => {
        state.titles.isLoading = false;
        state.titles.isError = false;
        state.titles.data = action.payload;
      })
      .addCase(apiTitlesOfSectionsTests.rejected, state => {
        state.titles.isLoading = false;
        state.titles.isError = true;
      })
      .addCase(apiSectionDefaultTests.pending, state => {
        state.sectionDefault.isLoading = true;
        state.sectionDefault.isError = false;
      })
      .addCase(apiSectionDefaultTests.fulfilled, (state, action) => {
        state.sectionDefault.isLoading = false;
        state.sectionDefault.isError = false;
        // const { isSeries, data } = action.payload;
        // if (isSeries) {
        state.sectionDefault.data = action.payload;
        // };
      })
      .addCase(apiSectionDefaultTests.rejected, state => {
        state.sectionDefault.isLoading = false;
        state.sectionDefault.isError = true;
      })
      .addCase(apiSectionRandomTests.pending, state => {
        state.sectionRandom.isLoading = true;
        state.sectionRandom.isError = false;
      })
      .addCase(apiSectionRandomTests.fulfilled, (state, action) => {
        state.sectionRandom.isLoading = false;
        state.sectionRandom.isError = false;
        // const { isRandom, data } = action.payload;
        // if (isRandom) {
        state.sectionRandom.data = action.payload;
        // };
      })
      .addCase(apiSectionRandomTests.rejected, state => {
        state.sectionRandom.isLoading = false;
        state.sectionRandom.isError = true;
      });
  },
});

export const { clearSectionRandom } = testsSlice.actions;
export const testsReducer = testsSlice.reducer;
