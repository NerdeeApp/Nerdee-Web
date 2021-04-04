FROM node:15

WORKDIR /app
COPY . .
RUN yarn build
RUN yarn run build