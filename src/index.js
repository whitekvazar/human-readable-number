module.exports = function toReadable(number) {

    let tempArray = String(number).split('');
    let arrayLenth = tempArray.length;
    let resultString = '';
    let partOfresultString ='';
    let nineteenOrMore;
    let keyFor_0_19;
    let keyFor_20_99;
    let keyFor_100_999;
    
    switch (arrayLenth) {                                           
        case 1:                 //* First case will return result for (number > -1 && number < 10) 
            keyFor_0_19 = +tempArray[0];
            resultString = toReadable_0_19(keyFor_0_19);
        break;

        case 2:                 //* Second case will return result for (number > 9 && number < 100)
            nineteenOrMore = +(tempArray[0] + tempArray[1])
            if (nineteenOrMore < 20) {                                    // for 10-19
                keyFor_0_19 = nineteenOrMore;
                resultString = toReadable_0_19(keyFor_0_19);
            }
            if (nineteenOrMore > 19) {                                    // for 20-99
                keyFor_0_19 = +tempArray[1];
                keyFor_20_99 = +tempArray[0];
                if (keyFor_0_19 == 0) {                                  // for 20 30 40 etc.
                    resultString = toReadable_20_99(keyFor_20_99);
                }
                if (keyFor_0_19 !== 0) {                                 // for others 20-99
                    resultString = `${toReadable_20_99(keyFor_20_99)} ${toReadable_0_19(keyFor_0_19)}`;
                }
            }
        break;

        case 3:                   //* Threerd case will return result for (number > 99 && number < 1000)
            keyFor_100_999 = +tempArray[0];
            if ((+(tempArray[1] + tempArray[2])) == 0) {                  // for 100, 200, etc.
                resultString = toReadable_100_999(keyFor_100_999); 
            } 
            else {
                nineteenOrMore = +(tempArray[1] + tempArray[2])
                    if (nineteenOrMore < 20) {                            // for 101-119, 201-219, etc.
                        keyFor_0_19 = nineteenOrMore;
                        partOfresultString = toReadable_0_19(keyFor_0_19);
                        resultString = `${toReadable_100_999(keyFor_100_999)} ${partOfresultString}`;
                    }
                    if (nineteenOrMore > 19) {                            // for 120-199, 220-299, etc.
                        keyFor_0_19 = +tempArray[2];
                        keyFor_20_99 = +tempArray[1];
                        if (keyFor_0_19 == 0) {                          // for 120, 130, 140 etc.
                            partOfresultString = toReadable_20_99(keyFor_20_99);
                        }
                        if (keyFor_0_19 !== 0) {                         // for others 120-199, 220-299, etc.
                            partOfresultString = `${toReadable_20_99(keyFor_20_99)} ${toReadable_0_19(keyFor_0_19)}`;
                        }
                        resultString = `${toReadable_100_999(keyFor_100_999)} ${partOfresultString}`;
                     }
            }
        break;

        default: break;
    }

    function toReadable_0_19(keyFor_0_19) {
        switch (keyFor_0_19) {
            case 0:  return "zero";             break;
            case 1:  return "one";              break;
            case 2:  return "two";              break;
            case 3:  return "three";            break;
            case 4:  return "four";             break;
            case 5:  return "five";             break;
            case 6:  return "six";              break;
            case 7:  return "seven";            break;
            case 8:  return "eight";            break;
            case 9:  return "nine";             break;
            case 10: return "ten";              break;
            case 11: return "eleven";           break;
            case 12: return "twelve";           break;
            case 13: return "thirteen";         break;
            case 14: return "fourteen";         break;
            case 15: return "fifteen";          break;
            case 16: return "sixteen";          break;
            case 17: return "seventeen";        break;
            case 18: return "eighteen";         break;
            case 19: return "nineteen";         break;
            default:                            break;
        }
    }

    function toReadable_20_99(keyFor_20_99) {
        switch (keyFor_20_99) {
            case 2: return "twenty";            break;
            case 3: return "thirty";            break;
            case 4: return "forty";             break;
            case 5: return "fifty";             break;
            case 6: return "sixty";             break;
            case 7: return "seventy";           break;
            case 8: return "eighty";            break;
            case 9: return "ninety";            break;
            default:                            break;
        }
    }
    
    function toReadable_100_999(keyFor_100_999) {
        switch (keyFor_100_999) {
            case 1: return "one hundred";           break;
            case 2: return "two hundred";           break;
            case 3: return "three hundred";         break;
            case 4: return "four hundred";          break;
            case 5: return "five hundred";          break;
            case 6: return "six hundred";           break;
            case 7: return "seven hundred";         break;
            case 8: return "eight hundred";         break;
            case 9: return "nine hundred";          break;
            default:                                break;
        }
    }
    
    return resultString;
}
