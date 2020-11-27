const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const baseURL = 'https://jsonplaceholder.typicode.com/users';

router.get('/', function(req, res) {
  const url = baseURL;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });

});

router.get('/:id', function(req,res) {
  const userID = req.params.id || '';
  const url = `${baseURL}/${userID}`;

  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });
});

router.post('/', function(req, res) {
  const url = baseURL;

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-type': 'application/json',
    },
  })
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });
});

router.put('/:id', function(req, res) {
  const userID = req.params.id || '';
  const url = `${baseURL}/${userID}`;

  fetch(url, {
    method: 'PUT',
    body: JSON.stringify(req.body),
    headers: {
      'Content-type': 'application/json',
    },
  })
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });
});

router.delete('/:id', function(req, res) {
  const userID = req.params.id || '';
  const url = `${baseURL}/${userID}`;

  fetch(url, {
    method: 'DELETE',
  })
  .then((res) => res.json())
  .then((data) => {
    res.send({ data });
  })
  .catch((err) => {
    res.send(err);
  });
});

module.exports = router;
