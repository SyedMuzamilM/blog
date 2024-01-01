---
title: "A Beginner's Guide to Bitwise Operators: Understanding NOT, AND, OR, and XOR?"
ogTitle: "The Power of Bitwise Operators: Unlocking the Secrets of AND, OR, XOR, and NOT"
excerpt: "Bitwise operators may seem complex, but they can be incredibly useful in programming. In this article, we'll explore the basics of AND, OR, XOR, and NOT, and how they can help you write more efficient code."
publishDate: "2023-03-26T11:39:36.050Z"
image: "https://assets.blackkalu.com/blackkalu/a_beginners_guide_to_bitwise_operators.png" # Need to change the image
category: "technology"
draft: false
author: "syed-muzamil"
tags:
  [
    c++ bitwise operators,
    c bitwise operators,
    bitwise operators,
    bit shifting,
    left shift operator,
    right shift operator,
    bitwise and,
    bitwise or,
    bitwise xor,
    bitwise not,
    binary mathematics,
    binary,
  ]
---

In one of my previous articles, I explained what bitwise operators are. and I explained bit shifting operators, and how they work with some examples if you have not read that article [click here](https://www.blackkalu.com/blog/what-are-bitwise-operators/). Also, it would be best if you had some understanding of the [binary number system](https://www.blackkalu.com/blog/introduction-to-binary-number-system/) to properly understand this article. Now, let's dive into the article.

## Bitwise AND Operator

Bitwise AND denoted by `&` almost works in the same way as logical AND (&&). If we talk about logical AND we check two conditions (operands) one on the left side of && and another on the right side, and if both the conditions are true, it will return true else false. We can say Logical AND works on Booleans. Bitwise AND (&) works the same way, but it operators on bits rather than numbers. Let's consider 0 as false and 1 as true. In that case, Bitwise AND would work the same way as Logical AND. If both the right and left sides are 1 (true) then it will return 1 else 0 (false).

In other words, we can say Bitwise AND takes two numbers as operands and returns 1 if both operands are 1 else 0. Following is the Truth table for the Bitwise AND operator.

![And Gate Truth Table](https://assets.blackkalu.com/blackkalu/uploads/and_gate_truth_table.png)

Let's say we have a number 4 and another number 5, what will happen if we use Bitwise AND on these numbers? Let's see now.

```cpp
#include<iostream.h>
using namespace std;

void main() {
  int x = 4, y = 5;
  cout << (x & y) << endl;
  // x & y = 4
}
```

Since Bitwise Operators work on the bit level, we need to convert the numbers into their [binary form](https://www.blackkalu.com/blog/introduction-to-binary-numbers/) and then compare all the individual bits.

Here x is 4 and y is 5, and say the size of int is 4 bytes (which you can check by `sizeof(int)` in c/c++). Here we will only take 1 byte. So, the binary representation of 4 would be: 00000100

and the binary representation 5 would be 00000101

When using the Bitwise AND (&) operator on x and y, we have to compare all the bits individually. In other words, we can say we need to apply Bitwise AND (&) on individual bits from right to left.

`00000100 & 00000101 = 00000100 // 4`

As you can see, we compared all the bits of 4 and 5 individually and the output byte was set to 0000100 which is the binary representation of 4.

### Uses of Bitwise AND

1. **Checking if a number is even or odd**: We can use the Bitwise AND operator to check weather a number is even or odd. Specifically, if we apply the Bitwise AND (&) operator on numbers n and 1, and the result is 0, then the number is even, otherwise it's odd.
2. **Masking**: In computer science, a mask is a sequence of bits that can be used to extract certain bits from another sequence of bits. We can use the Bitwise AND operator to apply a mask to a number. Specifically, if we apply the Bitwise AND operator on a number n and a mask m, then we get a new number that contains only the bits that are set to 1 in the mask m.
3. **Checking if a bit is set**: We can use the Bitwise AND operator to check if a specific bit is set in a number. Specifically, if we apply the Bitwise AND operator on a number n and a mask that has only the bit we want to check set to 1, then the result will be 0 if the bit is not set, and non-zero if the bit is set.

## Bitwise OR Operator

The Bitwise OR operator is denoted by the `|` symbol, and it works on individual bits of two operands just like the Bitwise AND (&) operator. Specifically, if we apply the Bitwise OR operator on two numbers, it compares the individual bits of the binary representation of the two numbers and returns a new number where each bit is 1 if the corresponding bits in either or both operands are 1.

![OR Gate Truth Table](https://assets.blackkalu.com/blackkalu/uploads/or_gate_truth_table.png)

Here's an example:

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 5; // binary representation: 00000000 00000000 00000000 00000101
    int y = 3; // binary representation: 00000000 00000000 00000000 00000011
    int z = x | y; // binary representation: 00000000 00000000 00000000 00000111 (7 in decimal)
    cout << z << endl;
    return 0;
}
```

In this example, we apply the Bitwise OR operator on `x` and `y`, which are both integers. The binary representation of `x` is `00000000 00000000 00000000 00000101`, and the binary representation of `y` is `00000000 00000000 00000000 00000011`. When we apply the Bitwise OR operator on `x` and `y`, we compare each pair of corresponding bits and get the result `00000000 00000000 00000000 00000111` (7 in decimal).

### Uses of the Bitwise OR operator:

1. Combining flags: In computer programming, flags are often used to represent boolean values. We can use the Bitwise OR operator to combine multiple flags into a single value. Specifically, each flag is represented as a bit in a number, and we can use the Bitwise OR operator to set one or more flags to true.
2. Setting or clearing bits: We can use the Bitwise OR operator to set specific bits in a number. Specifically, if we apply the Bitwise OR operator on a number and a mask that has only the bit we want to set to 1, then the result will be a new number where the bit is set. To clear a bit, we can apply the Bitwise AND operator on the number and a mask that has only the bit we want to clear set to 0.
3. Computing bitwise unions: We can use the Bitwise OR operator to compute the union of two sets represented as bit vectors. Specifically, if we represent two sets as bit vectors, where each bit corresponds to an element of the set, and apply the Bitwise OR operator on the two-bit vectors, then the result will be a new bit vector that represents the union of the two sets.

## Bitwise XOR Operator

Bitwise XOR, denoted by `^`, stands for "exclusive or" compares the corresponding bits of two operands. If the corresponding bits are different, it sets the resulting bit to 1, otherwise, it sets it to 0. In other words, it returns a value with a 1 in each bit position where the corresponding bits of either but not both operands are 1.

In other words, we can say that the Bitwise XOR operator takes two numbers as operands and returns a number whose binary representation has 1s in the positions where the corresponding bits of the operands are different and 0s in the positions where they are the same. Here is the Truth table for the Bitwise XOR operator:

![XOR Gate Truth Table](https://assets.blackkalu.com/blackkalu/uploads/xor_gate_truth_table.png)

Let's say we have two numbers 4 and 5, and we want to apply the Bitwise XOR operator on them:

```cpp
#include<iostream.h>
using namespace std;

void main() {
  int x = 4, y = 5;
  cout << (x ^ y) << endl;
  // x ^ y = 1
}
```

Since the Bitwise XOR operator works on the bit level, we will first convert the numbers into their binary form and then compare all the individual bits. Here x is 4 and y is 5, and we will assume that the size of int is 4 bytes (which you can check by `sizeof(int)` in c/c++).

The binary representation of 4 is: 00000000 00000000 00000000 00000100 The binary representation of 5 is: 00000000 00000000 00000000 00000101

When using the Bitwise XOR operator on x and y, we will have to compare all the bits individually. In other words, we can say we need to apply the Bitwise XOR operator on individual bits from right to left. In our case, we will take the last byte for simplicity.

`00000100 ^ 00000101 = 00000001 // 1`

As you can see, we compared all the bits of 4 and 5 individually and the output byte was set to 00000001 which is the binary representation of 1.

### Uses of Bitwise XOR Operator

1. Encryption: Bitwise XOR is commonly used in encryption algorithms to scramble data. By XORing data with a key, the data becomes unreadable without the key. This is because the operation produces a result that is difficult to predict without knowledge of both inputs.
2. Error detection and correction: Bitwise XOR can be used to detect errors in data transmission. By XORing data with a checksum, the receiver can compare the result with the original checksum to see if any errors occurred during transmission. Additionally, Bitwise XOR can be used for error correction in certain situations.
3. Toggle bits: Bitwise XOR can be used to toggle bits in a number. This is useful when we want to invert a specific set of bits in a number without affecting the rest of the bits.
4. Computer graphics: Bitwise XOR can be used in computer graphics to combine two images or colors. By XORing the bits of each pixel in two images or colors, we can create a new image or color that combines the characteristics of both.

## Bitwise NOT Operator

The bitwise NOT operator (`~`) is a unary operator, meaning it operates on a single operand. It inverts all the bits of its operand. For example, if the operand is `1010` (in binary), the NOT operator will give `0101` (in binary) as output.

![NOT Gate Truth Table](https://assets.blackkalu.com/blackkalu/uploads/not_gate_truth_table.png)

Let's take an example to understand how the bitwise NOT operator works. Suppose we have the number 5, which is represented in binary as `00000101`. When we apply the NOT operator to this number, it will invert all the bits, which means we get `11111010` in binary as the output.

```cpp
#include <iostream>
using namespace std;

int main() {
  int x = 5;
  int result = ~x;
  cout << result << endl;  // Output: -6
  return 0;
}
```

Now, you might be wondering how we get the value of -6 when we apply the NOT operator to 5. This is because, in two's complement notation, the most significant bit represents the sign of the number. If the most significant bit is 0, the number is positive, and if it is 1, the number is negative. In the case of an 8-bit number, the range of signed numbers is -128 to 127.

When we apply the NOT operator to 5, we get `11111010` in binary. Since the most significant bit is 1, this number is negative. To convert this negative number to its decimal equivalent, we need to take the [two's complement](https://www.blackkalu.com/blog/binary-representation-of-negative-numbers/#3-twos-complement-representation) of the binary number. To take the two's complement, we invert all the bits and add 1 to the result.

So, let's invert all the bits of `11111010` to get `00000101`. Now we add 1 to it, which gives us `00000110`. This is the binary representation of the number 6. Since the original number was negative, we take the negative of this number, which gives us -6 as the final result

### Uses of Bitwise NOT Operator

1. Flipping bits: The Bitwise NOT operator can be used to flip the bits of a number. This can be useful in situations where we need to invert a specific set of bits in a number without affecting the rest of the bits.
2. Masking: The Bitwise NOT operator can be used to create a bit mask. A bit mask is a sequence of bits that is used to selectively enable or disable certain bits in a larger sequence of bits. By using the Bitwise NOT operator on a mask, we can invert the bits of the mask, which can be useful in situations where we need to enable or disable bits in a certain pattern.
3. Range of numbers: The Bitwise NOT operator can be used to find the range of numbers that can be represented by a given number of bits. By taking the Bitwise NOT of a number with all its bits set to 1, we get the maximum number that can be represented by the given number of bits. By taking the Bitwise NOT of 0, we get the minimum number that can be represented by the given number of bits.
4. Checking bit parity: The Bitwise NOT operator can be used to check the parity of a bit sequence. If the Bitwise NOT of a bit sequence is equal to the original bit sequence, then the sequence has even parity (an even number of 1s). If the Bitwise NOT of the bit sequence is not equal to the original bit sequence, then the sequence has odd parity (an odd number of 1s).

---

Thanks for reading this article. If you enjoyed this article and found it helpful dont't forget to share it. If you have any questions/doubts feel free to contact me [here](https://www.blackkalu.com/contact).
