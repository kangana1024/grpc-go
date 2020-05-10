import * as grpcWeb from 'grpc-web';

import {
  GreetRequest,
  GreetResponse} from './greet_pb';

export class GreetServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  greet(
    request: GreetRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: GreetResponse) => void
  ): grpcWeb.ClientReadableStream<GreetResponse>;

}

export class GreetServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  greet(
    request: GreetRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<GreetResponse>;

}

