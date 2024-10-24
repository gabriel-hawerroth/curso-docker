FROM golang:1.23.2 AS builder

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -ldflags="-w -s" -o myapp

FROM scratch

COPY --from=builder /app/myapp .

ENTRYPOINT ["./myapp"]
