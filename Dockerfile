<<<<<<< HEAD
# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend

# install npm dependencies
RUN npm install yarn
RUN yarn

# copy other project files
COPY . .

# build the folder
RUN yarn run build

# Handle Nginx
FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
=======
FROM node:lts-alpine as build-dist
WORKDIR app
COPY package.json /app
RUN npm install yarn
RUN yarn 
COPY . /app
RUN yarn run build

FROM nginx:stable-alpine
WORKDIR website
COPY --from=build-dist ./app/build /website
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
>>>>>>> c388b9b9a8438e8f36cca9e8993759d6f18f57d5
