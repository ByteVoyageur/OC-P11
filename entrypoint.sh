#!/bin/sh

# 列出/app和/app/server目录的内容
echo "Listing /app directory:"
ls -la /app
echo "Listing /app/server directory:"
ls -la /app/server

# 启动Node.js应用
node server/server.js
