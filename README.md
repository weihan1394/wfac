# Ang-Material
PSO Trial Project v0.1-beta

## Pre-requisite
- [Node](https://nodejs.org/en/download/releases/) version 12.16.1
- [Angular Cli](https://cli.angular.io/) version 8.2.1
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

## Version
- [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0
- [FormIO](https://github.com/formio/angular-material-formio) version 1.19.0
- [Angular Material](https://material.angular.io/) version 8.2.3
- [Material Design for Bootstrap](https://mdbootstrap.com/docs/angular/) version 8.10.1
- [Keycloak](https://www.npmjs.com/package/keycloak-angular) version 9.0.3

## Documentation
- [keycloak-js](https://www.keycloak.org/docs/latest/securing_apps/index.html#_javascript_adapter) version 9.0.3