FROM node:latest

RUN git clone https://github.com/abnerantezano/express_app.git

WORKSPACE express_app

RUN npm install

EXPOSE 3000

CMD['npm', 'start']
