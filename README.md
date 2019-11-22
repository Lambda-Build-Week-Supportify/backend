# Supportify

*Introduction*
`https://documenter.getpostman.com/view/6222631/SW7Z49AQ?version=latest`
Connects users, schools and issues together

## Overview
Hit the endpoints below with axiosWithAuth() to retrieve data. I'll let you know which fields are required in order to get a successful response. (note: this document will be evolving, check back regularly);

## Authentication
Front end will use axiosWithAuth and grab a token generated by the back end.

## Error Codes
What errors and status codes can a user expect?

`Anything between 200 and 299 signifies success. Usualy it will be 200 or 201. `

`200 means that you got back existing information that you requested from the server/database`

`201 means that you've successfully made a post request and created something new.`

`Anything between 400-499 is an error. Usually you will get back either 400 or 401 in the case of an error.`

`400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).`

`401 The HTTP 401 Unauthorized client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.`

`500 this status probably means there's something wrong with our backend logic.`

## Rate limit

no rate limit set yet

## Language

users

## [GET] get all users

`https://supportifyafrica.herokuapp.com/api/users`

*HEADERS*
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInVzZXJuYW1lIjoiYmlsbDEyMzQiLCJpYXQiOjE1NzQwNDMzOTAsImV4cCI6MTU3NDEyOTc5MH0.6-YOJSSrgL3UgaEBTwoFtCbe59MAD35bMbEmgdV185E

### Example Request

get all users
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/users" \

  --header "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUsInVzZXJuYW1lIjoiYmlsbDEyMzQiLCJpYXQiOjE1NzQwNDMzOTAsImV4cCI6MTU3NDEyOTc5MH0.6-YOJSSrgL3UgaEBTwoFtCbe59MAD35bMbEmgdV185E" \
  
  --data ""
  
## [GET] get user by user_id

`https://supportifyafrica.herokuapp.com/api/users/11`


### Example Request

get user by user_id
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/users/11"

## [POST] login user

`https://supportifyafrica.herokuapp.com/api/auth/login`

*HEADERS*
Content-Typeapplication/json

BODY raw
{
	"username": "Test61",
	"password": "1234"
}


### Example Request

login user
curl --location --request POST "https://supportifyafrica.herokuapp.com/api/auth/login" \
  --header "Content-Type: application/json" \
  --data "{
	\"username\": \"Test61\",
	\"password\": \"1234\"
}"

## [POST] register new user

`https://supportifyafrica.herokuapp.com/api/auth/register`

Required fields:

Type: Unique: Field:
text - yes - user_name

text - password

text - first_name

text - last_name

text - email

text - city

text - state

unique means the field can only be used once in a databse.

Fields: board, primary_admin, sec_admin are defaulted to false.

*HEADERS*
Content-Typeapplication/json

BODY raw
{
	"username": "wizard2",
	"password": "1234",
	"first_name": "Test Wizar",
	"last_name": "Smith",
	"email": "test1234@school.com",
	"city": "San Dimas",
	"state": "CA",
	"board": false,
	"primary_admin": true,
	"sec_admin": false
}


### Example Request

curl --location --request POST "https://supportifyafrica.herokuapp.com/api/auth/register" \
  --header "Content-Type: application/json" \
  --data "{
	\"username\": \"Test71\",
	\"password\": \"1234\",
	\"first_name\": \"Test\",
	\"last_name\": \"Smith\",
	\"email\": \"test1234@school.com\",
	\"city\": \"San Dimas\",
	\"state\": \"CA\",
	\"board\": false,
	\"primary_admin\": true,
	\"sec_admin\": false
}"

### Example Response

