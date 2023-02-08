---
title: "Introduction to Binary Number: Understanding, Conversion, and Applications"
ogTitle: "Binary Numbers for Beginners: Easy Guide to Understanding and Conversion"
excerpt: "Get started with binary numbers with this beginner-friendly guide. Learn what binary numbers are, how to convert decimal to binary, and some basic applications of binary numbers in computing."
publishDate: "2023-02-08T11:39:36.050Z"
image: "https://assets.blackkalu.com/blackkalu/a_beginners_guide_to_bitwise_operators.png" # Need to change the image
category: "technology"
# draft: true
author: "syed-muzamil"
tags: [c++ bitwise operators, c bitwise operators, bitwise operators, bit shifting, left shift operator, right shift operator, bitwise and, bitwise or, bitwise xor, bitwise not, binary mathematics, binary]
---

In this article I will try to explain binary number system, conversion of decimal number to binary number, and some applications of binary numbers. 

## Introduction to binary numbers

The decimal number system might have already been introduced to you in your lower classes. Due to the fact that there are altogether 10 symbols or digits in the decimal number system (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9), the decimal number system has a base of 10. Additionally, in the decimal number system, each successive position to the left of the decimal point represents a unit, tens, hundreds, thousands, etc. Each position represents a specific power of the base (10). For example, the decimal number 2586 (written as 2586<sub>10</sub>) consists of the digit 6 in the unit position, 8 in the tens position, 5 in the hundreds position, and 2 in the thousands position, and its value can be written as:

(2 x 10<sup>3</sup>) + (5 x 10<sup>2</sup>) + (8 x 10<sup>1</sup>) + (6 x 10<sup>0</sup>) = 2000 + 500 + 80 + 6 = 2586

Now, let's take the binary number system. In this system, the value of the base is  2 because there are only 2 symbols or digits (0 and 1). Just like in a decimal number system, each position is represented by a specific power of the base (10), in a decimal number system each position is represented by a specific power of the base (2). Hence, in this system, the rightmost position is the unit (2<sup>0</sup>) position, the second position from the right is 2's (2<sup>1</sup>) position, and proceeding in this way, we have 4's (2<sup>2</sup>) position, 8's (2<sup>3</sup>) position and so on. Now if we have a binary number, “10101” (written as 10101<sub>2</sub>), its decimal equivalent will be:

(1 x 2<sup>4</sup>) + (0 x 2<sup>3</sup>) + (1 x 2<sup>2</sup>) + (0 x 2<sup>1</sup>) + (1 x 2<sup>0</sup>) = 16 + 0 + 4 + 0 + 1 = 21

When using different number systems, it is a common practice to indicate the base as a subscript. Hence, we write:

10101<sub>2</sub> = 21<sub>10</sub>

In computer terminology single digit of the binary number (0 or 1) is called a bit. An n-bit number is a binary number consisting of 'n' bits. 

| Binary  |Decimal Equivalent|
|---|---|
|000|0|
|001|1|
|010|2|
|011|3|
|100|4|
|101|5|
|110|6|
|111|7|


This table lists all 3-bit numbers along with their decimal equivalents. As there are only 2 bits (0 and 1), in 3-bit numbers there are only 8 (2<sup>3</sup>) distinct patterns of 0's and 1's, and it can be seen from the table above that 3-bit numbers can have one of the 8 values ranging from 0 to 7. In fact, any decimal number in the range 0 to 2<sup>n</sup> - 1 can be represented in binary form as an n-bit number.

## Conversion

