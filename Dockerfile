FROM node:10-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY . .
USER node
RUN npm install
EXPOSE 3333
CMD [ "node", "src/server.js" ]
