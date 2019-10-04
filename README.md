# Docker Exercise

This repository contains my answer to the Docker-compose exercise of Hervanta Campus' Cloud Application course. It consists of 2 nodeJS containers that are accessible via HTTP on port 8001, and that are able to communicate with each other.


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install this small app, and [docker](https://www.docker.com/) to launch it.

First, clone the repository on your machine, then navigate to the root folder.

```bash
cd service2
docker build .
cd ../
```

## Usage

To launch the app, simply type: 

```bash
docker-compose up --build
```

You can then test the HTTP GET request by using a service such as Postman, or simply opening your browser and typing http://localhost:8001/

## License
[MIT](https://choosealicense.com/licenses/mit/)