FROM node:15

WORKDIR /app
COPY . .
RUN yarn run build