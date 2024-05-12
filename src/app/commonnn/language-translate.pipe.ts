import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageName'
})
export class LanguageTranslatePipe implements PipeTransform {

  transform(value: string): string {
    const languageNames: {[key: string]: string} = {
      'en': 'English',
      'fr': 'French',
      'es': 'Spanish',
      'ar':'Arabic'
      // Add more language codes and names as needed
    };

    return languageNames[value] || value; // If language code is not found, return as is
  }

}
