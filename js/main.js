let users = ["How Are you Doing?", "What would you name your boat if you had one?",
"What’s the most useless talent you have?", "If you were a fruit, what fruit would you be?"];
let output = [];
for(let i = 0; i < users.length; i++){
        let input = prompt(users[i]);
        output.push(input);
        alert(`" ${output} "`);
        console.log(`${users[i]} ${input}`);
}
