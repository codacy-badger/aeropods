FROM node:12

ENV NODE_ENV=production

WORKDIR /api

COPY package.json .
COPY yarn.lock .
COPY ./prisma/schema.prisma .

RUN yarn

EXPOSE 3600

CMD ["yarn", "run", "start"]
