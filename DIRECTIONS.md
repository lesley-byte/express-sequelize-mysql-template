## Express Sequelize Mysql Template

### Description
This is a 🔥template🔥 for a Node.js Express server with Sequelize and MySQL.

### Installation 🫠
1. Clone the repository ✨
2. Run `npm init -y` 
3. Run `npm install` for the dependencies.
    a. examples of the dependencies are:
    - "bcrypt": "^5.0.0",
    - "clog": "^5.1.0",
    - "connect-session-sequelize": "^7.1.5",
    - "dotenv": "^8.2.0",
    - "express": "^4.17.1",
    - "express-handlebars": "^5.2.0",
    - "express-session": "^1.17.1",
    - "handlebars": "^4.7.6",
    - "mysql2": "^2.2.5",
    - "sequelize": "^6.3.5"
4. Create a `.gitignore` file and add the following:
    - node_modules
    - .DS_Store
    - .env
5. Update the package.json file with scripts:
    - `"start": "node server.js",`
    - `"seed": "node seeds/seed.js"`
    - `"test": "jest"`
6. Install the dev dependencies:
    - `"jest": "^26.6.3",`
    - `"supertest": "^6.1.3"`
    - `"cross-env": "^7.0.3"`
7. Add the following to the `package.json` file:
    - ` "jest": {
    "testEnvironment": "node",
    "coveragePathIgnorePatterns": [
      "/node_modules/",
      "/__tests__/setup.js"
    ]
  }`
4. Create update the `.env.EXAMPLE` file with your MySQL username, password, and database name. AND rename the file to `.env`
6. CREATE a database in MySQL, name should match the one in the `.env` file.
7. Fill in the files in all the folders with the appropriate code.
8. Run `node seeds/seed.js` to seed the database.
9. Run `npm start` to start the server.
10. Open the browser and go to [👉localhost:3001](http://localhost:3001) to view the application.