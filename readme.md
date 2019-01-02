# array-chunk

> Chunk array on small pieces by either a fixed numbers of items per chunk or by a fixed number of chunks.


## Install

```
$ npm install --save array-chunk
```


## Usage

```js
const {chunk, chunkFixedChunkNumber} = require('array-chunk');

// Chunk the Array with a fixed number of items per Chunk
chunk([1, 2, 3, 4], 3);
//=> [[1, 2, 3], [4]]

// Chunk the Array with a fixed number of chunks
chunkFixedChunkNumber([1, 2, 3, 4], 3);
//=> [[1, 4], [2], [3]]
```


## API

### chunk(arr, size)

#### arr

*Required*  
Type: `array` | [`TypedArray`](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

Your array

#### size

*Required*  
Type: `number`

Length of nested array , default `1`

### chunkFixedChunkNumber(arr, size)

#### arr

*Required*  
Type: `array` | [`TypedArray`](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

Your array

#### chunkNumber

*Required*  
Type: `number`

Number of chunks to form , default `1`.  
When the number of chunks is not divisible without remainders it fills the chunks starting with the first 'beginning left'.  


## License

MIT
