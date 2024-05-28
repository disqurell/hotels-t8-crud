# T-8 README

## To run:
1. Install node modules:
```sh
npm install
```
2. Create `.env` file with:
```python
DB_NAME=""
DB_USER=""
DB_PASSWORD=""
DB_HOST=""
DB_PORT=""
```

3. Run:
```sh
npm start
```

## Endpoints:

|url|method|about|
|---|------|-----|
|/user/|POST|create new user|
|/user/?id|GET|get user|
|/user/?id|PUT|update user|
|/user/?id|DELETE|delete new user|
