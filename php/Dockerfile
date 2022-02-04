# so fpm is done for fast cgi project manager, it's not just randomly picked
FROM php:7.4-fpm

# extensions to run a symfony5 application, I added curl (&& apt-get install curl -y)
RUN apt-get update && apt-get install curl -y && apt-get install curl -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \ 
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip


WORKDIR /var/www/project

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony/bin/symfony /usr/local/bin/symfony