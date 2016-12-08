let userArray = process.argv.slice(2);

const [, username, email] = userArray;

console.log(`{ username: '${username}', email: '${email}' }`);