import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize',
})
export class FilesizePipe implements PipeTransform {
  transform(value: number, target: string = 'kb'): string {
    let fs = '';
    switch (target.toLowerCase()) {
      case 'kb':
        fs = Math.round(value / 1000) + " KB";
        break;
      case 'mb':
        fs = Math.round(value / 1000000) + ' MB';
        break;
    }
    return fs;
  }
}
