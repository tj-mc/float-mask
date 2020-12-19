# float-mask 
![](./rnvs.png)

![licence](https://img.shields.io/npm/l/react-native-version-setter?style=flat-square)
![NPM Version](https://img.shields.io/npm/v/react-native-version-setter?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-gree?&style=flat-square)

YNAB-style input formatter for float values (like prices!)

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
