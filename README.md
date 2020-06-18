# food-bw-practice-backend

### backend deployed at https://food-bw-practice-backend.herokuapp.com/

## Endpoints OVERVIEWS

### Auth Routes

| Method | Endpoint                        | Access Control      | Description                                        |
| ------ | ------------------------------- | ------------------- | -------------------------------------------------- |
| POST   | `/auth/business-owner/register` | none                | Registers a business & logs them in.               |
| POST   | `/auth/business-owner/login`    | none                | Logs the business in and returns a token.          |
| POST   | `/auth/customers/register`      | none                | Registers a customer & logs them in.               |
| POST   | `/auth/customers/login`         | none                | Logs the customer in and returns a token.          |

### Business Routes

| Method | Endpoint         | Access Control      | Description                                               |
| ------ | ---------------- | ------------------- | --------------------------------------------------------- |
| GET    | `/businesses/`   | none                | Returns all businesses in the database                    |
| GET    | `/businesses/:id`| none                | Returns all info and services for a single business by ID |
| PUT    | `/businesses/`   | none                | Updates a business info                                   |
| DELETE | `/businesses/`   | none                | Deletes the business                                      |

### Customer Routes

| Method | Endpoint                    | Access Control      | Description                                   |
| ------ | --------------------------- | ------------------- | ----------------------------------------------|
| GET    | `/customers/`               | none                | Returns all customers in the database         |
| GET    | `/customers/:id`            | none                | Returns single customer in the database by ID |
| GET    | `/customers/business/favs`  | none                | Returns singles customers fav businesses      |
| POST   | `/customers/businesses/favs`| none                | Adds business to a customers favorites        |
| PUT    | `/customers/`               | none                | Updates a customer's info                     |
| DELETE | `/customers/`               | none                | Deletes the customer                          |


### Services Routes

| Method | Endpoint       | Access Control      | Description                                 |
| ------ | -------------- | ------------------- | --------------------------------------------|
| GET    | `/services/`   | none                | Returns all services in the database        |
| GET    | `/services/:id`| none                | Returns all info for a single service by ID |
| POST   | `/services/`   | none                | Adds a service to the database              |
| PUT    | `/services/:id`| none                | Updates a services info                     |
| DELETE | `/services/:id`| none                | Deletes the service                         |

