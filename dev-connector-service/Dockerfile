FROM node:16.13.2-alpine

WORKDIR /app
COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]
RUN ["rm", "-r", "./src"]
CMD ["npm", "run", "dev"]

EXPOSE 8080:8080