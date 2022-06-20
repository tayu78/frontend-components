# memo
## HTML
### input
- `name` : specifies the name od an `<input>` element
### table
- `thead`にはpaddingが効かない([参考](https://www.w3.org/TR/CSS2/box.html#propdef-padding))
    >Applies to:  	all elements except table-row-group, table-header-group, table-footer-group, table-row, table-column-group and table-column

### svg
- 塗りつぶしたい時は`fill`プロパティを使用できる([参考](https://css-tricks.com/almanac/properties/f/fill/))


## Web API
### Local Storage API
window object has localstorage object. we can use storage object like `window.localStorage` or just `localStorage`.\
same domain has same localStorage?\
localStorage stores data as string key-value pair.

オブジェクトをsetItemでlocalstorageに格納する場合は注意が必要
```js
class Book(){
    constructor(title){
        this.title = title
            }
}
localStorage.setItem("book",new Book("Naruto"))
console.log(localStorage.getItem("book")) // [object Object] になる。setItemする時に第二引数がstringじゃない時は自動でstringにコンバートされるが、オブジェクトの場合は"[object Object]"として格納されるみたい

 //解決策として
 localStorage.setItem("book",JSON.stringify(new Book("Naruto")));
 console.log(localStorage.getItem('book')) //"{\"title\":\"y\",\"author\":\"s\",\"isbn\":\"8\"}"
 console.log(JSON.parse(localStorage.getItem('book'))
 // {title: 'y', author: 's', isbn: '8'}

 //上記のようにJSON.stringifyを使用して自分でstring型にしてからsetItemの引数に代入する必要がある。
```

- [Web Storage API(W3 Schools)](https://www.w3schools.com/js/js_api_web_storage.asp)
- [How to use Local Storage in JavaScript(Youtube)](https://www.youtube.com/watch?v=k8yJCeuP6I8)
- [Storing and retrieving JavaScript objects in localStorage](https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/)


## build in object
### [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
>The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.
