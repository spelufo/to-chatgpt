.PHONY: build run

all: build

build:
	web-ext build --overwrite-dest

run:
	web-ext run --devtools
