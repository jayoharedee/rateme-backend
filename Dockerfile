FROM node:10

# Create working directory
WORKDIR /usr/src/app

COPY package*.json ./
# RUN 
RUN npm install
RUN npm run build

# Bundle app source

COPY dist/ ./
COPY . .

EXPOSE 3000
CMD [ "node", "main.js"]