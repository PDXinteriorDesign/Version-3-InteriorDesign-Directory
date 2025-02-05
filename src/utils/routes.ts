export const generateLocationPath = (state: string, city?: string): string => {
  const formattedState = state.toLowerCase().replace(/\s+/g, '-');
  if (city) {
    const formattedCity = city.toLowerCase().replace(/\s+/g, '-');
    return `/location/${formattedState}/${formattedCity}`;
  }
  return `/location/${formattedState}`;
};