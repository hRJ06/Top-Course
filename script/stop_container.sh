#!/bin/bash
set -e

containerid=$(docker ps -q)
if [ -n "$containerid" ]; then
  docker stop $containerid && docker rm -f $containerid
else
  echo "No running container to remove."
fi