201 － Created

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsInVzZXJuYW1lIjoiVGVzdDcxIiwiYm9hcmQiOmZhbHNlLCJwcmltYXJ5X2FkbWluIjp0cnVlLCJzZWNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NzQyMzQ2NTAsImV4cCI6MTU3NDMyMTA1MH0.HQH090Xj-RrlPLloWAKdjUl4OaEA5f-SOFz-tISLbQ4",
  "newUser": {
    "user_id": 7,
    "username": "Test71",
    "password": "$2a$10$tLYLaM4DyiL8KhobEF1wwuJ7UM64n4N/Va3/1SA5jl5xSHQMITrR.",
    "first_name": "Test",
    "last_name": "Smith",
    "email": "test1234@school.com",
    "city": "San Dimas",
    "state": "CA",
    
## [PUT] update user info

`https://supportifyafrica.herokuapp.com/api/users/11`

Required fields:

Type: Unique: Field:
text - yes - user_name

text - password

text - first_name

text - last_name

text - email

text - city

text - state

unique means the field can only be used once in a databse.

Fields: board, primary_admin, sec_admin are defaulted to false.

*HEADERS*
Content-Typeapplication/json

BODY raw
{
    
    "username": "FRANKY BOY",
    "password": "1234",
    "first_name": "This user can access any resource",
    "last_name": "Smith",
    "email": "boby1234@school.com",
    "city": "San Dimas",
    "state": "CA",
    "board": false,
    "primary_admin": false,
    "sec_admin": false,
    "create_at": "2019-11-19T00:21:54.983Z",
    "updated_at": "2019-11-19T00:21:54.983Z"
}


### Example Request

update user info
curl --location --request PUT "https://supportifyafrica.herokuapp.com/api/users/11" \
  --header "Content-Type: application/json" \
  --data "{
    
    \"username\": \"FRANKY BOY\",
    \"password\": \"1234\",
    \"first_name\": \"This user can access any resource\",
    \"last_name\": \"Smith\",
    \"email\": \"boby1234@school.com\",
    \"city\": \"San Dimas\",
    \"state\": \"CA\",
    \"board\": false,
    \"primary_admin\": false,
    \"sec_admin\": false,
    \"create_at\": \"2019-11-19T00:21:54.983Z\",
    \"updated_at\": \"2019-11-19T00:21:54.983Z\"
}"

## [DEL] delete a user

`https://supportifyafrica.herokuapp.com/api/users/9`


### Example Request

delete a user
curl --location --request DELETE "https://supportifyafrica.herokuapp.com/api/users/9"
schools

## [GET] get all the schools

`https://supportifyafrica.herokuapp.com/api/schools`


### Example Request

get all the schools
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/schools"

## [GET] get school by school_id

`https://supportifyafrica.herokuapp.com/api/schools/33`


### Example Request

get school by school_id
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/schools/33"

## [POST] create school

`https://supportifyafrica.herokuapp.com/api/schools`

*Required fields*:

Type: Unique: Field:

text - yes - school_name

text - school_street

text - school_city

text - school_state

text - post_code

text - phone

unique means the field can only be used once in a databse.

*HEADERS*
Content-Typeapplication/json
BODY raw
{

        "school_name": "Test School 20",
        "num_issues": 50,
        "num_students": 320,
        "est_costs": 3500.28,
        "school_street": "100 South Main Street",
        "school_city": "Belton",
        "school_state": "TX",
        "post_code": "80909",
        "phone": "1-555-555-5555",
        "grade_level": "High School",
        "about": "Next to mountains"
}


### Example Request

create school
curl --location --request POST "https://supportifyafrica.herokuapp.com/api/schools" \
  --header "Content-Type: application/json" \
  --data "{

        \"school_name\": \"Test School 20\",
        \"num_issues\": 50,
        \"num_students\": 320,
        \"est_costs\": 3500.28,
        \"school_street\": \"100 South Main Street\",
        \"school_city\": \"Belton\",
        \"school_state\": \"TX\",
        \"post_code\": \"80909\",
        \"phone\": \"1-555-555-5555\",
        \"grade_level\": \"High School\",
        \"about\": \"Next to mountains\"
}"

## [PUT] update school info

`https://supportifyafrica.herokuapp.com/api/schools/33`

Required fields:

Type: Unique: Field:

text - yes - school_name

text - school_street

text - school_city

text - school_state

text - post_code

text - phone

unique means the field can only be used once in a databse.

*HEADERS*
Content-Typeapplication/json

BODY raw
{
	"school_id": 33,
    "school_name": "HEEEEEYYYYYYY WHATs UP WOOOOORRRRRRKKKKKK!!!!!!!!!",
    "num_issues": 50,
    "num_students": 320,
    "est_costs": 3500.28,
    "school_street": "100 South Main Street",
    "school_city": "Belton",
    "school_state": "TX",
    "post_code": "80909",
    "phone": "1-555-555-5555",
    "grade_level": "High School",
    "about": "Next to mountains"
    
}

 


### Example Request

update school info
curl --location --request PUT "https://supportifyafrica.herokuapp.com/api/schools/33" \
  --header "Content-Type: application/json" \
  --data "{
	\"school_id\": 33,
    \"school_name\": \"HEEEEEYYYYYYY WHATs UP WOOOOORRRRRRKKKKKK!!!!!!!!!\",
    \"num_issues\": 50,
    \"num_students\": 320,
    \"est_costs\": 3500.28,
    \"school_street\": \"100 South Main Street\",
    \"school_city\": \"Belton\",
    \"school_state\": \"TX\",
    \"post_code\": \"80909\",
    \"phone\": \"1-555-555-5555\",
    \"grade_level\": \"High School\",
    \"about\": \"Next to mountains\"
    
}

 "
