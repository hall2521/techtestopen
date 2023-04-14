# Project Name
Tech Test

## Description
This project is a tech test that was created as part of a hiring process.

### Installation
To install this project, follow these steps:

Clone this repository to your local machine using git clone https://github.com/hall2521/techtestopen.git
npm install any packages that are required
Create a MySQL database using the Dump in this repo

#### Usage
To use this project, use npm start.

##### Endpoints

##### Collections
Create - POST /api/collections/ <br />
Read all courses within a collection - GET /api/collections/:id
<br />
Read all collections - GET /api/collection/
<br />
Read one collection - GET /api/collection/getone/:id
<br />
Update - PUT /api/collection/:id
<br />
Delete - DELETE /api/collection/:id

##### Courses
Read all courses - GET /api/courses
<br />
Read one course - GET /api/courses/:id

Only available after token authentication

Create - POST /api/courses

Update - PUT /api/courses/:id

Delete - DELETE /api/courses/:id

##### Users

Login - POST /api/users/login

Register - POST /api/users/register

Only available after token authentication

Read all users - GET /api/users

Read one user - GET /api/users/:id

Update - PUT /api/users/:id

Delete - DELETE /api/users/:id);


###### Things to add:

- Encryption on passwords

- Fully completed unit testing

###### Credits
This project was created by Jonathan Hall.

