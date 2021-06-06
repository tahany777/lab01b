let users = ["How do you feel about putting pineapple on pizza?", "What would you name your boat if you had one?",
"What’s the most useless talent you have?", "If you were a fruit, what fruit would you be?"];
let output = [];
for(i = 0; i < users.length; i++){
        let input = prompt(users[i]);
        output.push(input);
        alert(`${users[i]} ${input}`);
        console.log(`${users[i]} ${input}`);
}
alert(`" ${output} " `); 
