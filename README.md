# first
TASKS
  http://localhost:8080/  Hello World - Name
  http://localhost:8080/authors  Authors and their post count
  http://localhost:8080/setcookie  To set two cookies Name and age
  http://localhost:8080/getcookies Get those cookies values 
  http://localhost:8080/robots.txt Deny the request
  http://localhost:8080/html Render an html page
  http://localhost:8080/input Log the post data
  
PREREQUISITES
  Install the dependencies.
     Express
     Request
     Body-parser
     Cookie-parser
     Path
 Run app.js using:
      node app.js

FILES USED:
  public directory has robots.txt whose access is denied.
  about.html : HTML file that is rendered.
  app.js : The main file
  form.html : Form for POST
