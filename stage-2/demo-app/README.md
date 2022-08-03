# API App


## Getting Started


#### Install dependencies:
```sh
npm i
```

#### Set environment (vars):
```sh
cp .env.example .env
```


#### Start Postgres:
```sh
docker run  -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres`
```

#### Tests:
```sh
yarn test
```

#### Lint:
```sh
yarn lint
```
