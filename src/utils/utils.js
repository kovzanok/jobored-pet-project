export function searchParamsToObject(searchParams) {
  const initialObject = { published: 1 };
  if (searchParams.toString().length !== 0) {
    for (const [key, value] of searchParams.entries()) {
      initialObject[key] = decodeURI(value);
    }
  }

  return initialObject;
}
