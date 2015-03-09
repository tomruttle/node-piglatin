FROM node:0.12
MAINTAINER Tom Ruttle <tom@tomruttle.com>

RUN echo "prefix=/usr" > /root/.npmrc
RUN npm install -g mocha gulp

ENV NODE_ENV test
ENV HOME /root
ENV APP_ROOT_PATH=/usr/src/app

RUN mkdir /vendor

COPY package.json /vendor/package.json

RUN cd /vendor && npm set strict-ssl false && npm install
RUN mkdir -p /usr/src/app &&\
    ln -s /vendor/node_modules /usr/src/app/node_modules

WORKDIR /usr/src/app

COPY . /usr/src/app

EXPOSE 3000
ENTRYPOINT [ "npm" ]
CMD ["start"]
