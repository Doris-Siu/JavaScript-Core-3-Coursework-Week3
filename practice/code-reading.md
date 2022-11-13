# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers

Because the x in the 1st console.log is in the function, so it will refer to the function-scoped variable which is 2; while the 2nd console. log lies outside the function so it will refer to the global-scoped variable x which is 1.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.
`10 undefined`
Because x is defined globally so it can be also referenced in the function, but y is declared within the function so the outer console.log cannot access the variable.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.
`9 { x: 10 }`
Because f1 did not update the global variable x, so it's still 9.
But, f2 has updated the value of the object y by 1 so the variable y is changed after the function call.
