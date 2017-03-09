ROOT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))


.PHONY: all backend frontend

all: backend frontend

backend:
	@echo "creating backend"
	cd ${ROOT_DIR}/backend && serverless deploy

frontend:
	@echo "creating frontend"
	cd ${ROOT_DIR}/frontend && npm run build
	cd ${ROOT_DIR} && ./frontend/node_modules/gh-pages/bin/gh-pages -d /frontend/build

clean:
	cd ${ROOT_DIR}/backend && serverless remove


