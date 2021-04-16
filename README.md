# Express API for JSONPlaceholder

This is a REST API application made with Express. It retrieves user data from [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

This Express API was created for [How to Generate Documentation for an Express API with Swagger UI and JSDoc]https://dev.to/kabartolo/how-to-document-an-express-api-with-swagger-ui-and-jsdoc-50do).

## Installation

First, clone the repository:

```sh
git clone https://github.com/kabartolo/jsonplaceholder-express-api test-api 

```

Replace `test-api` with the directory name of your choosing.

Next, run the following commands to start the Express server:

```sh
cd test-api
npm install
npm run start

```

**Navigate** to `localhost:3000` to see the API. You should see links to `/users` and `/users/1`. Navigate to one of these to see user data from JSONPlaceholder.

This API currently provides a User resource only. It corresponds to the `/users` endpoints from JSONPlaceholder. You can use POST and DELETE with this route, but no changes are actually made to the JSONPlaceholder data, and none of your data is stored. See the [usage examples](#usage-examples) to start experimenting!

## Sample JSONPlaceholder User

```sh
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
```

## Usage Examples

The following examples use a base URL of `http://localhost:3000`, which is the default development server for Express.

**GET /users**

Retrieve a list of users:

```sh
curl http://localhost:3000/users
```

**GET /users/{id}**

Retrieve a single user:

```sh
curl http://localhost:3000/users/1
```
**POST /users**

Create a user:

```sh
curl -H "Content-Type: application/json" -d '{"name":"Mario"}' http://localhost:3000/users
```

**PUT /users/{id}**

Update a user:

```sh
curl -H "Content-Type: application/json" -X PUT -d '{"name":"Luigi"}' http://localhost:3000/users/1
```

**DELETE /users/{id}**

Delete a user:

```sh
curl -X DELETE http://localhost:3000/users/1
```
