# float-mask 


![Size](https://img.shields.io/bundlephobia/min/float-mask?style=flat-square)

![Demo GIF](https://media.giphy.com/media/Su1oMIey7OnniABbOx/giphy.gif)

[Try it out](https://codesandbox.io/s/m316q)

`floatMask` is an input formatter for float values (like prices!), inspired by the price inputs in [YNAB](www.youneedabudget.com) apps.




Just define your _input format_, and `floatMask` will enter digits right to left, ensuring the output is in the right shape.

```
Input Format: '0.00'

User Input   |   Formatted Output
             |   0.00
1            |   0.01
12           |   0.12
123          |   1.23
1234         |  12.34
```


## 🌐 Install
npm: ```npm i float-mask```

yarn: ```yarn add float-mask```

## 🚀 Usage
Basic usage:
```
import { floatMask } from float-mask;

const priceFormat = '0.00'
const inputString = '256'

const formattedString = floatMask(inputString, priceFormat)

console.log(fomattedString)
// '2.65'
```

If you're receiving input from a user in real-time and want to format on the fly, run `floatMask` on input, then store the return value in your state. 
The next time you pass this (now formatted) string into `floatMask`, it will strip any decimals before formatting again.

Here's a simple React Native example.
```
const MyForm = () => {

  const inputFormat = '00.00';
  const [value, setValue] = useState('');

  return (
    <TextInput
      onChangeText={text => setValue(floatMask(text, inputFormat))}
      value={value}
    />
  );
  
}

```

## 💻 Compatibility

`floatMask` is platform agnostic and pure JavaScript. As a result, there's a few tasks which are left up the implementor.

In most cases you should:
- Restrict what characters are allowed
- Force the cursor to stay at the end of the input

