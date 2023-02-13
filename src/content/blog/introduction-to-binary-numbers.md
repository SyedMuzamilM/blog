---
title: "Introduction to Binary Number: Understanding, Conversion, and Applications"
ogTitle: "Binary Numbers for Beginners: Easy Guide to Understanding and Conversion"
excerpt: "Get started with binary numbers with this beginner-friendly guide. Learn what binary numbers are, how to convert decimal to binary, and some basic applications of binary numbers in computing."
publishDate: "2023-02-08T11:39:36.050Z"
image: "https://assets.blackkalu.com/blackkalu/uploads/introduction_to_binary_number_system.png"
category: "technology"
author: "syed-muzamil"
tags: [binary number system, binary numbers, binary numbers for beginners, introduction to binary numbers, decimal to binary, binary to decimal]
---

In this article, I will try to explain the binary number system, the conversion of decimal numbers to binary numbers, and some applications of binary numbers.

## Introduction to binary numbers

The decimal number system might have already been introduced to you in your lower classes. Due to the fact that there are altogether 10 symbols or digits in the decimal number system (0, 1, 2, 3, 4, 5, 6, 7, 8, and 9), the decimal number system has a base of 10. Additionally, in the decimal number system, each successive position to the left of the decimal point represents a unit, tens, hundreds, thousands, etc. Each position represents a specific power of the base (10). For example, the decimal number 2586 (written as 2586<sub>10</sub>) consists of the digit 6 in the unit position, 8 in the tens position, 5 in the hundreds position, and 2 in the thousands position, and its value can be written as:

(2 x 10<sup>3</sup>) + (5 x 10<sup>2</sup>) + (8 x 10<sup>1</sup>) + (6 x 10<sup>0</sup>) = 2000 + 500 + 80 + 6 = 2586

Now, let's take the binary number system. In this system, the value of the base is  2 because there are only 2 symbols or digits (0 and 1). Just like in a decimal number system, each position is represented by a specific power of the base (10), in binary number system each position is represented by a specific power of the base (2). Hence, in this system, the rightmost position is the unit (2<sup>0</sup>) position, the second position from the right is 2's (2<sup>1</sup>) position, and proceeding in this way, we have 4's (2<sup>2</sup>) position, 8's (2<sup>3</sup>) position and so on. Now if we have a binary number, “10101” (written as 10101<sub>2</sub>), its decimal equivalent will be:

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

Now you have a basic understanding of binary numbers, let’s convert the decimal to binary and binary to decimal. In order to convert a decimal number into a binary number we need to divide the number will 2 and get the reminder and store the remainder. We will follow this process until the number becomes 1 and then we stop.

![Decimal To Binary](https://assets.blackkalu.com/blackkalu/uploads/decimal_to_binary.png)

As you can see in the above example we are taking 50 and dividing it by 2, storing the reminders until it becomes 1, that is when we stop and take the remaining 1 along with all the reminders from bottom to top.

So the binary representation of decimal number 50<sub>10</sub> is 110010<sub>2</sub> 

#### Converting Binary to Decimal

To convert the binary number into its decimal representation is very simple and easy to do. Let's take the same example 110010<sub>2</sub> which is the binary representation of 50<sub>10</sub>. In order to convert the binary number into decimal we need to simply multiple each bit with 2<sup>x</sup>, where x starts from 0 going from right to left. I also explained the position of the digits which starts from the rightmost digit. Units position, 2's position, 4's position and so on.

(1 x 2<sup>5</sup>) + (1 x 2<sup>4</sup>) + (0 x 2<sup>3</sup>) + (0 x 2<sup>2</sup>) + (1 x 2<sup>1</sup>) + (0 x 2<sup>0</sup>) = 32 + 16 + 0 + 0 + 2 + 0 = 50

This is how we convert binary number into its decimal representation.

## Applications

In computer systems, binary numbers are used in memory storage and data transmission. Binary numbers are also used in data compression algorithms to reduce the size of data while preserving its original form. Binary numbers are used in the digital encoding. Also, binary number system can be used in Boolean algebra.

---

This was just an introduction to the binary number system. There are lots of topics that I didn’t cover here, like 1’s complement, 2’s complement, Representation of negative numbers, and so on. I wanted to give you a brief introduction to the binary number system which we will be using in other bitwise operators that I didn’t mention in the previous article. If you didn't read that [click here](https://www.blackkalu.com/what-are-bitwise-operators.). Thanks for reading, I hope you enjoyed and learned something from this article. 
