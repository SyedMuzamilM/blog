---
title: "Binary Representation of Negative Numbers"
ogTitle: "Understanding Representation of Negative Numbers in Binary"
excerpt: "Learn different methods of representing negative number in binary with some examples."
publishDate: "2023-02-12T11:39:36.050Z"
image: "https://assets.blackkalu.com/blackkalu/uploads/binary_representation_of_negative_numbers.png"
category: "technology"
author: "syed-muzamil"
tags: [negative binary numbers, binary number, twos complement, ones complement, sign magniture, sign and magniture representation, binary representation of negative numbers, blackkalu, black kalu, negative binary numbers 1's complement, negative binary numbers 2's complement, negative binary numbers to decimal]
---

In the previous article, I introduced you to the Binary Number system. If you have not read that article [click here](https://www.blackkalu.com/blog/introduction-to-binary-numbers). In that article, I introduced binary numbers, the conversion of decimal and binary numbers, and talked about some applications of the binary number system. I didn’t talk about how negative numbers are represented in the binary number system, that is what I am going to explain in this article.

Since [binary numbers](https://www.blackkalu.com/blog/introduction-to-binary-numbers) can have only two digits/symbols either 0 or 1,it is not possible to add minus or plus symbol in front of a binary number.

In a decimal number, we add a minus symbol in front of a number if it is negative. In computer systems, we represent a negative and positive number by adding an extra bit in front of them called a sign bit. If the bit is 0 then the number is positive else if the bit is 1 then the number is negative.

## Ways to represent negative numbers in binary number system
There are several ways to represent negative numbers in binary which include:

Sign and magnitude representation, One's complement representation, and Two's complement method. These are explained below:

### 1. Sign and Magniture Representation

In this method the leftmost bit is used to indicate the sign of a number which is called a sign bit. The value of sign bit is 1 for negative numbers and 0 for positive numbers. The remaining bits are used to represent the magnitude of the number.

Let's suppose we have a 4-bit number, we can represent the positive number 5 as 0101, and the negative number -5 as 1101. We convert this binary number into its decimal equivalent by performing the binary to decimal conversion we learned in the [previous article](https://www.blackkalu.com/blog/introduction-to-binary-numbers), but remember to convert the sign bit and apply the appropriate sign to the result.

![Sign Magnitude Representation](https://assets.blackkalu.com/blackkalu/uploads/sign_magnitude_representation.png)

This method has an ambiguous representation of the number 0, which means 0 has two different representations one is +0 (0000 in 4-bit binary number) and another is -0 (1000 in 4-bit binary number)

### 2. One's Complement Representation

In order to get One's complement of a binary number, simply invert all the bits of the number. That means converting all the 0's into 1 and all 1's into 0. Let's understand this using an example. Suppose there is a binary number 11000101, then its one's complement will be 00111010.

Always remember that the leftmost bit or MSB (Most Significant Bit) is always 1 for negative numbers. So in order to represent a negative number in binary we take one's complement of that binary number.

![Sign Magnitude Representation](https://assets.blackkalu.com/blackkalu/uploads/ones_complement_representation.png) 

This method has also an ambiguous representation of the number 0, which means 0 has two different representations one is +0 (0000 in 4-bit binary number) and another is -0 (1111 in 4-bit binary number)

### 3. Two's Complement Representation

In order to get Two's complement of a binary number, simply invert all the bits of the number. That means converting all the 0's into 1 and all 1's into 0 and then add 1 to this number. In other words, we can say, take the one's complement of the number and add 1 to it. Let's understand this using an example. Suppose there is a binary number 11000101, then its one's complement will be 00111010. After adding 1 to this number it will become 00111011.

![Sign Magnitude Representation](https://assets.blackkalu.com/blackkalu/uploads/twos_complement_representation.png) 

**In this method there is only one representation of +0 and -0, so, two's complement representation is better than sign and magnitude representation and one's complement**

---

Thanks for reading this article. If you want to request any topic or feature on the website, feel free to contact us [here](https://www.blackkalu.com/contact).
