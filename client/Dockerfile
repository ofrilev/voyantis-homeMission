# Use Bun official image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /client

# Copy the package.json and bun.lockb to install dependencies
COPY ./client  .

# Install the dependencies
RUN bun install --frozen-lockfile


# Expose the port that the Bun app runs on
EXPOSE 3000

# Run the Bun app
CMD ["bun", "vite"]
