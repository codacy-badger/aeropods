# `@aeropod/api`

Package that holds an `express`-based Node.js application.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites

```
#!/bin/bash
Node@v13.x.x
```

### Installing

A step by step series that will tell you how to get a development env running.

```
#!/bin/bash
$ git clone https://github.com/ARACLX/aeropods.git
$ cd aeropods/packages/api
```

### Scripts

| Command  | Description                                                                     |
| :------- | :------------------------------------------------------------------------------ |
| yarn dev | Starts a development server which have included automatic reolading by changes. |

### Prisma Usage

There are small cheatsheet with useful `prisma` commands that will allow you to
manipulate database.

- `yarn run prisma studio --experimental`, run a web application that allows you
  to read/write a database.
- `yarn run prisma generate`, generates a database client package in
  `node_modules`.
- `yarn run prisma introspect`,
- `yarn run prisma migrate save --experimental`,
- `yarn run prisma migrate up --experimental`
