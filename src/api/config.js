
export const fetchData = async () => {
  // Get the parts of the current URL
  const protocol = window.location.protocol;
  const host = window.location.host;
  const pathname = '/data/index.php'; // New pathname to merge.
  // Create the new URL without query parameters
  const newURL = `${protocol}//${host}${pathname}`;

  try {
    // const phpResponse = await fetch(newURL);
    const phpResponse = await fetch('http://127.0.0.1/rrcar/index.php');
    const phpData = await phpResponse.json();
    const vehiclesArray = phpData.vehicles;
    return vehiclesArray;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
