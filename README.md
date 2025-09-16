# Advanced Cypress - Test automation university

This is a learning repository for the [Advanced Cypress course on Test Automation university](https://testautomationu.applitools.com/advanced-cypress-tutorial/)

## Author

This material and the original course were created by Filip Hric, a Cypress ambassador and educator.

Author's GitHub Repository: [filiphric/cypress-advanced-tau](https://github.com/filiphric/cypress-advanced-tau)

## What’s in this repo

This repository serves as a personal record of my learning journey through the "Advanced Cypress" course from Test Automation University. It contains my solutions, notes, and code examples based on the course's content.

## Lessons learnt

- API testing
- Stubbing
- Custom Command

## Trello clone app

Bundled as a submodule is an app that is a clone of a popular [Trello app](https://trello.com). You can create boards, lists and cards. You can drag and drop cards between tests or even upload a picture to the card detail. There’s also a very simple signup and login which will allow you to create private boards

### Database

The application uses a json file for a database which you can find in `trelloapp/backend/data/database.json`. Uploaded files are in `trelloapp/backend/data/uploaded` folder.

# API documentation

**`GET`** `/api/boards`

Returns all boards

**example (unauthorized user):**

```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 27315982008,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 14254049205,
    "starred": true,
    "created": "2020-09-01"
  }
]
```

**example (authorized user):**

```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 27315982008,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 14254049205,
    "starred": true,
    "created": "2020-09-01"
  },
  {
    "name": "private board",
    "user": 1, // user id of the board author
    "id": 6606529940,
    "starred": false,
    "created": "2020-09-01"
  }
]
```

---

**`POST`** `/api/boards`

Creates a new board

**example request:**

```json
{
  "name": "moon landing 2"
}
```

**example response:**

```json
{
  "name": "moon landing 2",
  "user": 1,
  "id": 22559285486,
  "starred": false,
  "created": "2020-09-01"
}
```

---

**`GET`** `/api/boards/{boardId}`

Returns details of a board with given `boardId`

**example response:**

```json
{
  "name": "new project",
  "user": 0,
  "id": 27315982008,
  "starred": false,
  "created": "2020-09-01"
}
```

---

**`PATCH`** `/api/boards/{boardId}`

Changes details of a board with given `boardId`. `starred` and `name` attributes can be changed

**example request:**

```json
{
  "starred": true,
  "name": "project alpha"
}
```

---

**`DELETE`** `/api/boards/{boardId}`

Deletes a board with given `boardId`

---

**`GET`** `/api/lists`

Returns all lists
**example response**

```json
[
  {
    "boardId": 123456789,
    "name": "Groceries",
    "order": 0,
    "id": 68040017610,
    "created": "2022-01-26"
  },
  {
    "boardId": 987654321,
    "name": "Drugstore",
    "order": 1,
    "id": 87979775072,
    "created": "2022-02-11"
  }
]
```

---

**`GET`** `/api/lists?boardId={boardId}`

Returns all lists with given `boardId`

---

**`POST`** `/api/lists`

Creates a new list

**example request**

```json
{
  "boardId": {boardId}, // required
  "name": "to do"
}

```

---

**`PATCH`** `/api/lists/{listId}`

Changes details of a list with given `listId`.

**example request**

```json
{
  "name": "renamed list"
}
```

---

**`DELETE`** `/api/lists/{listId}`

Deletes a list with given `listId`.

---

**`POST`** `/api/cards`

Creates a new card

**example request**

```json
{
  "boardId": {boardId}, // required
  "listId": {listId}, // required
  "name": "buy milk"
}

```

---

**`PATCH`** `/api/cards/{cardId}`

Changes details of a card `cardId`

**example request**

```json
{
  "completed": true
}
```

---

**`DELETE`** `/api/cards/{cardId}`
Changes details of a card `cardId`

---

**`GET`** `/api/users`

Returns information for the current user

**example response**

```json
{
  "user": {
    "email": "filip@example.com",
    "password": "$2a$10$fdK.5O8uogdfjgklôjgd/gf90890NKLJ",
    "id": 1
  }
}
```

---

**`POST`** `/api/signup`

Creates a new user

**example request**

```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```

---

**`POST`** `/api/welcomeemail`

Sends a request for a welcome email

**príklad tela API volania:**

```json
{
  "email": "filip@example.com"
}
```

---

**`POST`** `/api/login`

Logs in a user

**example request**

```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```

---

## Special endpoints for handling database state

---

**`POST`** /api/reset

Deletes all boards, lists, cards and users

---

**`DELETE`** /api/boards

Deletes all boards, lists and cards

---

**`DELETE`** /api/lists

Deletes all lists and cards

---

**`DELETE`** /api/cards

Deletes all cards

---

**`DELETE`** /api/users

Deletes all users

---
