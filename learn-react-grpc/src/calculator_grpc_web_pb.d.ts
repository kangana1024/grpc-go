import * as grpcWeb from 'grpc-web';

import {
  SumRequest,
  SumResponse} from './calculator_pb';

export class CalculatorServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  sum(
    request: SumRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: SumResponse) => void
  ): grpcWeb.ClientReadableStream<SumResponse>;

}

export class CalculatorServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  sum(
    request: SumRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<SumResponse>;

}

