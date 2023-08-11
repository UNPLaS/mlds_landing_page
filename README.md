# MLDS Landing Page Repo

## Development
Install node dependencies
```bash
npm i
```
Run development server
```bash
npm run dev
```
Access via ``localhost:3000``

## Build docker image for production
Install node dependencies
```bash
npm i
```
Build nginx image
```bash
docker build -t unjudge/mlds-landing-page .
```
Push image
```bash
docker push unjudge/mlds-landing-page
```