const getData = () => {
  fetch('Web URL HERE', {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
    })
    .catch((error) => {
      console.error(error);
    });
};
