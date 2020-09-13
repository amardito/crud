import { Buffer } from "buffer";
import zlib from "zlib";

export const gzip = (param = new String()) => {
  let buf = Buffer.from(param, 'utf-8');
  return zlib.gzipSync(buf);
}

export const unzip = (param) => {
  return zlib.unzipSync(param).toString('utf8');
}