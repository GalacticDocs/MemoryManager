export ICompareDefaults<T> {
    
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
export interface INumberBuilder extends IBuilder<number> {
    /**
     * Adds a number to the default number.
     * @param value - The number to add.
     * @returns The calculated number.
     */
    add(value: number): number;

    /** Clears the default number/sets the number to 0. */
    clear(): number;

    /** Compares the default number to provided number value. */
    compareDefaults: ICompareDefaults<number>;

    /**
     * Devides a number with the default number.
     * @param value - The number to use devision.
     * @returns The calculated number. 
     */
    devide(value: number): number;

    /**
     * Minuses a number from the default number.
     * @param value - The number to minus.
     * @returns The calculated number.
     */
    minus(value: number): number;

    /**
     * Times a number with the default number.
     * @param value - The number to use to time the number.
     * @returns The calculated number.
     */
    times(value: number): number;
}