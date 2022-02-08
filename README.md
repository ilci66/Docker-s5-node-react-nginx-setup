# Symfony React Nginx Node Docker Setup

## Project Description
Parts of the project will run in different containers and will be connected via docker network. 
Project setup will be handled in docker with the docker compose file

### Tecnologies (To Be) Used:
*   Docker
*   Nginx
*   Mysql
*   Symfony
*   React
*   Node

### Project Motivation
I need more practice using tools such as docker. I haven't done a project with symfony that utilizes react for frontend.

### How To Use
*   Clone the repository
*   Create a "mysql" folder in the root
*   run "docker-compose up -d --build" 
*   inside the node-service container run "yarn install"
*   go to "https://localhost:8080" to view index.php


### Notes
Full tutorial for the setup is [here](https://www.youtube.com/watch?v=ITOnpzkzlYM&list=PLaxcKCJLJmbDOT25foBK1uvL9-XHAoE1b&index=47&t=974s)

### Currently working on
Need to do some reading on how to work with data in symfony and database connection.
I want to save my To do list to the database I have established and maybe delete some after doing the activities I planned to do
Trying to understand how to use symfony requests and responses, reading, testing...