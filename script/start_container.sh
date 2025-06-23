#!/bin/bash
set -e

docker pull hrj06/top-course-app:latest

docker run -d -p 3000:3000 hrj06/top-course-app:latest