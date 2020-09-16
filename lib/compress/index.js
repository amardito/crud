import { Buffer } from "buffer";
import zlib from "zlib";

export const gzip = (param = new String()) => {
  let buf = Buffer.from(JSON.stringify(param), 'utf-8');
  return zlib.gzipSync(buf);
}

export const unzip = (param) => {
  return JSON.parse(zlib.unzipSync(param).toString('utf8'));
}