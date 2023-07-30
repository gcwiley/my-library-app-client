import { Pipe, PipeTransform } from '@angular/core';

// Pipe to truncate a string to a certain length
// Usage: {{ value | truncate }}
@Pipe({ name: 'simpletruncate', standalone: true })
export class SimpleTruncatePipe implements PipeTransform {
  transform(value: string) {
    return value.split(' ').slice(0, 2).join(' ') + '...';
  }
}
