# NodeJS-basics
NodeJS assessment for AttainU instructor hiring 

Need to pass JWT token in header of request as x-access-token. JWT token will be received in login request. 2 users are currently entered into db so use that only.

1. Login request:
  request body:
  
  
  admin user: {
    "email":"tirth.dholariya@gmail.com",
    "password":"admin@123"
}
non-admin user:{
    "email":"kevin.vekariya@gmail.com",
    "password":"student@123"
}

2. Create post: POST 
  request body:{
    "text":"hello abcdef",
    "author":"tirth.dholariya@gmail.com"
}

3. read post: GET

4. update post: POST
   request body:{
    "author":"tirth.dholariya@gmail.com",
    "post_id":"613f8f0e6309c64170007bd2",
    "text":"hello there"
}

5. delete post:POST
  request body:{
    "author":"tirth.dholariya@gmail.com",
    "post_id":"613f883d68cf25d94d14bc1d"
}

