export default class ValidateFields {

    static min = (value,min) => {
        if( value.length < min ) {
            return `This field should min contain ${min} characters`;
        }
    }

    static max = (value,max) => {
        if( value.length > max ) {
            return `This field should max contain ${max} characters`;
        }
    }
}