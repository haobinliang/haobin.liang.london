---
title: Poetry install Pip requirements.txt
postSlug: poetry-install-pip-requirements
pubDatetime: 2023-04-08T13:34:09
tags: ["python", "poetry", "pip"]
description: Workaround to use Poetry install and manage Pip requirements.txt
locale: "en-GB"
---

```shell
poetry init # initiate poetry proejct
poetry add $(cat requirements.txt) # poetry add each package in the requirements.txt
poetry run python FILE.py # run Python file
```
