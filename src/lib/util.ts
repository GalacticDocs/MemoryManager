import { exit } from "process";
import { StringBuilder } from "./builders/index";

/**
 * A function which makes the beginning letter uppercase of the provided string.
 * @param value The string to make the beginning letter uppercase.
 * @returns The string with the beginning letter uppercase.
 */
export const UppercaseFirst = (value: string): string => {
    check<string>(value);
    if (value.length === 0 || value === "") {
        throw new Error("String value cannot be empty.");
    }

    return value.charAt(0).toUpperCase() + value.substring(1);
};

/**
 * Exits the program with the given status.
 */
export const Exit = (status: "success" | "failure" | "error") => exit(status === "success" ? 0 : status === "failure" ? 1 : 2);

/**
 * Prints the given value(s) to console.
 * @param value The value(s) to pring.
 * @returns The value(s) passed into console.
 */
export const Print = <T>(value: T | T[]) => {
    const builder = new StringBuilder("");
    const p = (printable) => process.stdout.writable ? process.stdout.write(printable) : null;
    
    if (Array.isArray(value)) {
        value.forEach(v => builder.append(String(v)).append("\n"));
        
        return p(builder.toString());
    } else {
        console.log(value);
    }
};

/**
 * Returns the type as a string.
 * @param type
 * @returns The type but stringified.
 */
const stringifyType = <T>(type: T) => {
    return String(typeof type).toString();
};

/**
 * Checks if said string value is null, undefined or empty.
 * @param value The string value to check.
 * @returns {Error} If the value is null or undefined or empty.
 */
export const check = <T>(value: T) => {
    const typed = stringifyType(typeof value);

    if (value === null) {
        throw new Error(`${UppercaseFirst(typed)} value cannot be null.`);
    } else if (value === undefined) {
        throw new Error(`${UppercaseFirst(typed)} value cannot be undefined.`);
    }
}

/**
 * A check for if it's a number.
 * @param value
 * @param type The type to check.
 * @throws {Error} if the type is invalid.
 */
const checkNumber = (value: string) => {
    if (typeof value !== "number") {
        throw new Error(`The value should be a type of ${UppercaseFirst(stringifyType<number>(-1))}`);
    }
};

/**
 * Checks if said equation is a valid math equation and not JavaScript code.
 * @param value The string to check.
 * @returns {Error} If the string is not a valid math equation.
 */
export const MathCheck = (value: string): string => {
    check<string>(value);
    if (value.length === 0 || value === "") {
        throw new Error("String value cannot be empty.");
    }

    const regex = /^[0-9]*[+\-*/]?[0-9]+$/;
    if (!regex.test(value)) {
        throw new Error("Value is not a valid math equation.");
    }

    return value;
}