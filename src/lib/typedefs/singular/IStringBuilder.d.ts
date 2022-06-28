import { StringBuilder } from "../../builders/index";

export interface IBuilder<T> {
    defaults: T;
}

interface ICompareDefaults<T> {
    /**
     * Checks if the value is less than the default value.
     * @param value The value to check.
     * @param ignoreCase Whether to ignore case.
     * @returns Whether the value is less than the default value.
     * @throws Throws an error if the value is invalid.
     */
    less(value: T, ignoreCase?: boolean): boolean;

    /**
     * Checks if the value is greater than the default value.
     * @param value The value to check.
     * @param ignoreCase Whether to ignore case.
     * @returns Whether the value is greater than the default value.
     * @throws Throws an error if the value is invalid.
     */
    greater(value: T, ignoreCase?: boolean): boolean;
    
    /**
     * Checks if the value is equal to the default value.
     * @param value The value to check.
     * @param ignoreCase Whether to ignore case.
     * @returns Whether the value is equal to the default value.
     * @throws Throws an error if the value is invalid.
     */
     equal(value: T, ignoreCase?: boolean): boolean;
}

interface ICompare<T> {
    /**
     * Checks if the `a` value is less than the `b` value.
     * @param a The `a` to check.
     * @param b The `b` to check.
     * @param ignoreCase Whether to ignore case.
     * @returns Whether the `a` value is less than the `b` value.
     * @throws Throws an error if one of the values is invalid.
     */
    less(a: T, b: T, ignoreCase?: boolean): boolean;

    /**
     * Checks if the `a` value is greater than the `b` value.
     * @param a The `a` to check.
     * @param b The `b` to check.
     * @param ignoreCase Whether to ignore case.
     * @returns Whether the `a` value is greater than the `b` value.
     * @throws Throws an error if one of the values is invalid.
     */
    greater(a: T, b: T, ignoreCase?: boolean): boolean;
    
    /**
     * Checks if the `a` value is equal to the `b` value.
     * @param a The `a` to check.
     * @param b The `b` to check.
     * @param ignoreCase Whether to ignore case.
     * @returns Whether the `a` value is equal to the `b` value.
     * @throws Throws an error if one of the values is invalid.
     */
     equal(a: T, b: T, ignoreCase?: boolean): boolean;
}

// https://www.w3schools.com/jsref/jsref_obj_string.asp
export interface IStringBuilder extends IBuilder<string> {/**
     * Append a string to the current string.
     * @param string The string to append.
     * @returns The current string builder.
     */
    append(string: string): StringBuilder;

    /**
     * Prepends a string at the beginning of the current string.
     * @param value The string to prepend.
     * @returns The current string builder.
     */
    prepend(value: string): StringBuilder;

    /**
     * Returns the character at a specified index (position)
     * @param index The index of the character to search for.
     * @returns The character at the specified index.
     */
    charAt(index: number): string;

    /**
     * Returns the Unicode of the character at a specified index.
     * @param index The index of the character to search for.
     * @returns The Unicode of the character at the specified index.
     */
    charCodeAt(index: number): number;

    /**
     * Clears the current string.
     * @returns The current string builder.
     */
     clear(): StringBuilder;

    /** Compares the default string to provided string value. */
    compareDefaults: ICompareDefaults<string>;

    /**
     * Returns two or more joined strings.
     * @param strings The strings to join.
     * @returns The joined strings.
     */
    concat(...strings: string[]): string;

    /**
     * Returns if a string ends with a specified value.
     * @param searchString The string to search for.
     * @param endPosition The position to search from.
     * @returns A boolean indicating if the string ends with the specified value.
     */
    endsWith(searchString: string, ignoreCase?: boolean, endPosition?: number): boolean;

    /**
     * Returns if a string contains a specified value.
     * @param searchString The string to search for.
     * @param ignoreCase A boolean indicating if the search should be case insensitive.
     * @param position The position to search from.
     * @returns A boolean indicating if the string contains the specified value.
     */
    includes(searchString: string, ignoreCase?: boolean, position?: number): boolean;

