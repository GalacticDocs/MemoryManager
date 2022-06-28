interface ICompareNumberDefaults {
    /**
     * Compares if provided number value is equal to the default number.
     * @param value - The number to compare.
     * @returns If it's true or false that it's equal.
     * @throws Throws an error if one of the values is invalid.
     */
    equal(value: number): boolean;

    /**
     * Compares if provided number value is greater than the default number.
     * @param value - The number to compare.
     * @returns If it's true or false that it's greater.
     * @throws Throws an error if one of the values is invalid.
     */
    greater(value: number): boolean;
    
    /**
     * Compares if provided number value is less than the default number. 
     * @param value - The number to compare.
     * @returns If it's true or false that it's less.
     * @throws Throws an error if one of the values is invalid.
     */
    less(value: number): boolean;
}

interface ICompareNumber {
    /**
     * Checks if the `a` value is less than the `b` value.
     * @param a The `a` value to check.
     * @param b The `b` value to check.
     * @returns Whether the `a` value is less than the `b` value.
     * @throws Throws an error if one of the values is invalid.
     */
    less(a: number, b: number): boolean;

    /**
     * Checks if the `a` value is greater than the `b` value.
     * @param a The `a` value to check.
     * @param b The `b` value to check.
     * @returns Whether the `a` value is greater than the `b` value.
     * @throws Throws an error if one of the values is invalid.
     */
    greater(a: number, b: number): boolean;
    
    /**
     * Checks if the `a` value is equal to the `b` value.
     * @param a The `a` value to check.
     * @param b The `b` value to check.
     * @returns Whether the `a` value is equal to the `b` value.
     * @throws Throws an error if one of the values is invalid.
     */
     equal(a: number, b: number): boolean;
}