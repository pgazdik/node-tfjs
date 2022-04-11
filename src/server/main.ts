import camelcase from 'camelcase';

export class Util {

    static camelcase(a: string, b: string): string {
        return camelcase([a, b]);
    }
}