# WFAC
PSO WFAC Trial Project v0.0.1

## Pre-requisite
- [Node](https://nodejs.org/en/download/releases/) version 12.16.1
- [Angular Cli](https://cli.angular.io/) version 8.3.28
- [Docker](https://docs.docker.com/docker-for-windows/install/) - For windows
- [Docker](https://docs.docker.com/docker-for-mac/install/) - For Mac

## Build
- `ng build` to build the project  (build artifacts will be stored in the `dist/` directory) 
- use the `--prod` flag for a production build.

## Start Project
### Docker
Start keycloak and postgres container
``` sh
docker-compose -f ./provisioning/local/docker-compose.yml up -d
```

### keycloak
http://localhost:9000
1. Import realm from ./config/realm-export_v1.json
2. Create users and groups

### Run Project
Install dependency and start project
``` sh
npm install
npm start
```
http://localhost:8080

### Fake Rest API Server
Install Server
``` npm
npm install -g json-server
```
Start Server
``` sh
cd json_server
json-server provisioning.json
```

## Version
- [Angular CLI](https://github.com/angular/angular-cli) ^8.3.28
- [FormIO](https://github.com/formio/angular-material-formio) ^1.19.0
- [Angular Material](https://material.angular.io/) ^8.2.3
- [Material Design for Bootstrap](https://mdbootstrap.com/docs/angular/) ^8.10.1
- [Keycloak](https://www.npmjs.com/package/keycloak-angular) ^10.0.2

## Documentation
- [keycloak-js](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter) ^10.0.2
