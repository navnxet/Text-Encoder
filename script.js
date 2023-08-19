document.addEventListener("DOMContentLoaded", function() {
    const inputText = document.getElementById("inputText");
    const convertButton = document.getElementById("convertButton");
    const outputMorse = document.getElementById("outputMorse");
    const convertToMorseButton = document.getElementById("convertToMorseButton");
    const deleteButton = document.getElementById("deleteButton");
    const copyButton = document.getElementById("copyButton");
  
    convertButton.addEventListener("click", () => {
      const text = inputText.value;
      const morseCode = convertToMorseCode(text);
      outputMorse.value = morseCode;
    });
  
    convertToMorseButton.addEventListener("click", () => {
      const morseCode = inputText.value;
      const text = convertToText(morseCode);
      outputMorse.value = text;
    });

    deleteButton.addEventListener("click", () => {
      inputText.value = "";
      outputMorse.value = "";
    });
    
    copyButton.addEventListener("click", () => {
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = outputMorse.value;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextarea);
    });
  
    function convertToMorseCode(text) {
      const morseCodeMap = {
        "A":"NE-NAV",
            "B":"NAV-NE-NE-NET",
            "C":"NAV-NE-NAV-NET",
            "D":"NAV-NE-NET",
            "E":"NET",
            "F":"NE-NE-NAV-NET",
            "G":"NAV-NAV-NET",
            "H":"NE-NE-NE-NET",
            "I":"NE-NET",
            "J":"NE-NAV-NAV-NAV",
            "K":"NAV-NE-NAV",
            "L":"NE-NAV-NE-NET",
            "M":"NAV-NAV",
            "N":"NAV-NET",
            "O":"NAV-NAV-NAV",
            "P":"NE-NAV-NAV-NET",
            "Q":"NAV-NAV-NE-NAV",
            "R":"NE-NAV-NET",
            "S":"NE-NE-NET",
            "T":"NAV",
            "U":"NE-NE-NAV",
            "V":"NE-NE-NE-NAV",
            "W":"NE-NAV-NAV",
            "X":"NAV-NE-NE-NAV",
            "Y":"NAV-NE-NAV-NAV",
            "Z":"NAV-NAV-NE-NET",
            "a":"ne-nav",
            "b":"nav-ne-ne-net",
            "c":"nav-ne-nav-net",
            "d":"nav-ne-net",
            "e":"net",
            "f":"ne-ne-nav-net",
            "g":"nav-nav-net",
            "h":"ne-ne-ne-net",
            "i":"ne-net",
            "j":"ne-nav-nav-nav",
            "k":"nav-ne-nav",
            "l":"ne-nav-ne-net",
            "m":"nav-nav",
            "n":"nav-net",
            "o":"nav-nav-nav",
            "p":"ne-nav-nav-net",
            "q":"nav-nav-ne-nav",
            "r":"ne-nav-net",
            "s":"ne-ne-net",
            "t":"nav",
            "u":"ne-ne-nav",
            "v":"ne-ne-ne-nav",
            "w":"ne-nav-nav",
            "x":"nav-ne-ne-nav",
            "y":"nav-ne-nav-nav",
            "z":"nav-nav-ne-net",
            "0":"nav-nav-nav-nav-nav",
            "1":"ne-nav-nav-nav-nav",
            "2":"ne-ne-nav-nav-nav",
            "3":"ne-ne-ne-nav-nav",
            "4":"ne-ne-ne-ne-nav",
            "5":"ne-ne-ne-ne-net",
            "6":"nav-ne-ne-ne-net",
            "7":"nav-nav-ne-ne-net",
            "8":"nav-nav-nav-ne-net",
            "9":"nav-nav-nav-nav-net",
            "^":"ne-nav-ne-ne-netn",
            "&":"ne-nav-ne-ne-net",
            "$":"ne-nav-ne-ne-nete",
            "#":"ne-nav-ne-ne-netn",
            "'":"ne-nav-nav-nav-nav-net",
            "@":"ne-nav-nav-ne-nav-net",
            "~":"ne-nav-nav-ne-nav-nete",
            "`":"ne-nav-nav-ne-nav-netn",
            ")":"nav-ne-nav-nav-ne-nav",
            "(":"nav-ne-nav-nav-net",
            "}":"nav-ne-nav-nav-ne-navn",
            "{":"nav-ne-nav-nav-netn",
            "]":"nav-ne-nav-nav-ne-nave",
            "[":"nav-ne-nav-nav-nete",
            ":":"nav-nav-nav-ne-ne-net",
            ";":"nav-nav-nav-ne-ne-nete",
            ",":"nav-nav-ne-ne-nav-nav",
            "=":"nav-ne-ne-ne-nav",
            "!":"nav-ne-nav-ne-nav-nav",
            ".":"ne-nav-ne-nav-ne-nav",
            "-":"nav-ne-ne-ne-ne-nav",
            "–":"nav-ne-ne-ne-ne-navn",
            "—":"nav-ne-ne-ne-ne-nave",
            "━":"nav-ne-ne-ne-ne-naven",
            "_":"nav-ne-ne-ne-ne-navne",
            "×":"nav-ne-ne-navee",
            "*":"nav-ne-ne-navn",
            "%":"nav-nav-nav-nav-nav-nav-ne-ne-nav-net-nav-nav-nav-nav-nav",
            "+":"ne-nav-ne-nav-net",
            '"':"ne-nav-ne-ne-nav-net",
            "?":"ne-ne-nav-nav-ne-net",
            "/":"nav-ne-ne-nav-net",
            "÷":"nav-ne-ne-nav-nete",
            "|":"nav-ne-ne-nav-netn",
            "\\":"nav-ne-ne-nav-nete"
      // Add more mappings as needed
      };
  
      const words = text.split(" ");
      const morseWords = words.map(word => {
        const letters = word.split("");
        const morseLetters = letters.map(letter => {
          return morseCodeMap[letter] || "";
        });
        return morseLetters.join(" ");
      });
  
      return morseWords.join(" / ");
    }
  
    function convertToText(morseCode) {
      const morseToTextMap = {
        "NE-NAV":"A",
            "NAV-NE-NE-NET":"B",
            "NAV-NE-NAV-NET":"C",
            "NAV-NE-NET":"D",
            "NET":"E",
            "NE-NE-NAV-NET":"F",
            "NAV-NAV-NET":"G",
            "NE-NE-NE-NET":"H",
            "NE-NET":"I",
            "NE-NAV-NAV-NAV":"J",
            "NAV-NE-NAV":"K",
            "NE-NAV-NE-NET":"L",
            "NAV-NAV":"M",
            "NAV-NET":"N",
            "NAV-NAV-NAV":"O",
            "NE-NAV-NAV-NET":"P",
            "NAV-NAV-NE-NAV":"Q",
            "NE-NAV-NET":"R",
            "NE-NE-NET":"S",
            "NAV":"T",
            "NE-NE-NAV":"U",
            "NE-NE-NE-NAV":"V",
            "NE-NAV-NAV":"W",
            "NAV-NE-NE-NAV":"X",
            "NAV-NE-NAV-NAV":"Y",
            "NAV-NAV-NE-NET":"Z",
            "ne-nav":"a",
            "nav-ne-ne-net":"b",
            "nav-ne-nav-net":"c",
            "nav-ne-net":"d",
            "net":"e",
            "ne-ne-nav-net":"f",
            "nav-nav-net":"g",
            "ne-ne-ne-net":"h",
            "ne-net":"i",
            "ne-nav-nav-nav":"j",
            "nav-ne-nav":"k",
            "ne-nav-ne-net":"l",
            "nav-nav":"m",
            "nav-net":"n",
            "nav-nav-nav":"o",
            "ne-nav-nav-net":"p",
            "nav-nav-ne-nav":"q",
            "ne-nav-net":"r",
            "ne-ne-net":"s",
            "nav":"t",
            "ne-ne-nav":"u",
            "ne-ne-ne-nav":"v",
            "ne-nav-nav":"w",
            "nav-ne-ne-nav":"x",
            "nav-ne-nav-nav":"y",
            "nav-nav-ne-net":"z",
            "nav-nav-nav-nav-nav":"0",
            "ne-nav-nav-nav-nav":"1",
            "ne-ne-nav-nav-nav":"2",
            "ne-ne-ne-nav-nav":"3",
            "ne-ne-ne-ne-nav":"4",
            "ne-ne-ne-ne-net":"5",
            "nav-ne-ne-ne-net":"6",
            "nav-nav-ne-ne-net":"7",
            "nav-nav-nav-ne-net":"8",
            "nav-nav-nav-nav-net":"9",
            "ne-nav-ne-ne-netn":"^",
            "ne-nav-ne-ne-net":"&",
            "ne-nav-ne-ne-nete":"$",
            "ne-nav-ne-ne-netn":"#",
            "ne-nav-nav-nav-nav-net":"'",
            "ne-nav-nav-ne-nav-net":"@",
            "ne-nav-nav-ne-nav-nete":"~",
            "ne-nav-nav-ne-nav-netn":"`",
            "nav-ne-nav-nav-ne-nav":")",
            "nav-ne-nav-nav-net":"(",
            "nav-ne-nav-nav-ne-navn":"}",
            "nav-ne-nav-nav-netn":"{",
            "nav-ne-nav-nav-ne-nave":"]",
            "nav-ne-nav-nav-nete":"[",
            "nav-nav-nav-ne-ne-net":":",
            "nav-nav-nav-ne-ne-nete":";",
            "nav-nav-ne-ne-nav-nav":",",
            "nav-ne-ne-ne-nav":"=",
            "nav-ne-nav-ne-nav-nav":"!",
            "ne-nav-ne-nav-ne-nav":".",
            "nav-ne-ne-ne-ne-nav":"-",
            "nav-ne-ne-ne-ne-navn":"–",
            "nav-ne-ne-ne-ne-nave":"—",
            "nav-ne-ne-ne-ne-naven":"━",
            "nav-ne-ne-ne-ne-navne":"_",
            "nav-ne-ne-navee":"×",
            "nav-ne-ne-navn":"*",
            "nav-nav-nav-nav-nav-nav-ne-ne-nav-net-nav-nav-nav-nav-nav":"%",
            "ne-nav-ne-nav-net":"+",
            "ne-nav-ne-ne-nav-net":'"',
            "ne-ne-nav-nav-ne-net":"?",
            "nav-ne-ne-nav-net":"/",
            "nav-ne-ne-nav-nete":"÷",
            "nav-ne-ne-nav-netn":"|",
            "nav-ne-ne-nav-nete":"\\"
      };
  
      const words = morseCode.split(" / ");
      const textWords = words.map(word => {
        const morseLetters = word.split(" ");
        const textLetters = morseLetters.map(morseLetter => {
          return morseToTextMap[morseLetter] || "";
        });
        return textLetters.join("");
      });
  
      return textWords.join(" ");
    }
  });
  