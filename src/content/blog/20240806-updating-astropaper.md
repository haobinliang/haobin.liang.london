---
title: Updating AstroPaper
pubDatetime: 2024-08-06T23:48:15
tags: ["astropaper"]
description: Notes about updating AstroPaper theme from existing commit
slug: updating-astropaper
---

## Add AstroPaper as a remote repository

```shell
git remote add ap https://github.com/satnaing/astro-paper
git merge ap/main --allow-unrelated-histories
```

## Resolve conflicts manually

I use VS Code so it's a painful process to look at code line by line.

## Commit and push changes

```shell
git commit -m 'Merge from astropaper'
git push
```