## [DEL] delete a school

`https://supportifyafrica.herokuapp.com/api/schools/8`



### Example Request

delete a school
curl --location --request DELETE "https://supportifyafrica.herokuapp.com/api/schools/8"
users-schools

## [GET] get all schools and their users

`https://supportifyafrica.herokuapp.com/api/users-schools/all`

This request sends back all schools and any users attached to the schools. Each school-user relationship is it's own object, therefore, you will see an array of objects in which any individual school's information is repeated in multiple objects for as many times as there are users attachd to the school. Each time you see a school's information repeted in the array, the user information should be different.

### Example:

[

{
    "school_id": 2,
    "school_name": "Bayside High",
    "school_city": "Bayside",
    "school_state": "CA",
    "user_id": 2,
    "first_name": "Ted",
    "last_name": "Logan",
    "email": "ted@school.com",
    "board": false,
    "primary_admin": false,
    "sec_admin": false
},

{
    "school_id": 2,
    "school_name": "Bayside High",
    "school_city": "Bayside",
    "school_state": "CA",
    "user_id": 3,
    "first_name": "Sally",
    "last_name": "Logan",
    "email": "sally@school.com",
    "board": true,
    "primary_admin": false,
    "sec_admin": false
},
]



### Example Request

get all schools and their users
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/users-schools/all"

## [GET] get a school's users

`https://supportifyafrica.herokuapp.com/api/users-schools/school/2`

Pass in an id parameter to the url and you'll get back an array of objects, all objects containing the same school information for the specified school, but with different user information in each object.



### Example Request

get a school's users
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/users-schools/school/2"

## [GET] get a user's schools

`https://supportifyafrica.herokuapp.com/api/users-schools/user/3`

You guesed it, pretty much just like getting a school's users, except this time the last section if the url is /users/:id and you supply the user id to see all the schools the user is attached to.



### Example Request

get a user's schools
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/users-schools/user/3"

## [POST] connect user to a school

`https://supportifyafrica.herokuapp.com/api/users-schools/connect-user`

Provide the user_id and the school_id in the body of the request. If they aren't already connected, we'll add the pair of id's to the users_schools table.

*HEADERS*
Content-Typeapplication/json
BODY raw
{
	"user_id": 3,
	"school_id": 3
}


### Example Request

connect user to a school
curl --location --request POST "https://supportifyafrica.herokuapp.com/api/users-schools/connect-user" \
  --header "Content-Type: application/json" \
  --data "{
	\"user_id\": 3,
	\"school_id\": 3
}"

## [DEL] remove a user from a school

`https://supportifyafrica.herokuapp.com/api/users-schools/disconnect`

In the body of the request pass in object like {"user_id":3,"school_id": 8} (order does not matter) to delete a user-school relationship.

!NOTE this does not delete the user object, the school object or any of their information. It ONLY deletes the relationship between the user and the school.

Upon successful deletion of a relationship, you'll recieve a 1 back in the response, 0 if failed.

*HEADERS*
Content-Typeapplication/json
BODY raw
{
	"user_id": 3,
	"school_id": 3
}


### Example Request

remove a user from a school
curl --location --request DELETE "https://supportifyafrica.herokuapp.com/api/users-schools/disconnect" \
  --header "Content-Type: application/json" \
  --data "{
	\"user_id\": 3,
	\"school_id\": 3
}"
issues

## [GET] get all issues

`https://supportifyafrica.herokuapp.com/api/issues`

*HEADERS*
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoiVGVzdDU0IiwiaWF0IjoxNTc0MTQ0OTkxLCJleHAiOjE1NzQyMzEzOTF9.u6ujav8UKErKjtXZ3oQq5ujyZurRxCO-yQ4XTSV7qHE

### Example Request

get all issues
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/issues" \
  --header "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjQsInVzZXJuYW1lIjoiVGVzdDU0IiwiaWF0IjoxNTc0MTQ0OTkxLCJleHAiOjE1NzQyMzEzOTF9.u6ujav8UKErKjtXZ3oQq5ujyZurRxCO-yQ4XTSV7qHE"
  
## [GET] get issue by id

`https://supportifyafrica.herokuapp.com/api/issues/4`


### Example Request

get issue by id
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/issues/4"

## [POST] create an issue

`https://supportifyafrica.herokuapp.com/api/issues`

Required fields:

description

the type is text

