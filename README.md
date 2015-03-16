# Pig Latin API

Essentially acts as a wrapper for the [yapiglatin](https://github.com/tomruttle/node-yapiglatin) module.

Starts a server on port 3000 and responds on the `/convert/:string` endpoint with `200` and a pig-latinised version of `:string`.

### To do

  - Keep connections to front-end open with websockets, show what other users are converting
