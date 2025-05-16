import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getSocialData} from '../../services/HomeService';

// Async thunk for fetching social data
export const fetchSocialData = createAsyncThunk(
  'social/fetchSocialData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await getSocialData();
      return response.response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = {
  socialLinks: {},
  homeTitle: '',
  homeImage: '',
  homeDescription: '',
  eventDate: '',
  location: {},
  guideProg: {},
  newsletter: {},
  exhibitorForm: {},
  exhibitors: {},
  attendees: {},
  oilField: {},
  aroundus: {},
  contentPages: {},
  loading: false,
  error: null,
};

const socialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchSocialData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSocialData.fulfilled, (state, action) => {
        state.loading = false;
        state.socialLinks = action.payload.social_links;
        state.homeTitle = action.payload.home_title;
        state.homeImage = action.payload.home_image;
        state.homeDescription = action.payload.home_description;
        state.eventDate = action.payload.event_date;
        state.location = action.payload.location;
        state.guideProg = action.payload.guideProg;
        state.newsletter = action.payload.newsletter;
        state.exhibitorForm = action.payload.exhibitor_form;
        state.exhibitors = action.payload.exhibitors;
        state.attendees = action.payload.attendees;
        state.oilField = action.payload.oilField;
        state.aroundus = action.payload.aroundus;
        state.contentPages = action.payload.content_pages;
      })
      .addCase(fetchSocialData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default socialSlice.reducer;
