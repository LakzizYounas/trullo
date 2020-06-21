import { createSelector } from 'reselect';
import { getLastParam } from './router.utils';

const selectRouter = state => state.router;

export const selectLocation = createSelector(
  [selectRouter],
  router => router.location
);

export const selectPathname = createSelector(
  [selectLocation],
  location => location.pathname
);

export const selectLastParam = createSelector(
  [selectPathname],
  pathname => getLastParam(pathname)
);
