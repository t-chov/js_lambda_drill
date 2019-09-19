FROM node:lts-alpine
COPY ./src/ /opt/js_lambda_drill/src/
COPY ./public/ /opt/js_lambda_drill/public/
COPY ./*.json /opt/js_lambda_drill/
WORKDIR /opt/js_lambda_drill/
RUN npm install && \
    npm run build && \
    rm -rf node_modules && \
    npm i -g serve
CMD serve -s build