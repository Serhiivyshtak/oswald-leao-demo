import {useEffect} from 'react';

export function useRandom(lowerBound: number, upperBound: number) {
    const possibleValues: Array<number> = [];
    const usedValues: Array<number> = [];


    function fillPossibleValues(): void {
        for (let i = lowerBound; i <= upperBound; i++) {
            possibleValues.push(i);
        }
    }


    function arraysEqual(firstArray: Array<any>, secondArray: Array<any>): boolean {
        if (firstArray.length !== secondArray.length) {
            return false;
        }

        for (let i = 0; i < firstArray.length; i++) {
            if (firstArray[i] !== secondArray[i]) {
                return false;
            }
        }

        return true;
    }


    function nextRandom(): number {
        return Math.floor(Math.random() * (upperBound - lowerBound + 1) + lowerBound);
    }


    function nextUniqueRandom(): number {
        let newRandom: number = nextRandom();
        const allValuesUsed: boolean = arraysEqual(usedValues.sort(), possibleValues.sort());

        if (allValuesUsed) {
            throw new Error('All unique values used');
        }

        while (usedValues.includes(newRandom)) {
            newRandom = nextRandom();
        }

        usedValues.push(newRandom);

        return newRandom;
    }


    useEffect(() => {
        fillPossibleValues();
    }, []);


    return {nextRandom, nextUniqueRandom};
}