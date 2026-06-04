import { useRef, useCallback } from 'react';


export function useRandom(lowerBound: number, upperBound: number) {
    const pool = useRef<number[]>([]);
    const isInitialized = useRef(false);


    const initializePool = useCallback(() => {
        const newPool: number[] = [];

        for (let i = lowerBound; i <= upperBound; i++) {
            newPool.push(i);
        }

        pool.current = newPool;
        isInitialized.current = true;
    }, [lowerBound, upperBound]);


    if (!isInitialized.current) {
        initializePool();
    }


    const nextUniqueRandom = useCallback((): number => {
        if (pool.current.length === 0) {
            throw new Error('All unique values used');
        }

        const randomIndex = Math.floor(Math.random() * pool.current.length);

        const value = pool.current.splice(randomIndex, 1)[0];

        return value;
    }, [initializePool]);


    return { nextUniqueRandom };
}