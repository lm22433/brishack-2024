import { element } from "prop-types";

type Struct = {
    day: number,
    novapes: number
}

function generate(testVapes: {date:string,userId:number}[]) {

    const first = new Date(testVapes[0].date)
    const last = new Date(testVapes[testVapes.length-1].date)
    const maxDay = calculateDiff(first, last);
    let objects: Struct[] = []

    let counter = 0
    let prev = 0
    let total = 0
    let current = first
    let distance = 0

    //loop through every vape instance and decide whether it is a new day or not
    //need to add a way to prefill 0's if the user started after 'day 0'
    //or we don't and day 0 is relative to when the person started their journey (need to discuss)
    for (let i = 0; i < testVapes.length; i++) {
        current = new Date(testVapes[i].date);
        distance = current.getDate()-first.getDate()
        //console.log(calculateDiff(prev,current))
        if (distance === prev) {
            counter++
        } else {
            //Add objects for days that have no extra tokes
            if (distance-prev > 1) {
                for (let j = 0; j < distance-prev-1; j++) {
                    objects.push({day: distance-(distance-prev)+j, novapes: total + counter});
                }
            }

            //Add Object
            objects.push({day: distance-1, novapes: total + counter})

            total += counter
            counter = 1
            prev = distance
        }
    }
    objects.push({day: distance, novapes: total + counter})

    return(objects)
}

function calculateDiff(first: Date, last: Date) {
    // Calculate the time difference in milliseconds
    const timeDiff = last.getTime() - first.getTime();

    // Convert the time difference to whole days
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}

function GenerateLeaderboardData() {

    const testVapes = [{date: "2024-01-12", userId: 1},
                    {date: "2024-01-12", userId: 1},
                    {date: "2024-01-13", userId: 1},
                    {date: "2024-01-15", userId: 1},
                    {date: "2024-01-18", userId: 1},
                    {date: "2024-01-12", userId: 2},
                    {date: "2024-01-13", userId: 2},
                    {date: "2024-01-13", userId: 2},
                    {date: "2024-01-14", userId: 2},
                    {date: "2024-01-18", userId: 2},
                    {date: "2024-01-18", userId: 2},]

    const datasets: Struct[][] = []
    datasets.push(generate(testVapes.filter((vape) => vape.userId === 1)))
    datasets.push(generate(testVapes.filter((vape) => vape.userId === 2)))

    return(datasets)
}

export default GenerateLeaderboardData