    /**
     * Returns the index (position) of the first occurrence of a value in a string.
     * @param searchString The string to search for.
     * @param startPosition The position to search from.
     * @returns The index (position) of the first occurrence of the value in the string.
     * @throws Throws an error if the value is invalid.
     */
    indexOf(searchString: string, ignoreCase?: boolean, startPosition?: number): number;

    /**
     * Returns the index (position) of the last occurrence of a value in a string.
     * @param searchString The string to search for.
     * @param startPosition The position to search from.
     * @returns The index (position) of the last occurrence of the value in the string.
     * @throws Throws an error if the value is invalid.
     */
    lastIndexOf(searchString: string, ignoreCase?: boolean, startPosition?: number): number;

    /**
     * Compares two strings in the current locale.
     * @param value The string to compare.
     * @param ignoreCase Whether to ignore case.
     * @returns A number indicating the comparison result.
     * @throws Throws an error if the value is invalid.
     */
    localeCompare(value: string, ignoreCase?: boolean): number;

    /**
     * Searches a string for a value, or a regular expression, and returns the matches
     * @param searchValue The value to search for.
     * @param ignoreCase Whether to ignore case.
     * @returns The matches.
     */
    match(searchValue: RegExp): RegExpMatchArray | null;

    /**
     * Performs a math equation on the current string.
     * @param equasion The equation to perform.
     * @returns The result of the equation.
     * @throws Throws an error if the equation is invalid.
     */
     math(equasion: string): number;

    /**
     * Returns a new string with a number of copies of a string
     * @param count The number of copies to make.
     * @returns The new string.
     * @throws Throws an error if the value is invalid.
     */
    repeat(count: number): string;

    /**
     * Searches a string for a value, or a regular expression, and returns a string where the values are replaced
     * @param searchValue The value to search for.
     * @param replaceValue The value to replace the search value with.
     * @param ignoreCase Whether to ignore case.
     * @returns The new string with the replaced value.
     * @throws Throws an error if the value is invalid.
     */
    replace(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Searches a string for a value, or a regular expression, and returns an array containing all the matches
     * @param searchValue The value to search for.
     * @param replaceValue The value to replace the search value with.
     * @returns The new string with the replaced values.
     */
    replaceAll(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Searches a string for a value, or regular expression, and returns the index (position) of the match.
     * @param searchValue The value to search for.
     * @returns The index (position) of the match.
     */
    search(searchValue: string | RegExp): number;

    /**
     * Extracts a part of a string and returns a new string.
     * @param start The position to start from.
     * @param end The position to end at.
     * @returns The new string.
     */
    slice(start: number, end?: number): string;

    /**
     * Splits a string into an array of substrings.
     * @param separator The value to split on.
     * @param limit The maximum number of items to return.
     * @returns The array of substrings.
     */
    split(separator: string | RegExp, limit?: number): string[];

    /**
     * Checks whether a string begins with specified characters.
     * @param searchString The string to search for.
     * @param ignoreCase Whether to ignore case.
     * @param start The position to start from.
     * @returns A boolean indicating if the string begins with the specified characters.
     */
    startsWith(searchString: string, ignoreCase?: boolean, start?: number): boolean;

    /**
     * Extracts characters from a string, between two specified indices. (positions)
     * @param start The position to start from.
     * @param end The position to end at.
     * @returns The new string.
     */
    substring(start: number, end?: number): string;

    /**
     * Returns a string converted to lowercase letters, using the host's locale.
     * @returns The new string.
     */
    toLocaleLowerCase(): string;

    /**
     * Returns a string converted to uppercase letters, using the host's locale.
     * @returns The new string.
     */
    toLocaleUpperCase(): string;

    /**
     * Returns a string converted to lowercase letters.
     * @returns The new string.
     */
    toLowerCase(): string;

    /**
     * Returns the current string.
     * @returns The current string.
     */
    toString(): string;

    /**
     * Returns a string converted to uppercase letters.
     * @returns The new string.
     */
    toUpperCase(): string;

    /**
     * Returns a string with removed whitespaces.
     * @returns The new string.
     */
    trim(): string;

    /**
     * Returns the type of the current string.
     * @returns The type of the current string.
     */
    typeOf(): string;

    /**
     * Returns the primitive value of a string or a string object.
     * @returns The primitive value of a string or a string object.
     * @throws Throws an error if the value is invalid.
     */
    valueOf(): string;
}