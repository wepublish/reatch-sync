FROM node:16.14

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn prisma generate
RUN yarn run build

CMD yarn run start:prod
