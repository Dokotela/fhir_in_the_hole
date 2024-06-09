#!/bin/bash

rm -r pb_data

rm -r pb_migrations

rm go.mod

rm go.sum

go mod init myapp && go mod tidy

go run main.go serve

GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build 

