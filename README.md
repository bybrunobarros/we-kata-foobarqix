## Statement

### FooBarQix

You should implement a function String compute(String) which implements the following rules.
#### Step 1
##### Rules
- If the number is divisible by 3, write “Foo” instead of the number
- If the number is divisible by 5, add “Bar”
- If the number is divisible by 7, add “Qix”
- For each digit 3, 5, 7, add “Foo”, “Bar”, “Qix” in the digits order.

##### Examples
```
1  => 1
2  => 2
3  => FooFoo (divisible by 3, contains 3)
4  => 4
5  => BarBar (divisible by 5, contains 5)
6  => Foo (divisible by 3)
7  => QixQix (divisible by 7, contains 7)
8  => 8
9  => Foo
10 => Bar
13 => Foo
15 => FooBarBar (divisible by 3, divisible by 5, contains 5)
21 => FooQix
33 => FooFooFoo (divisible by 3, contains two 3)
51 => FooBar
53 => BarFoo
```

#### Step 2

We have a new business request: 
- We must keep a trace of 0 in numbers, each 0 must be replaced by char “*“.

##### Examples
```
101   => 1*1
303   => FooFoo*Foo
105   => FooBarQix*Bar
10101 => FooQix**
```

## Implementation
By reading the **Step 1** rules we can see there are actually three things to do:
1. Write / Append a word when the input is divisible by a number.
2. Write / Append a word when a digit is found in the input.
3. Then return the two strings concatenated.
We will pay attention to the type of the value we check against. 

**Step 2** is a bit tricky. The case `101 => 1*1` shows that when replacing 0 by *, unlike **Step 1**, other digits shouldn't be replaced. 

The project run uses [Node.js](https://nodejs.org/) V14 as a minimum version. It allows us to use some JavaScript [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) features and Node.js [ESM modules](https://nodejs.org/docs/latest-v14.x/api/esm.html).

There are several ways to install Node.js:
- You can download it from the website: https://nodejs.org/en/download/
- If you already have a version of Node.js, and you want to manage several versions you can use [nvm](https://github.com/nvm-sh/nvm)

[Ava](https://github.com/avajs/ava) is used a test runner. It easily works, without any configuration needed.

The solution will be implemented around [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) manipulation.

## Run
1. To run the project you need to open a terminal and go tho the project folder.

2. Then install its dependencies:
```shell script
# It uses npm which is installed with Node.js by default
npm i
```
3. You can run all tests:
```shell script
npm t
```
4. You can play with it, as well:
```shell script
# Here 35 is an example of value you could use
node index.js 35
``` 

