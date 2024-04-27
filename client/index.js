fetch('http://localhost:9659/api/post-suggest-stack', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ "prompt": 'LOL' })
})
  .then(response => response.text())
  .then(data => {
    console.log(data); // Handle the response data
  })
  .catch(error => {
    console.error('Error sending data:', error);
  });