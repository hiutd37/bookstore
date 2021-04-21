import { Pipe, PipeTransform } from '@angular/core';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Pipe({ name: 'formatPrice' })
export class FormatPricePipe implements PipeTransform {
  transform(value: any): string {
    value = value?.toString().replace(/[\,]+/g, '');
    value = value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return value;
  }
}
