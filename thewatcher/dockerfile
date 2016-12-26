FROM node:latest
RUN mkdir /server
WORKDIR /server
COPY ./server/package.json /server/package.json
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]