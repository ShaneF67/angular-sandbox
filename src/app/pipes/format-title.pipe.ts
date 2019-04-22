import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatTitle'
})
export class FormatTitlePipe implements PipeTransform {

  transform(value: string, args?: any): string {

    if (!value)
      return null;

    var formattedTitle = "";
    var splitTitle = value.split(" ");

    for (var i = 0; i < splitTitle.length; i++) {

      var word = splitTitle[i].toLowerCase();
      var wordsToIgnore = ["in", "the", "of", "off", "and", "a"];

      if (i == 0 || !wordsToIgnore.includes(word)) {
        var firstChar = word.substring(0, 1);
        var restOfWord = word.substring(1, word.length);

        word = firstChar.toUpperCase() + restOfWord;
      }

      formattedTitle += word + " ";
    }
    return formattedTitle;
  }

}
