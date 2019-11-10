FROM node:10

# Create working directory
WORKDIR /usr/src/app

COPY package*.json ./
COPY dist/ ./

# RUN 
RUN npm install
RUN npm run build

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "main.js"]