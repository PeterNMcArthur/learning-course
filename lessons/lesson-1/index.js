import { config } from "chai/lib/chai";

/*
    export - exports the function so other files can use it.
    () => {} - arrow functions are the same as function() {}
*/

export const add = (arr) => {
    let res = 0;

    for(let i = 0; i < arr.length; i++) {
        res = res + arr[i]
    }

    return res
}

export const upper = (name) => {
    const result = name.toUpperCase()
    return result
}

export const even = (arr) => {
    let newArray = [];

    for( let i=0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newArray.push(arr[i]) 
        }
    }
    return newArray
}

export const getFullNames = (people) => {
    let newPeopleArray = [];

    for( let i=0; i < people.length; i++) {
        newPeopleArray.push({
            fullName: people[i].firstName + ' ' + people[i].lastName,
            yearOfBith: 2017 - people[i].age
        })
    }
    return newPeopleArray
}
