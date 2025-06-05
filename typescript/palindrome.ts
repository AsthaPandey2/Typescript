function isPalindrome(num: number): boolean{
    const str = num.toString();
    return str === str.split('').reverse().join('');
}
const number=121;
if (isPalindrome(number)) {
    console.log(`${number} is a palindrome.`);
}
else{
    console.log(`${number} is not a palindrome.`);
}