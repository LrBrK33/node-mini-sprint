# Node Mini Sprint

This repo contains a client directory and a server directory. While it is all in one repo, they must be run separately and you should consider them to be 2 separate applications.

## Getting Started

Open 2 terminal windows.

* In one terminal window open the client directory and do the following:
  - run [live-server](https://www.npmjs.com/package/live-server). This is serving your client files. If you open your index.html from Finder (e.g. you are seeing `file:///` in the URL bar) you will run into CORS issues. Use live-server.
  - Your client will run, but it does not communicate with the server yet. You need to write the appropriate code.

* In the other terminal window open the server directory and do the following:
  - `npm install`
  - `npm start` or `nodemon`
  - Your server will run, but it will not respond to requests correctly until you write the appropriate code.

**Important Note**: After each step, **commit and push** your current progress. You'll notice in the later steps (Step 2 and onward), you are told to check out new branches. For pushing the work done on those branches, rather than `git push origin master`, you'll need to run `git push origin branchName`.

---
## Step 1: Raw Node

- [X] Finish out the routing for the existing server to handle incoming client requests

### Client/Server Communications
  The client will communicate with your server via jQuery's AJAX. For your convenience the jQuery script is in the index.html file already.

  Your server will listen for and respond to client requests. You are building an API similar to ones that you have used in the past. For this step you will be using Node's http module (no Express allowed).

### Focus on understanding the following:
- What is the difference between the client and the server?
  the client displays info to the user and takes in user input. The server responds to the input as directed.
- What is the request/response cycle?
  requests are sent from the client and interpreted by the server, the response in then sent back to the client to act on
- What is CORS and how do you prevent CORS errors?
  CORS allows the server to communicate to the client without special permission because it is returning to the origin
  CORS errors are prevented by returning required headers in the response
- What are http verbs? When are they used?
  http verbs are used to CRUD, they are used to make requests to the server
- What are http status codes and how do you respond with them?
  status codes
- What is an endpoint and where do you see it?
  the endpoint is where the requests are pointed, the are on the end of the url
- What tools can you use to test your server?
  Postman, terminal
- Where do you see your server console.logs?
  In terminal running server
- **What parts of your code are asynchronous and how will you handle that?**

---

## Step 2: Refactor to Express
- [X] Check out a new branch `express-server`
- [X] Refactor your existing server from http to Express.js

Note: Use the [Express documentation](https://expressjs.com/) as your primary resource for this.

---
## Step 3: Converting to React

- [X] Check out a new branch `react-client`
- [ ] In the `react-client` directory, build out a refactored version of the original frontend in React
- [ ] Serve up your React client from your Express server using `express.static`
- [ ] (Optional) Refactor your jQuery's AJAX client requests to use [Axios](https://www.npmjs.com/package/axios)

The dependencies for React have been set up in the `react-client` directory.  To begin transpiling the code, run `npm run build` in your client terminal.

Note: Use the [React documentation](https://reactjs.org/docs/getting-started.html) as your primary resource for this.

---
## Step 4: Add data persistence

- [ ] Check out a new branch `add-mysql`
- [ ] Design a `schema.sql` for storing the existing application data
- [ ] Add data persistence to the information being stored in your backend (refactor the Express server as needed)

Note: use the [MySQL](https://dev.mysql.com/doc/refman/8.0/en/) and [mysqljs](https://www.npmjs.com/package/mysql) documentation as your primary resources for this.

---
## Step 5: Full CRUD

- [ ] Check out a final branch `full-crud`
- [ ] Expand the functionality of your React frontend until it sends at least one request of each CRUD category
- [ ] Build out server routing to handle those requests
- [ ] Refactor your persistence layer as-needed to support these new routes

