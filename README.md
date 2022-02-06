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
*   go to "https://localhost:8080" to view index.php

### Notes
Full tutorial is [here](https://www.youtube.com/watch?v=ITOnpzkzlYM&list=PLaxcKCJLJmbDOT25foBK1uvL9-XHAoE1b&index=47&t=974s)

### Currently working on
Directly entering the url of the /detail breaks the app while going to the same url wusing the link works just fine, gonna find out why next.