*HEADERS*
Content-Typeapplication/json
BODY raw
 {
        
        "priority": "medium",
        "title": "Test Issue 2",
        "description": "leaking a/c",
        "equipment": "front a/c",
        "general_issues": "a/c needs repair",
        "estimated_cost": "$125",
        "completed": false,
        "needs_attention": false,
        "scheduled": false,
        "user_id": 3
    }


### Example Request

create an issue
curl --location --request POST "https://supportifyafrica.herokuapp.com/api/issues" \
  --header "Content-Type: application/json" \
  --data " {
        
        \"priority\": \"medium\",
        \"title\": \"Test Issue 2\",
        \"description\": \"leaking a/c\",
        \"equipment\": \"front a/c\",
        \"general_issues\": \"a/c needs repair\",
        \"estimated_cost\": \"$125\",
        \"completed\": false,
        \"needs_attention\": false,
        \"scheduled\": false,
        \"user_id\": 3
    }"
    
## [DEL] delete an issue

`https://supportifyafrica.herokuapp.com/api/issues/12`

Provide an issue id in the url parameter. The user must be either a primary or secondary admin. Board members cannot delete issues of a school, as they are restricted in the backend logic.

*HEADERS*
AuthorizationeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJuYW1lIjoiVGVzdDYxIiwiYm9hcmQiOnRydWUsInByaW1hcnlfYWRtaW4iOmZhbHNlLCJzZWNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NzQyNjg4MjUsImV4cCI6MTU3NDM1NTIyNX0.3Qz86sCDqlWoeiT0bD3XvFEAbnhwt6qq180bd8LVeGI

### Example Request

delete an issue
curl --location --request DELETE "https://supportifyafrica.herokuapp.com/api/issues/12" \
  --header "Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjYsInVzZXJuYW1lIjoiVGVzdDYxIiwiYm9hcmQiOnRydWUsInByaW1hcnlfYWRtaW4iOmZhbHNlLCJzZWNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NzQyNjg4MjUsImV4cCI6MTU3NDM1NTIyNX0.3Qz86sCDqlWoeiT0bD3XvFEAbnhwt6qq180bd8LVeGI"
  
## [PUT] edit an issue

`https://supportifyafrica.herokuapp.com/api/issues/5`

As long as you don't remove the description field altogether, you should be good making a post request, assuming you provide an id as a parameter and an updated issue object in the body of the request.

*HEADERS*
Content-Typeapplication/json
BODY raw
 {
        
        "priority": "medium",
        "title": "Test Issue 2 MORE INFO FROM A PUT REQUEST",
        "description": "leaking a/c",
        "equipment": "front a/c",
        "general_issues": "a/c needs repair",
        "estimated_cost": "$125",
        "completed": false,
        "needs_attention": false,
        "scheduled": false,
        "user_id": 3
    }


### Example Request

edit an issue
curl --location --request PUT "https://supportifyafrica.herokuapp.com/api/issues/5" \
  --header "Content-Type: application/json" \
  --data " {
        
        \"priority\": \"medium\",
        \"title\": \"Test Issue 2 MORE INFO FROM A PUT REQUEST\",
        \"description\": \"leaking a/c\",
        \"equipment\": \"front a/c\",
        \"general_issues\": \"a/c needs repair\",
        \"estimated_cost\": \"$125\",
        \"completed\": false,
        \"needs_attention\": false,
        \"scheduled\": false,
        \"user_id\": 3
    }"
    
## [GET] get issues of a single user

`https://supportifyafrica.herokuapp.com/api/issues/user/3`

Put the user id at the end of this endpoint and you'll receive all of the issues that the user created.



### Example Request

get issues of a single user
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/issues/user/3"
comments

Attach comments to issues, query comments by issues_id or user_id. You can basically use this api to construct a chatroom for a specific issue.

## [GET] get all comments

`https://supportifyafrica.herokuapp.com/api/comments`


### Example Request

get all comments
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/comments"

## [GET] get comments by an issues_id

`https://supportifyafrica.herokuapp.com/api/comments/issue/1`

Pass the issues_id into the url parameter, get back all comments associated with an issue order from most recent comment to earlist comment.



### Example Request

get comments by an issues_id
curl --location --request GET "https://supportifyafrica.herokuapp.com/api/comments/issue/1"

## [POST] post a new comment

`https://supportifyafrica.herokuapp.com/api/comments`

supply a user_id and an issues_id in the body of the request to the endpoint. You will receive back a 1 for successful post or a 0 if the post failed.

*HEADERS*
Content-Typeapplication/json
BODY raw
{
      
        "comment": "I'm STTTTIIIILLLLL looking into this issue",
        "user_id": 1,
        "issues_id": 1
       
    }
