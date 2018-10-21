document.addEventListener("DOMContentLoaded", function () {

    const enar = document.querySelector("#en-ar")
    const enarSpan = document.querySelector(".en-ar-span")

    const aren = document.querySelector("#ar-en")
    const arenSpan = document.querySelector(".ar-en-span")

    enar.addEventListener('keyup', function(e) {

        if (e.keyCode == 8) {
            clearSpanContent (enarSpan)
        }

        else {
            let arabic = /[\u0600-\u06FF]/;
            let text = enar.value;

            if (!(arabic.test(text)) && text.trim() !== '') {
                let newText = replaceEnChars (text);
                enarSpan.style.display = 'inline'
                enarSpan.innerHTML = "هل تقصد: <a class = 'didyoumean'>"+newText+"</a>؟";
            }
        }
    });

    aren.addEventListener('keyup', function(e) {

        if (e.keyCode == 8) {
            clearSpanContent (arenSpan)
        } else {
            let english = /[a-zA-Z]/;
            let text = aren.value;

            if (!(english.test(text)) && text.trim() !== '') {
                let newText = replaceEnChars (text);
                arenSpan.style.display = 'inline'
                arenSpan.innerHTML = "هل تقصد: <a class = 'didyoumean'>"+newText+"</a>؟";
            }
        }
    });

    enarSpan.addEventListener('click', function () {
        enar.value = enarSpan.firstElementChild.textContent
        clearSpanContent (enarSpan)
    });

    arenSpan.addEventListener('click', function () {
        aren.value = arenSpan.firstElementChild.textContent
        clearSpanContent (arenSpan)
    });

});

function clearSpanContent (el) {
    el.innerHTML = '';
    el.style.display = 'none';
}

