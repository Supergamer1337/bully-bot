FROM node:16-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package.json pnpm-lock.yaml ./

RUN npm -g i pnpm

USER node

RUN pnpm install

COPY --chown=node:node . .

CMD ["node", "dist/index.js"]