# Express CRUD API

## Overview
This project implements a clean Express.js CRUD API using an in-memory store, structured with modular controllers and routes for clarity.

## Features
- **GET /items**: Retrieve all items.
- **GET /items/:id**: Retrieve an item by ID.
- **POST /items**: Add a new item.
- **PUT /items/:id**: Update an existing item.
- **DELETE /items/:id**: Delete an item.

## Installation

```bash
npm install
```

## Running the Server

```bash
npm run dev
```
or
```bash
node server.js
```

## Testing the API

Use **Postman** or **cURL**:
- GET `http://localhost:3000/items`
- POST `http://localhost:3000/items` with JSON body:
```json
{
  "name": "Test Item",
  "description": "A test item for your CRUD API."
}
```
- PUT `http://localhost:3000/items/1` with updated data.
- DELETE `http://localhost:3000/items/1`

## Notes
- Uses `express.json()` for JSON body parsing.
- Includes error handling (404 & 500).
- Demonstrates a clean, maintainable structure.

## Author
Prepared by ChatGPT for your Express CRUD API learning and submission.
