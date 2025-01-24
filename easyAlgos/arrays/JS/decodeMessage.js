/*
2325. Decode the Message

Hint
You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.



Example 1:
Input: key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv"
Output: "this is a secret"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "the quick brown fox jumps over the lazy dog".


Example 2:
Input: key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"
Output: "the five boxing wizards jump quickly"
Explanation: The diagram above shows the substitution table.
It is obtained by taking the first appearance of each letter in "eljuxhpwnyrdgtqkviszcfmabo".


Constraints:

26 <= key.length <= 2000
key consists of lowercase English letters and ' '.
key contains every letter in the English alphabet ('a' to 'z') at least once.
1 <= message.length <= 2000
message consists of lowercase English letters and ' '.
*/

const decodeMessage = (key, message) => {
  // clean key of empty space or tabs and create starting data structures
  key = key.replace(/\s/g, '');
  const translate = {};
  let tmp = 'a'.charCodeAt(0),
    decoded = '';

  // create hash table to assign each character in key a letter of the alphabet
  for (let i = 0; i < key.length; ++i) {
    if (!translate[key[i]]) {
      translate[key[i]] = String.fromCharCode(tmp);
      tmp++;
    }
  }

  // for each character in message, translate to letter in alphabet, if found in translation.
  // else just add the character in message; it could be punctuation or spacing...
  for (let i = 0; i < message.length; ++i) {
    if (translate[message[i]]) decoded += translate[message[i]];
    else decoded += message[i];
  }

  return decoded;
};

const key1 = 'the quick brown fox jumps over the lazy dog',
  message1 = 'vkbs bs t suepuv';

console.log(decodeMessage(key1, message1));
