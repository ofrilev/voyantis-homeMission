# Use Bun official image
FROM oven/bun:latest

# Set the working directory in the container
WORKDIR /client

# Adding permissions to the app user
# COPY --chown=app:app ./package.json ./bun.lockb 

RUN bun init


# Copy the package.json and bun.lockb (if applicable) to install dependencies
COPY ./client/package.json ./client/.bun.lockb 



# Install the dependencies
RUN bun install

# Copy the rest of the application code
COPY ./client .

# Expose the port that the Bun client runs on (e.g., 5173)
EXPOSE 3000

# Run the Bun app
CMD ["bun", "vite"]
