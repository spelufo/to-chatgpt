.PHONY: build run lint clean

all: build

build: manifest.json
	web-ext build --overwrite-dest

run: manifest.json
	web-ext run --devtools --url about:addons

lint: manifest.json
	web-ext lint

clean:
	rm -rf web-ext-artifacts manifest.json

manifest.json: manifest.v2.json
	cp manifest.v2.json manifest.json


run_v3:
	cp manifest.v3.json manifest.json
	web-ext run --firefox-preview --devtools --url about:addons
