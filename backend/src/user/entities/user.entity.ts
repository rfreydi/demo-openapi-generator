import { IsString, MinLength } from "class-validator";

export class User {
    id: number;

    @IsString()
    @MinLength(6)
    /**
         * A list of user's roles
         * @example ['admin']
         */
    firstName: string;

    lastName: string;
    isEnabled?: boolean = true;
}

export class Test { firstName: string }