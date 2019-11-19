FROM node:10

# Create working directory
WORKDIR /usr/src/app

COPY *.json ./

# RUN 
RUN npm install && npm run build
RUN ls -la

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "run", "start"]
