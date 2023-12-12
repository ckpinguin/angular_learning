import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'dateFormatPipe',
})
export class DateFormatPipe implements PipeTransform {
    locale_id: string;

    constructor(@Inject(LOCALE_ID) locale_id) {
        this.locale_id = locale_id;
    }

    transform(value: string) {
        const datePipe = new DatePipe(this.locale_id);
        value = datePipe.transform(value, 'dd. MMMM. yyyy');
        return value;
    }
}
