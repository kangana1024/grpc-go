package main

import (
	"log"

	"github.com/golang/protobuf/protoc-gen-go/grpc"
	"github.com/kangana1024/grpc-go/greet/greetpb"
)

func main() {
	fmt.Println("Hello I'm a client")

	conn,err := grpc.Dial("localhost:50051",grpc.WithInsecure())

	if err != nil {
		log.Fatalf("could not connect: %v",err)
	}

	c := greetpb.NewGreetServiceClient(conn)
}