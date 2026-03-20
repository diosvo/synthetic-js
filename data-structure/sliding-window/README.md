# Sliding Windows

## with fixed size K

Good for considering subarrays or substrings of one size.

### Steps:

1. Process first K elements into some "collection" (C) - initial window
2. Move window to the right
   - Remove trailing from C
   - Add leading to C
3. Do the business logic (max, min, etc.)

### Quizes

In array of length n, how many subarrays of:

❓ Any size are there?

→ O(n^2)

→ Each subarray can be defined as pair of start and end indices. There are n choices for each.

❓ Fixed size `k` are there?

→ O(n)

If n>=k, what is:

❓ O(nk) written in simplest form → O(nk)

❓ O(nk - kk) written in simplest form → O(nk) - Keep the larger term.

#### 👾 Practices

1. [max subarray sum size k](./max-subarray-sum-size-k.js)
2. [max subarray product size k](./max-subarray-product-size-k.js)
3. [subarray target sum size k](./subarray-target-sum-size-k.js)
4. [has substring anagram](./has-substring-anagram.js)
