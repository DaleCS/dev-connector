FROM node:alpine

WORKDIR /app
COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]
RUN ["rm", "-r", "./src"]
CMD ["npm", "run", "start"]

EXPOSE 8080:8080