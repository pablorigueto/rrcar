
export const fetchData = async () => {

  const data = window.location.href + 'data/index.php';

  try {
    const phpResponse = await fetch(data);
    //const phpResponse = await fetch('https://test.boaerd.com/data/index.php');
    const phpData = await phpResponse.json();
    const vehiclesArray = phpData.vehicles;
    return vehiclesArray;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
