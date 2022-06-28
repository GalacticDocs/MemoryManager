import { BaseBuilder } from "../index";
import {
    check, ICompare, INumberBuilder
} from "../../index";
import { ICompareNumberDefaults } from "../../typedefs/typer";

export class NumberBuilder extends BaseBuilder<number> implements INumberBuilder {
    compareDefaults: ICompareNumberDefaults = {
        equal: (value: number): boolean => {
            check<number>(value);

        },
        greater: (value: number): boolean => {
            check<number>(value);
                        
        },
        less: (value: number): boolean => {
            check<number>(value);
            
        }
    };
    
    constructor(defaults: number) {
        super(defaults);
    }
}

const NumbLess = (value: number) => {

};