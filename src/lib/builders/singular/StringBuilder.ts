import { BaseBuilder } from "../index";
import { 
    check, MathCheck, UppercaseFirst,
    IStringBuilder
} from "../../index";

export class StringBuilder extends BaseBuilder<string> implements IStringBuilder.IStringBuilder {
    public escapeSequences = {
        null: "\0",
        singleQoute: "'",
        doubleQoute: "\"",
        backSlash: "\\",
        newLine: "\n",
        carriageReturn: "\r",
        verticalTab: "\v",
        tab: "\t",
        backspace: "\b",
        formFeed: "\f",
    };

    public compareDefaults: IStringBuilder.ICompareDefaults<string> = {
        equal: (value: string, ignoreCase?: boolean): boolean => {
            // Checks if the case of the searchable string should be ignored.
            if (ignoreCase) {
                value = value.toLowerCase();
            }

            // Checks if the string is valid.
            this.strCheck(this.defaults);

            return this.defaults === value;
        },
        greater: (value: string, ignoreCase?: boolean): boolean => {
            // Checks if the case of the searchable string should be ignored.
            if (ignoreCase) {
                value = value.toLowerCase();
            }

            // Checks if the string is valid.
            this.strCheck(this.defaults);

            return this.defaults > value;
        },
        less: (value: string, ignoreCase?: boolean): boolean => {
            // Checks if the case of the searchable string should be ignored.
            if (ignoreCase) {
                value = value.toLowerCase();
            }

            // Checks if the string is valid.
            this.strCheck(this.defaults);

            return this.defaults < value;
        }
    };
    public static compare: IStringBuilder.ICompare<string> = {
        equal: (a: string, b: string, ignoreCase?: boolean): boolean => {
            // Checks if the case of the searchable string should be ignored.
            if (ignoreCase) {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }

            // Checks if the string is valid.
            check<string>(a);
            check<string>(b);
            if (a === "" || b === "") {
                throw new Error(`String value ${a === "" ? "\"a\"" : "\"b\""} cannot be empty.`);
            }

            return a === b;
        },
        greater: (a: string, b: string, ignoreCase?: boolean): boolean => {
            // Checks if the case of the searchable string should be ignored.
            if (ignoreCase) {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }

            // Checks if the string is valid.
            check<string>(a);
            check<string>(b);
            if (a === "" || b === "") {
                throw new Error(`String value ${a === "" ? "\"a\"" : "\"b\""} cannot be empty.`);
            }

            return b > a;
        },
        less: (a: string, b: string, ignoreCase?: boolean): boolean => {
            // Checks if the case of the searchable string should be ignored.
            if (ignoreCase) {
                a = a.toLowerCase();
                b = b.toLowerCase();
            }

            // Checks if the string is valid.
            check<string>(a);
            check<string>(b);
            if (a === "" || b === "") {
                throw new Error(`String value ${a === "" ? "\"a\"" : "\"b\""} cannot be empty.`);
            }

            return a < b;
        }
    };
    
    constructor(defaults: string) {
        super(defaults);
    }

    /**
     * Checks the string for null or undefined or if it's empty.
     * @param value The string to check.
     * @throws {Error} If the value is null or undefined.
     * @throws {Error} If the value is not a string.
     * @throws {Error} If the value is an empty string.
     * @returns The error, else, void.
     */
    private strCheck(value: string): void {
        check<string>(value);
        if (value === "") {
            throw new Error("String value cannot be empty.");
        }     
    }

    /**
     * Appends a string at the end of the current string.
     * @param value The string to append.
     * @returns The current string builder.
     */
    public append(value: string): StringBuilder {
        this.strCheck(value);
        this.defaults += value;
        
        return this;
    }

    public charAt(index: number): string {
        return this.defaults.charAt(index);
    }

    public charCodeAt(index: number): number {
        return this.defaults.charCodeAt(index);
    }

    public clear(): StringBuilder {
        this.defaults = "";
        
        return this;
    }

    public concat(...args: string[]): string {
        for (let index = 0; index < args.length; index++) {
            this.strCheck(args[index]);
        }

        return this.defaults.concat(...args);
    }

    public endsWith(searchString: string, ignoreCase?: boolean, endPosition?: number): boolean {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.endsWith(searchString, endPosition);
    }

    public includes(searchString: string, ignoreCase?: boolean, position?: number): boolean {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.includes(searchString, position);
    }

    public indexOf(searchString: string, ignoreCase?: boolean, startPosition?: number): number {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.indexOf(searchString, startPosition);
    }