//من الإنجليزية إلى العربية
function replaceEnChars(text) {
    text = text.replace(/q/g, 'ض');
    text = text.replace(/Q/g, 'َ');
    text = text.replace(/w/g, 'ص');
    text = text.replace(/W/g, 'ً');
    text = text.replace(/e/g, 'ث');
    text = text.replace(/E/g, 'ُ');
    text = text.replace(/r/g, "ق");
    text = text.replace(/R/g, "ٌ");
    text = text.replace(/t/g, "ف");
    text = text.replace(/T/g, "لإ");
    text = text.replace(/y/g, "غ");
    text = text.replace(/Y/g, "إ");
    text = text.replace(/u/g, "ع");
    text = text.replace(/U/g, "‘");
    text = text.replace(/i/g, "ه");
    text = text.replace(/I/g, "÷");
    text = text.replace(/o/g, "خ");
    text = text.replace(/O/g, "×");
    text = text.replace(/p/g, "ح");
    text = text.replace(/P/g, "؛");
    text = text.replace(/\[/g, "ج");
    text = text.replace(/{/g, "<");
    text = text.replace(/]/g, "د");
    text = text.replace(/\}/g, ">");

    text = text.replace(/a/g, "ش");
    text = text.replace(/A/g, "ِ");
    text = text.replace(/s/g, "س");
    text = text.replace(/S/g, "ٍ");
    text = text.replace(/d/g, "ي");
    text = text.replace(/D/g, "]");
    text = text.replace(/f/g, "ب");
    text = text.replace(/F/g, "[");
    text = text.replace(/g/g, "ل");
    text = text.replace(/G/g, "لأ");
    text = text.replace(/h/g, "ا");
    text = text.replace(/H/g, "أ");
    text = text.replace(/j/g, "ت");
    text = text.replace(/J/g, "ـ");
    text = text.replace(/k/g, "ن");
    text = text.replace(/K/g, "،");
    text = text.replace(/l/g, "م");
    text = text.replace(/L/g, "/");
    text = text.replace(/;/g, "ك");
    text = text.replace(/:/g, ":");
    text = text.replace(/'/g, "ط");
    text = text.replace(/"/g, "\"");

    text = text.replace(/`/g, "ذ");
    text = text.replace(/~/g, "ّ");

    text = text.replace(/z/g, "ئ");
    text = text.replace(/Z/g, "~");
    text = text.replace(/x/g, "ء");
    text = text.replace(/X/g, "ْ");
    text = text.replace(/c/g, "ؤ");
    text = text.replace(/C/g, "}");
    text = text.replace(/v/g, "ر");
    text = text.replace(/V/g, "{");
    text = text.replace(/b/g, "لا");
    text = text.replace(/B/g, "لآ");
    text = text.replace(/n/g, "ى");
    text = text.replace(/N/g, "آ");
    text = text.replace(/m/g, "ة");
    text = text.replace(/M/g, "’");
    text = text.replace(/\,/g, "و");
    text = text.replace(/\</g, "\,");
    text = text.replace(/\./g, "ز");
    text = text.replace(/\>/g, "\.");
    text = text.replace(/\//gi, "ظ");
    text = text.replace(/\?/gi, "؟");
    return text;
}


//من العربية إلى الإنجليزية

function replaceArChars(string) {
    string = string.replace(/ذ/gi, "`");
    string = string.replace(/ّ/gi, '~');

    string = string.replace(/د/gi, ']');
    string = string.replace(/>/gi, '}');
    string = string.replace(/ج/gi, '[');
    string = string.replace(/</gi, '{');
    string = string.replace(/ح/gi, 'p');
    string = string.replace(/؛/gi, 'P');
    string = string.replace(/خ/gi, 'o');
    string = string.replace(/×/gi, 'O');
    string = string.replace(/ه/gi, 'i');
    string = string.replace(/÷/gi, 'I');
    string = string.replace(/ع/gi, 'u');
    string = string.replace(/‘/gi, 'U');
    string = string.replace(/غ/gi, 'y');
    string = string.replace(/إ/gi, 'Y');
    string = string.replace(/ف/gi, 't');
    string = string.replace(/ق/gi, 'r');
    string = string.replace(/ٌ/gi, 'R');
    string = string.replace(/ث/gi, 'e');
    string = string.replace(/ُ/gi, 'E');
    string = string.replace(/ص/gi, 'w');
    string = string.replace(/ً/gi, 'W');
    string = string.replace(/ض/gi, 'q');
    string = string.replace(/َ/gi, 'Q');

    string = string.replace(/ط/gi, '\'');
    string = string.replace(/\""/gi, '\"');
    string = string.replace(/ك/gi, ';');
    string = string.replace(/:/gi, ':');
    string = string.replace(/م/gi, 'l');
    string = string.replace(/\//gi, 'L');
    string = string.replace(/ن/gi, 'k');
    string = string.replace(/،/gi, 'K');
    string = string.replace(/ت/gi, 'j');
    string = string.replace(/ـ/gi, 'J');
    string = string.replace(/ا/gi, 'h');
    string = string.replace(/أ/gi, 'H');
    string = string.replace(/ل/gi, 'g');
    string = string.replace(/ب/gi, 'f');
    string = string.replace(/\[/gi, 'F');
    string = string.replace(/ي/gi, 'd');
    string = string.replace(/]/gi, 'D');
    string = string.replace(/س/gi, 's');
    string = string.replace(/ٍ/gi, 'S');
    string = string.replace(/ش/gi, 'a');
    string = string.replace(/ِ/gi, 'A');

    string = string.replace(/ظ/gi, '؟');
    string = string.replace(/؟/gi, '?');
    string = string.replace(/ز/gi, '.');
    string = string.replace(/\./gi, '>');
    string = string.replace(/و/gi, ',');
    string = string.replace(/\,/gi, '<');
    string = string.replace(/ة/gi, 'm');
    string = string.replace(/\’/gi, 'M');
    string = string.replace(/ى/gi, 'n');
    string = string.replace(/آ/gi, 'N');
    string = string.replace(/ر/gi, 'v');
    string = string.replace(/\{/gi, 'V');
    string = string.replace(/ؤ/gi, 'c');
    string = string.replace(/}/gi, 'C');
    string = string.replace(/ء/gi, 'x');
    string = string.replace(/ْ/gi, 'X');
    string = string.replace(/ئ/gi, 'z');
    string = string.replace(/~/gi, 'Z');
    return string;
}
