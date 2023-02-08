---
title: "What are Bitwise Operators?"
ogTitle: "Bitwise Operators: A Complete Guide for Beginners"
excerpt: "Take a deep dive into bitwise operators in this comprehensive guide for beginners. Learn what bitwise operators are, how to use them in computer programming, and real-world applications of bitwise operations."
publishDate: "2023-02-05T11:39:36.050Z" # Todo: Need to change the date to publishing date
image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?&auto=format&fit=crop&w=1976&q=80"
category: "technology"
author: "syed-muzamil"
tags: [what are bitwise operators, bitwise operators, c++ bitwise operators, c bitwise operators, bitwise operators, bit shifting, left shift operator, right shift operator, bitwise and, bitwise or, bitwise xor, bitwise not, binary mathematics, binary]
---

Bitwise Operators are a set of operators that operate on individual bits in a value, rather than the value as a whole. They perform operations such as AND, OR, XOR, NOT, and bit shifting on binary representations of values. These operations can be used for various purposes, including testing individual bits, setting or clearing bits, and manipulating binary values. Bitwise operators are often used in low-level programming, where the optimization of memory and processing power is important, but they can also be useful in higher-level applications. They can be used in various programming languages, including C, C++, Java, and Python.

Let's Talk a bit about binary before diving into the bitwise operations.

As you may already know computers only understand 0's and 1's since there are only two numbers hence it is called binary. Unlike the decimal number system which has 10 digits from 0 through 9 and is to the base 10, binary is to the base 2. There is a lot to talk about binary but this topic is not about it. 

If you want to read about the binary number system here are some links [Wikipedia](https://en.wikipedia.org/wiki/Binary_number), [Britannica](https://www.britannica.com/technology/bit-communications), [Cuemath](https://www.cuemath.com/numbers/binary-number-system/)

Let's see some example of binary numbers and then we will try to perform some operations on those number and explain what those operators do. We will perform bit shifting on these numbers and see how these numbers will behave.

## Bit Shifting

There are two bit-shifting operators, Right Shift `>>` and Left Shift `<<`. The purpose of these operators is to shift the bits to the right or to the left depending upon which one we are using.

Let's try these operators on the two numbers and see how these numbers behave. 

Syntax:

```cpp
number >> x; // x could be any number
number << x; // x could be any number
```

Example:

```cpp
int number = 2;

int leftShiftedResult = number >> 1 // 4

int rightShiftedResult = number << 1 // 1 
```

What is happening here? Here we use 2 which is 10 in binary. when we apply the Left Shift with 1 to the number 2 it returns 4. So the Left Shift operator shifts the binary represantation of a value (in our case 2) to the left by a specified number of positions (in our case x = 1). This has the effect of multiplying the value by 2 raised to the power of the number of positions shifted. 

In most programming languages, the Left Shift Operator returns an integer result, with any excess bits that are shifted past the end of the binary representation being discarded. Additionally, the value of the least significant bit is filled with zeros when bits are shifted to the left. This means that shifting a value to the left is equivalent to multiplying it by a power of 2 and can be used to quickly scale a value up.

So 2 which is 10 will become 100 which is 4 in binary. When we apply the Left Shift operator on a number with x it returns the **number * 2 <sup>x</sup>**. So, the result will be equivalent to **2 * 2 <sup>1</sup> = 2 * 2 = 4**.

Similarly, The Right Shift operator shifts the binary represantation of a value (in our case 2) to the right by a specified number of positions (in our case x = 1). And this has the effect of dividing the value by 2 raised to the power of the number of positions shifted.

So 2 which is 10 will become 1 which is 1 in binary, which is equivalent to **2 / 2 <sup>1</sup> = 2 / 2 = 1**

**Note** for the odd numbers if we apply the formula we will get the number in decimal, but we are working with integers and the decimal part will be ignored and the result will be an integer.

Taking the example of 5 which is 101 in binary if we will apply the Right Shift operator, `5 >> 1` by the formula, the result should be **5 / 2 <sup>1</sup> = 2.5**. But we are dealing with integers so the result will be an integer in this case we will get 2.

It’s worth noting that shifting a value too far to the left can result in overflow, causing the value to wrap around and become negative. In some programming languages, the size of integers is limited, and overflowing can result in undefined behavior. It is important to be mindful of this when using the Left Shift Operator.

Thanks for reading the article. I will talk about the other bitwise operators in the next article. If you have any queries or suggestions, feel free to contact me [here](/contact). 

