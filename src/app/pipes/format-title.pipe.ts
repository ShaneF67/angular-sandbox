import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})
export class FormatTitlePipe implements PipeTransform {

  transform(value: string, args?: any): string {

    if (!value) {
      return null;
    }

    let formattedTitle = "";
    let splitTitle = value.split(" ");

    for (var i = 0; i < splitTitle.length; i++) {

      let word = splitTitle[i].toLowerCase();
      let wordsToIgnore = ["in", "the", "of", "off", "and", "a"];

      if (i == 0 || !wordsToIgnore.includes(word)) {
        let firstChar = word.substring(0, 1);
        let restOfWord = word.substring(1, word.length);

        word = firstChar.toUpperCase() + restOfWord;
      }

      formattedTitle += word + " ";
    }
    return formattedTitle;
  }

}
