// Boilerplate Code for HTTP Status Code API
const express = require("express");
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

app.get("/status-info", (req, res) => {
  const { code } = req.query;
  console.log(req.query);
  switch (code) {
    case "200":
      res.status(200).json({
        status: 200,
        message: "200 OK: Request was successful.",
      });
      break;
    case "201":
      res.status(201).json({
        status: 201,
        message: "201 Created: A resource has been successfully created.",
      });
      break;
    case "204":
      res.status(204).json({
        status: 204,
        message:
          "204 No Content: Request processed successfully, no content returned.",
      });
      break;
    case "400":
      res.status(400).json({
        status: 400,
        message:
          "400 Bad Request: The request is invalid due to client-side errors.",
      });
      break;
    case "401":
      res.status(401).json({
        status: 401,
        message:
          "401 Unauthorized: Authentication is required to access the resource.",
      });
      break;
    case "403":
      res.status(403).json({
        status: 403,
        message: "403 Forbidden: Server refuses to authorize the request.",
      });
      break;
    case "404":
      res.status(404).json({
        status: 404,
        message: "404 Not Found: The resource does not exist.",
      });
      break;
    case "405":
      res.status(405).json({
        status: 405,
        message:
          "405 Method Not Allowed: HTTP method not supported for this resource.",
      });
      break;
    case "429":
      res.status(429).json({
        status: 429,
        message: "429 Too Many Requests: User has exceeded rate limits.",
      });
      break;
    case "500":
      res.status(500).json({
        status: 500,
        message: "500 Internal Server Error: The server encountered an error.",
      });
      break;
    case "502":
      res.status(502).json({
        status: 502,
        message:
          "502 Bad Gateway: The server received an invalid response from the upstream server.",
      });
      break;
    case "503":
      res.status(503).json({
        status: 503,
        message:
          "503 Service Unavailable: Server temporarily overloaded or under maintenance.",
      });
      break;
    case "504":
      res.status(504).json({
        status: 504,
        message:
          "504 Gateway Timeout: The server did not receive a timely response from the upstream server.",
      });
      break;
    default:
      res.status(400).json({
        status: 400,
        message: "400 Bad Request: Invalid status code provided.",
      });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Status Code API is running on http://localhost:${PORT}`);
});
