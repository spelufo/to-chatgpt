.PHONY: build run lint clean

all: build

build:
	web-ext build --overwrite-dest

run:
	web-ext run --devtools --url about:addons

lint:
	web-ext lint

clean:
	rm -rf web-ext-artifacts
