Instructions

```
npm install
npm run dev
```
Once the server is up and running, try the following:

```
curl --location --request POST 'http://localhost:8000/api/post' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "bar",
}' -ik
```
