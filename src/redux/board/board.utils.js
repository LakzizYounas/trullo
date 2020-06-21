export const boardsToArray = (byNames, allNames) =>
  allNames.map(e => byNames.get(e))
    .toArray()
    .filter(e => e !== undefined);