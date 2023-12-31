## Entcoder [![npm version](https://img.shields.io/npm/v/entcoder?style=flat-square)](https://www.npmjs.com/package/entcoder)
> Fastest entities or ascii encode/decode Javascript library.

## npm install

```bash
$ npm install entcoder
```

###
```html
<!-- Implement Entcoder library (recomended) HTML Head section -->
<script src="node_modules/webpack/entcoder.min.js"></script>
<!-- OR -->
<script src="https://cdn.jsdelivr.net/npm/entcoder/webpack/entcoder.min.js"></script>
```

Usage
-----

### encode(text, options)

Encodes text replacing HTML special characters (`<>&"'`) and/or other character ranges depending on `mode` option value.

#### For Simple Javascript
```js
const {encode} = new Entcoder();
```

```js
const {encode} = require("entcoder");

encode("< & >");
// Output: &lt; &amp; &gt;

// set default encoding "entities" and type "html5"
encode("@package<name> ⨻", {encoding: "entities", type: "html5"});
// Output: @package&lt;name&gt; ⨻

encode("⨻ ∅ ▽", {encoding:"entities" type: "specialchar"});
// Output: &tritime; &varnothing; &xdtri;

// Encode hexadecimal formate
encode("𝓎 ⎱ ⦾ ℜ ⦰ ⨌", {encoding: "hex", type: "allchar"});
// Output: &#x1d4ce; &#x23b1; &#x29be; &#x211c &#x29b0 &#x2a0c;

// Encode decimal formate
encode("𝓎 ⎱ ⦾", {encoding: "dec", type: "allchar"});
// Output: &#120014; &#32; &#9137; &#32; &#10686;
```

Options:

#### encoding
* `entities`
* `hex`
* `dec`

#### type
* `allchar`
* `xml`
* `html4`
* `html5`
* `specialchar`

#### numeric

 * `decimal` uses decimal numbers when encoding html entities. i.e. `&#169;` (default).
 * `hexadecimal` uses hexadecimal numbers when encoding html entities. i.e. `&#xa9;`.


### decode(text, options)

Decodes text replacing entities to characters. Unknown entities are left as is.

```js
const {decode} = require("entcoder");

decode("&lt; &amp; &gt;");
// Output: < & >

// set default decoding "entities" and type "html5"
decode("@package&lt;name&gt; ⨻", {decoding: "entities", type: "html5"});
// Output: @package<name> ⨻

decode("&tritime; &varnothing; &xdtri;", {decoding:"entities" type: "specialchar"});
// Output: ⨻ ∅ ▽

// Decode hexadecimal formate
decode("&#x1d4ce; &#x23b1; &#x29be; &#x211c; &#x29b0; &#x2a0c;", {decoding: "hex", type: "allchar"});
// Output: 𝓎 ⎱ ⦾ ℜ ⦰ ⨌

// Decode decimal formate
decode("&#120014; &#32; &#9137; &#32; &#10686;", {decoding: "dec", type: "allchar"});
// Output: 𝓎 ⎱ ⦾
```

Options:

#### encoding
* `entities`
* `hex`
* `dec`

#### type
* `allchar`
* `xml`
* `html4`
* `html5`
* `specialchar`