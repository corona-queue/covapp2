FROM ubuntu:16.04
SHELL ["/bin/bash", "-c"]

ENV LANG C.UTF-8
ENV LC_ALL C.UTF-8

RUN apt-get update --fix-missing
RUN apt-get autoremove -y
RUN apt-get upgrade -y

RUN apt-get install -y software-properties-common
RUN apt-get install -y curl
# RUN apt-get install -y git
# RUN apt-get install -y vim

# RUN apt-get install -y libreadline-dev build-essential libssl-dev zlib1g-dev

# Install node

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y nodejs

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/v$NODE_VERSION/bin:$PATH

# Install yarn

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get install yarn

# For hot reloading (in development)

ENV CHOKIDAR_USEPOLLING true

WORKDIR /root

# Mount with code
RUN mkdir workspace
WORKDIR /root/workspace
