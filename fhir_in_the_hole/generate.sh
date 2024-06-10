#!/bin/bash

rm -r pb_data

rm -r pb_migrations

rm go.mod

rm go.sum

rm myapp

go mod init myapp && go mod tidy

CGO_ENABLED=0 go build 

./myapp serve