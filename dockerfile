FROM node:20-bullseye-slim

WORKDIR /home

RUN npm install -g @angular/cli

# COPY package.json .

# RUN ng analytics off

# RUN ng new angular-17

# RUN npm install

COPY . .

# RUN ng build

RUN apt update -y

RUN apt install apache2 -y
   

# COPY ./.htaccess /var/www/html

# ADD ./config_apache/apache2.conf /etc/apache2

# ADD ./config_apache/sites/*.conf /etc/apache2/sites-available

# RUN a2ensite p2ca.com.br.conf

# RUN a2dissite 000-default.conf

# RUN a2dissite default-ssl.conf

# RUN cp -R /home/p2ca/dist/web/* /var/www/html

EXPOSE 80 443 4200

CMD ["apachectl", "-D", "FOREGROUND"]
