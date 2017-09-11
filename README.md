# random_name_resources
API to manage random names resources

## I am using nodejs version 8.4.0

### To run the app
- "npm install"  
- "npm run start-dev" or "npm start"

### List of name
> http://localhost:5000/api/names

### POST a new name
> http://localhost:5000/api/names
Example of data posted. Should be raw json data
> { "name": "Peter N." }

### GET a name by ID
> http://localhost:5000/api/names/:nameID

### UPDATE "PATCH" a name by ID
> http://localhost:5000/api/names/:nameID

### DELETE a name by ID
> http://localhost:5000/api/names/:nameID

## PENDING
> Validation of the parameters
