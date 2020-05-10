import * as jspb from "google-protobuf"

export class SumRequest extends jspb.Message {
  getFirstNumber(): number;
  setFirstNumber(value: number): void;

  getSecondNumber(): number;
  setSecondNumber(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SumRequest): SumRequest.AsObject;
  static serializeBinaryToWriter(message: SumRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumRequest;
  static deserializeBinaryFromReader(message: SumRequest, reader: jspb.BinaryReader): SumRequest;
}

export namespace SumRequest {
  export type AsObject = {
    firstNumber: number,
    secondNumber: number,
  }
}

export class SumResponse extends jspb.Message {
  getSumResult(): number;
  setSumResult(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SumResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SumResponse): SumResponse.AsObject;
  static serializeBinaryToWriter(message: SumResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SumResponse;
  static deserializeBinaryFromReader(message: SumResponse, reader: jspb.BinaryReader): SumResponse;
}

export namespace SumResponse {
  export type AsObject = {
    sumResult: number,
  }
}

