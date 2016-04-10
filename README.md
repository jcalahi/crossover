# Auction/Bidding Project


This sample application simulates an auction/bidding process with predefined items in place. 
Players may join by simply registering with their desired username.

Please follow the steps below to run this application:

1. Download MySQL Workbench.
2. Go to C:\Program Files\MySQL\MySQL Workbench 6.3 CE via command prompt then type 'mysql -h 127.0.0.1 -u root -p'. 
3. Install XAMPP then START MySQL service. Default port is 3306.
4. Install Node v5.x using -g in cli.
5. Once installed, create a folder then extract the codes from the zip file.
6. For Windows, go to the newly created folder's root directory then type "npm install" to download the dependencies via command prompt.
7. Go to project root folder, then type "node app.js" to run the node server.
8. Once the server is running, open your browser then enter 'http://localhost:3030/myapplication/' to launch the application.

Optional:

AngularJS codes are bundled using Browserify. If you need to update front-end codes, you need to install Browserify and Watchify via npm.
After installation, bundle the codes by typing:

browserify public/src/module/crossover.js -o public/bundle.js via command prompt

and

watchify public/src/module/crossover.js -o public/bundle.js


For MySQL database, scripts are already pre-loaded in the app, and will be created once the server starts.


