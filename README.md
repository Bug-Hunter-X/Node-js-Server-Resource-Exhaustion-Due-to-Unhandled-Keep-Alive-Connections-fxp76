# Node.js Server Resource Exhaustion

This repository demonstrates a common issue in Node.js servers: resource exhaustion due to improperly handled keep-alive connections.  The server, as initially written, keeps connections open indefinitely, eventually leading to the server running out of resources.

## Bug

The `bug.js` file contains the problematic server code.  It responds to requests but fails to properly close connections, leading to a buildup of open connections.

## Solution

The `bugSolution.js` file shows the corrected code.  It addresses the issue by removing the problematic `'Connection': 'keep-alive'` header, allowing the server to gracefully close connections.

## How to Reproduce

1. Clone this repository.
2. Run `node bug.js`.
3. Open multiple tabs in your browser to repeatedly access `http://localhost:3000`.  Observe that the number of open connections increases, eventually leading to server performance issues or crashes (depending on system resources).
4. Repeat steps 2 and 3 with `node bugSolution.js` to see the difference in connection handling.