let x = [1,2,3];
let y = [4,5];
console.log(x+y); // "1,2,3" + "4+5" => 1,2,34,5

// proper way to merge arrays using spread operator
let merged = [...x, ...y];
console.log(merged); // [1, 2, 3, 4, 5]

console.log('-------------------');

// array destructuring
let [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40, 50]

console.log('-------------------');

// object destructuring
let user = { name: 'Enver', age: 25, city: 'Arizona' };
let { name, age, city } = user;
console.log(name); // Enver
console.log(age);  // 25
console.log(city); // Arizona

console.log('-------------------');

// spread operator with objects
let baseConfig = { browser: 'chrome', headless: false };
let extendedConfig = { ...baseConfig, timeout: 3000, url: 'www.google.com' };
console.log(extendedConfig); // { browser: 'chrome', headless: false, timeout: 3000, url: 'www.google.com' }

console.log('-------------------');

// nullish coalescing operator ??
let browserName = null;
let defaultBrowser = browserName ?? 'chrome';
console.log(defaultBrowser); // chrome

let selectedBrowser = 'firefox';
let activeBrowser = selectedBrowser ?? 'chrome';
console.log(activeBrowser); // firefox

console.log('-------------------');

// optional chaining with arrays
let testSuite = {
    name: 'Regression',
    tests: ['login', 'search', 'checkout']
};
console.log(testSuite?.tests?.[0]); // login
console.log(testSuite?.results?.[0]); // undefined (no error)

console.log('-------------------');

// array methods: map, filter, reduce
let scores = [45, 78, 92, 33, 60, 88];

// map: transform each element
let doubled = scores.map(score => score * 2);
console.log(doubled); // [90, 156, 184, 66, 120, 176]

// filter: keep elements that match condition
let passed = scores.filter(score => score >= 60);
console.log(passed); // [78, 92, 60, 88]

// reduce: accumulate into a single value
let total = scores.reduce((acc, score) => acc + score, 0);
console.log(total); // 396

let average = total / scores.length;
console.log(average); // 66

console.log('-------------------');

// chaining array methods
let students = [
    { name: 'Enver',  score: 92 },
    { name: 'Kudret', score: 45 },
    { name: 'Ezmet',  score: 78 },
    { name: 'Ravi',   score: 33 },
    { name: 'Pooja',  score: 88 },
];

// get names of students who passed (score >= 60), sorted alphabetically
let passedStudents = students
    .filter(s => s.score >= 60)
    .map(s => s.name)
    .sort();
console.log(passedStudents); // ['Enver', 'Ezmet', 'Pooja']

console.log('-------------------');

// find and findIndex
let found = students.find(s => s.name === 'Ezmet');
console.log(found); // { name: 'Ezmet', score: 78 }

let idx = students.findIndex(s => s.name === 'Ravi');
console.log(idx); // 3

console.log('-------------------');

// some and every
let anyFailed = students.some(s => s.score < 60);
console.log(anyFailed); // true

let allPassed = students.every(s => s.score >= 60);
console.log(allPassed); // false

console.log('-------------------');

// object methods: Object.keys, Object.values, Object.entries
let testConfig = { browser: 'chrome', url: 'www.google.com', timeout: 3000 };

console.log(Object.keys(testConfig));    // ['browser', 'url', 'timeout']
console.log(Object.values(testConfig));  // ['chrome', 'www.google.com', 3000]
console.log(Object.entries(testConfig)); // [['browser','chrome'], ['url','www.google.com'], ['timeout',3000]]

// iterate over entries
Object.entries(testConfig).forEach(([key, value]) => {
    console.log(`${key} : ${value}`);
});
// browser : chrome
// url : www.google.com
// timeout : 3000

console.log('-------------------');

// short-circuit evaluation: && and ||
let isLoggedIn = true;
isLoggedIn && console.log('User is logged in'); // User is logged in

let username = '';
let displayName = username || 'Guest';
console.log(displayName); // Guest

console.log('-------------------');

// template literals: multi-line and expressions
let browser = 'Chrome';
let version = 120;
let os = 'Windows';
let report = `
Browser  : ${browser}
Version  : ${version}
OS       : ${os}
Status   : ${version >= 100 ? 'Supported' : 'Not Supported'}
`.trim();
console.log(report);
// Browser  : Chrome
// Version  : 120
// OS       : Windows
// Status   : Supported

console.log('-------------------');

// typeof checks
console.log(typeof 'hello');     // string
console.log(typeof 42);          // number
console.log(typeof true);        // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object  (known JS quirk)
console.log(typeof {});          // object
console.log(typeof []);          // object
console.log(typeof function(){}); // function