    public lastIndexOf(searchString: string, ignoreCase?: boolean, startPosition?: number): number {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.lastIndexOf(searchString, startPosition);
    }

    public localeCompare(value: string, ignoreCase?: boolean): number {
        this.strCheck(value);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            value = value.toLowerCase();
        }

        return this.defaults.localeCompare(value);
    }

    public match(searchValue: RegExp): RegExpMatchArray | null {
        return this.defaults.match(searchValue);
    }

    public repeat(count: number): string {
        check<number>(count);
        if (count < 0) {
            throw new Error("Count cannot be negative.");
        }

        return this.defaults.repeat(count);
    }

    public replace(searchValue: string | RegExp, replaceValue: string): string {
        if (typeof searchValue === "string") {
            this.strCheck(searchValue);
        }

        this.strCheck(replaceValue);

        return this.defaults.replace(searchValue, replaceValue);
    }

    public replaceAll(searchValue: string | RegExp, replaceValue: string): string {
        if (typeof searchValue === "string") {
            this.strCheck(searchValue);
        }

        this.strCheck(replaceValue);

        return this.defaults.replace(new RegExp(searchValue, "g"), replaceValue);
    }

    public search(searchValue: string | RegExp): number {
        if (typeof searchValue === "string") {
            this.strCheck(searchValue);
        }

        return this.defaults.search(searchValue);
    }

    public slice(start: number, end?: number): string {
        check<number>(start);
        if (start < 0) {
            throw new Error("Start cannot be negative.");
        }

        if (end !== undefined) {
            check<number>(end);
            if (end < 0) {
                throw new Error("End cannot be negative.");
            }

            if (end > start) {
                throw new Error("End cannot be greater than start.");
            }
        }

        return this.defaults.slice(start, end);
    }

    public split(separator: string | RegExp, limit?: number | undefined): string[] {
        if (typeof separator === "string") {
            this.strCheck(separator);
        }

        if (limit !== undefined) {
            check<number>(limit);
            if (limit < 0) {
                throw new Error("Limit cannot be negative.");
            }
        }

        return this.defaults.split(separator, limit);
    }

    public startsWith(searchString: string, ignoreCase?: boolean, start?: number): boolean {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.startsWith(searchString, start);
    }

    public substring(start: number, end?: number): string {
        check<number>(start);
        if (start < 0) {
            throw new Error("Start cannot be negative.");
        }

        if (end !== undefined) {
            check<number>(end);
            if (end < 0) {
                throw new Error("End cannot be negative.");
            }

            if (end > start) {
                throw new Error("End cannot be greater than start.");
            }
        }

        return this.defaults.substring(start, end);
    }

    public substringAfter(searchString: string, ignoreCase?: boolean): string {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.substring(this.defaults.indexOf(searchString) + searchString.length);
    }

    public substringAfterLast(searchString: string, ignoreCase?: boolean): string {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.substring(this.defaults.lastIndexOf(searchString) + searchString.length);
    }

    public substringBefore(searchString: string, ignoreCase?: boolean): string {
        this.strCheck(searchString);

        // Checks if the case of the searchable string should be ignored.
        if (ignoreCase) {
            searchString = searchString.toLowerCase();
        }

        return this.defaults.substring(0, this.defaults.indexOf(searchString));
    }

    public toLocaleLowerCase(): string {
        return this.defaults.toLocaleLowerCase();
    }

    public toLocaleUpperCase(): string {
        return this.defaults.toLocaleUpperCase();
    }

    public toLowerCase(): string {
        return this.defaults.toLowerCase();
    }

    public math(equasion: string): number {
        MathCheck(equasion);

        return eval(equasion);
    }

    /**
     * Prepends a string at the beginning of the current string.
     * @param value The string to prepend.
     * @returns The current string builder.
     * @throws {Error} If the value is null or undefined.
     * @throws {Error} If the value is not a string.
     * @throws {Error} If the value is an empty string.
     */
    public prepend(value: string): StringBuilder {
        this.strCheck(value);
        this.defaults = value + this.defaults;
        
        return this;
    }

    public toString(): string {
        return this.defaults;
    }

    public toUpperCase(): string {
        return this.defaults.toUpperCase();
    }

    public trim(): string {
        return this.defaults.trim();
    }

    public typeOf(): string {
        return "string";
    }

    public upperCaseFirst(): StringBuilder {
        UppercaseFirst(this.defaults);
        
        return this;
    }

    public valueOf(): string {
        return this.defaults;
    }
}