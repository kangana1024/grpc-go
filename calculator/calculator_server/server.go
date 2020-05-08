package main

import (
	"context"
	"fmt"
	"log"
	"net"

	"github.com/kangana1024/grpc-go/calculator/calculatorpb"
	"google.golang.org/grpc"
)

type server struct{}

func (*server) Sum(ctx context.Context, req *calculatorpb.SumRequest) (*calculatorpb.SumResponse, error) {
	fmt.Printf("Received Sum RPC: %v", req)
	firstNumber := req.FirstNumber
	secoundNumver := req.SecondNumber

	sum := firstNumber + secoundNumver
	res := &calculatorpb.SumResponse{
		SumResult: sum,
	}

	return res, nil
}

func main() {
	fmt.Println("calculator server ...")

	lis, err := net.Listen("tcp", ":50051")

	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	s := grpc.NewServer()

	calculatorpb.RegisterCalculatorServiceServer(s, &server{})

	if err := s.Serve(lis); err != nil {
		log.Fatalf("Failed to server: %v", err)
	}
}
