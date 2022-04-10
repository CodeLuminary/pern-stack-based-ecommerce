## Ecommerce website using Postgre, express, react and Node

## Start Development

Kindly fork and clone the repo 

## Installation

### FRONTEND INSTALLATION

cd or navigate to the frontend folder in your terminal and enter the following command 

```
npm install
```
### BACKEND INSTALLATION

cd or navigate to the backend folder in your terminal and enter the following command

``` 
npm install
```

## Setup

Create a .env file in the root directory of the backend folder and add the following properties

```markdown
PORT=?
DB_PORT = ?
DB_USER = ?
DB_HOST = ?
DB_DATABASE = ?
DB_PASSWORD = ?
#Set timezone, put 1 if it's GMT+1 or -1 if it's GMT-1
TIME_ZONE = ?
SKIP_PREFLIGHT_CHECK=true 
# You can set frontend url to any other url
FRONT_END_URL=http://localhost:3000 
```

## STARTING PROJECT

### STARTING FRONTEND PROJECT

cd to the frontend folder in your terminal and enter the following command

```
npm start
```

You can access the project in your browser by entering - `localhost:3000`

#### To set homepage to show products from local backend:

change the value of REACT_APP_PRODUCT_URL & REACT_APP_DOMAIN_URL in the .env file inside the frontend folder to your local backend url

```
REACT_APP_PRODUCT_URL=https://fakestoreapi.com/products

REACT_APP_BACKEND_URL=http://localhost:5000
```


### STARTING BACKEND PROJECT

cd to the backend folder in your terminal and enter the following command

```

#This is to run all test and make sure database connection is working and tables are created
#See test folder inside the backend folder for more info.

npm run test
```

```
npm start
```

## 🎩 Author

- IJONI VICTOR 😁😁😁

> Don't forget to star the project 😁😁 . Thanks
