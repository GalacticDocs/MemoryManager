import { IBuilder } from "../../typedefs/singular/IStringBuilder";

export class BaseBuilder<Type> implements IBuilder<Type> {
    defaults: Type;

    constructor(defaults: Type) {
        this.defaults = defaults;
    }

    defaultValue(): Type {
        return this.defaults;
    }
}