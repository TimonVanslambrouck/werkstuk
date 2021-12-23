# werkstuk DEVELOPMENT 5
welcome to my development project! </br>

# HOW TO USE:

1.  change directory to the api map 'cd api'
2.  execute 'npm i'
3.  head back to the main map 'cd ../'
4.  create an .env file just like the .env-template with the right data
5.  execute 'docker-compose up --build'


# ENDPOINTS:

GET '/users': return all the users in the users table </br>

POST '/user': inserts a user in the users table </br>
a users consists of a 'username' and a 'teamId' </br>

PUT '/user/:id': edits specific data of a user in the users table based on the ID given </br>

DELETES '/user/:id': deletes a specific user in the users table based on the ID given </br> </br>

GET '/teams': return all the teams in the teams table </br>

POST '/team': inserts a team in the teams table </br>
a team consists of a 'team'</br>

PUT '/team/:id': edits specific data of a team in the teams table based on the ID given </br>

DELETES '/team/:id': deletes a specific user in the teams table based on the ID given </br> </br>