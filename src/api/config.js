// api.js
export const fetchData = async () => {
  try {
    const phpResponse = await fetch('https://test.boaerd.com/static/js/data/index.php');
    const phpData = await phpResponse.json();
    const vehiclesArray = phpData.vehicles;
    return vehiclesArray;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
