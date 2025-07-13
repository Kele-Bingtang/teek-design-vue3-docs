#!/usr/bin/env sh

comment=$1

if [ ! $comment ]; then
  comment="文档内容更新"
fi

git add -A

git commit -m "${comment}"

git push
