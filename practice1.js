// Выведите столбец чисел от 1 до 100 с помощью цикла while и for;
 let numbers = 1;
 while (numbers <=100){
    console.log(numbers);
    numbers++;
 };
 for (numbers; numbers <=100; numbers++){
    console.log(numbers);
 }

//Выведите столбец чисел от 11 до 33;
let task2Numbers = 11;
while (task2Numbers <= 33){
    console.log(task2Numbers);
    task2Numbers++;
}
for(task2Numbers; task2Numbers <= 33; task2Numbers++){
    console.log(task2Numbers);
}

//Выведите столбец четных чисел в промежутке от 0 до 100.
let task3Numbers = 0;
while(task3Numbers <= 100){
    if(task3Numbers%2 === 0){
        console.log(task3Numbers);
    }
    task3Numbers++;
}
for(task3Numbers; task3Numbers <= 100; task3Numbers++){
    if(task3Numbers%2 === 0){
        console.log(task3Numbers);
    }
    task3Numbers++;
}

//С помощью цикла найдите сумму чисел от 1 до 100.
let num = 1;
let sum = 0;
for (num; num <= 100; num++){
    sum += num;
    console.log(sum);
}
while (num <= 100){
    sum+=num;
    console.log (sum);
    num++;
}