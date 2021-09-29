export declare function compress(string: string, options?: {
  mode: number,
  enableEndMark: boolean
}): string


export declare function compressUrlSafe(string: string, options?: {
  mode: number,
  enableEndMark: boolean
}): string

export declare function decompress(bytes: number[]|Int8Array): string

export declare function decompressUrlSafe(string: string): string
