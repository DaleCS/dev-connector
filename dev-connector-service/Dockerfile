FROM node:16.13.2-alpine

WORKDIR /app
COPY . .

RUN ["npm", "install"]
RUN ["npm", "run", "build"]
CMD ["npm", "run", "start"]

EXPOSE 8080:8080