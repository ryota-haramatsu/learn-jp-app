#イメージのベースを指定
FROM php:7.4-fpm

#composerのインストール multi-stage buildsを利用
COPY --from=composer:1.10 /usr/bin/composer /usr/bin/composer

#npmのインストール
COPY --from=node:10.22 /usr/local/bin /usr/local/bin
COPY --from=node:10.22 /usr/local/lib /usr/local/lib

#パッケージ管理ツールapt-getの更新と必要パッケージのインストール
RUN apt-get update \
    && apt-get install -y \
    git \
    zip \
    unzip \
    #PHP拡張モジュールをインストール
    && docker-php-ext-install pdo_mysql bcmath

#PHPコンテナ（app）に入った時のカレントディレクトリ
WORKDIR /var/www/html

#コンテナ内に入った時のディレクトリを指定
WORKDIR /var/www/html