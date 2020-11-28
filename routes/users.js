const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

const baseURL = 'https://jsonplaceholder.typicode.com/users';

/**
 * @swagger
 * components:
 *   schemas:
 *     NewUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The user's name.
 *           example: Leanne Graham
 *     User:
 *       allOf:
 *         - type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: The user ID.
 *               example: 0
 *         - $ref: '#/components/schemas/NewUser'
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
*/
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

/**
 * @swagger
 * /users/:id:
 *   get:
 *     summary: Retrieve a single JSONPlaceholder user.
 *     description: Retrieve a single JSONPlaceholder user. Can be used to populate a user profile when prototyping or testing an API.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/User'
*/
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

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a JSONPlaceholder user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewUser'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/User'
*/
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
