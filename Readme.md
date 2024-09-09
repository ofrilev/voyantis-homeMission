# Queue App

This App is a message queue app. First create a queue with a given name and message. And then pull the message from each queue in Fifo order

## Run queue App:

### Via Docker:

from root dir run `docker-compose up` for fst run add flag `--build`
when finish run `docker-compose down`

after running the app put `http://localhost:3000/`

### Or install:

Client :from cli run : `cd client` than run `bun i`
Server: download GO from official site `https://go.dev/doc/install`
And run:
to run the Server. From the main dir run: `go run server.go handlers.go`
to run the client. first make `cd client` follows by `cd my-app` then run `bun run dev`

#### The app server is written in Golang and the client is written in TS-Bun with React and Vite for fast hot reload
