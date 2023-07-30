import { Pipe, PipeTransform } from '@angular/core';

// Pipe to truncate a string to a certain length and add a symbol at the end
// Usage: {{ value | truncate: length: symbol }}
@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string, length: number, symbol: string) {
    return value.split(' ').slice(0, length).join(' ') + symbol;
  }
}
