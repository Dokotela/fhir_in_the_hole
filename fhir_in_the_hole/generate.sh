#!/bin/bash

cd ./go

rm -r pb_data

rm -r pb_migrations

rm -r migrations

rm go.mod

rm go.sum

rm fith

go mod fith myapp && go mod tidy

CGO_ENABLED=0 go build 

./fith serve

cd ..