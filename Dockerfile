FROM node:15

WORKDIR /app
COPY . .
RUN yarn
RUN yarn run build