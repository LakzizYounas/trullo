export const boardsToArray = (byIds, allIds) =>
  allIds.map(e => byIds.get(e))
    .toArray()
    .filter(e => e !== undefined);