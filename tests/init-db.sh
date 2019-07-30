#!/bin/bash

echo "Running db seed commands"

psql -d postgres -c "INSERT INTO items VALUES ('64cc7542-dbcc-4277-a4a8-0139ef16ecae','Rustic Rubber Shirt');"