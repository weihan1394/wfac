#############
### build ###
#############
# base image
FROM node:12.16.1 as build
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@8.3.22

# add app
COPY . .

# generate build
RUN ng build --output-path=dist 


############
### prod ###
############
# base image
FROM nginx:1.18.0-alpine

# overwrite default nginx website
RUN rm -rf /usr/share/nginx/html/*
# COPY ./provisioning/conf /usr/share/nginx/html
COPY ./provisioning/conf /etc/nginx/conf.d

# copy artifact build from the 'build environment'
COPY --from=build /app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
