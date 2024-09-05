# Use Golang official image as base
FROM golang:1.20

# Set the working directory in the container
WORKDIR /server

# Copy go.mod and go.sum files to install dependencies
COPY ./server/go.mod ./server/go.sum ./

# Install dependencies
RUN go mod download

# Copy the rest of the application code
COPY ./server .

# Build the Go server
RUN go build -o server .

# Expose the port the Go server runs on (e.g., 8080)
EXPOSE 8080

# Run the Go server
CMD ["./server"]
