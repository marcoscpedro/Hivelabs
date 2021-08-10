FROM node:14.17-alpine

RUN apk add --no-cache \
	ca-certificates \
	git 

RUN git clone --depth 1 https://github.com/marcoscpedro/Hivelabs /app

# install dependencies
WORKDIR /app
RUN npm install 

EXPOSE 3030/tcp 3030/tcp



COPY . .

CMD ["npm", "start"]