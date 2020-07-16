FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copying source files
COPY . .

RUN yarn

# Building app
RUN yarn build

# Build storybook
RUN yarn storybook:build

# Serve storybook -- @TODO find different place
RUN yarn storybook:serve &

# Running the app
CMD ./scripts/start.sh