const getData = (loading) => {
  fetch('Web URL HERE', {
    method: 'GET'
  })
  .then((response) => response.json())
};
