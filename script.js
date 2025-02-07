if (!navigator.clipboard?.readText) {
    alert("Mettez à jour votre navigateur");
} else {
    const delay = 20;
    (function () {
        'use strict';
    
        const keyMap = {
            'a': { key: 'q', keyCode: 65 }, 'b': { key: 'b', keyCode: 66 }, 'c': { key: 'c', keyCode: 67 },
            'd': { key: 'd', keyCode: 68 }, 'e': { key: 'e', keyCode: 69 }, 'f': { key: 'f', keyCode: 70 },
            'g': { key: 'g', keyCode: 71 }, 'h': { key: 'h', keyCode: 72 }, 'i': { key: 'i', keyCode: 73 },
            'j': { key: 'j', keyCode: 74 }, 'k': { key: 'k', keyCode: 75 }, 'l': { key: 'l', keyCode: 76 },
            'm': { key: ':', keyCode: 191 }, 'n': { key: 'n', keyCode: 78 }, 'o': { key: 'o', keyCode: 79 },
            'p': { key: 'p', keyCode: 80 }, 'q': { key: 'a', keyCode: 81 }, 'r': { key: 'r', keyCode: 82 },
            's': { key: 's', keyCode: 83 }, 't': { key: 't', keyCode: 84 }, 'u': { key: 'u', keyCode: 85 },
            'v': { key: 'v', keyCode: 86 }, 'w': { key: 'z', keyCode: 87 }, 'x': { key: 'x', keyCode: 88 },
            'y': { key: 'y', keyCode: 89 }, 'z': { key: 'w', keyCode: 90 },
            'A': { key: 'Q', keyCode: 65, shiftKey: true }, 'B': { key: 'B', keyCode: 66, shiftKey: true },
            'C': { key: 'C', keyCode: 67, shiftKey: true }, 'D': { key: 'D', keyCode: 68, shiftKey: true },
            'E': { key: 'E', keyCode: 69, shiftKey: true }, 'F': { key: 'F', keyCode: 70, shiftKey: true },
            'G': { key: 'G', keyCode: 71, shiftKey: true }, 'H': { key: 'H', keyCode: 72, shiftKey: true },
            'I': { key: 'I', keyCode: 73, shiftKey: true }, 'J': { key: 'J', keyCode: 74, shiftKey: true },
            'K': { key: 'K', keyCode: 75, shiftKey: true }, 'L': { key: 'L', keyCode: 76, shiftKey: true },
            'M': { key: ':', keyCode: 220, shiftKey: true }, 'N': { key: 'N', keyCode: 78, shiftKey: true },
            'O': { key: 'O', keyCode: 79, shiftKey: true }, 'P': { key: 'P', keyCode: 80, shiftKey: true },
            'Q': { key: 'A', keyCode: 81, shiftKey: true }, 'R': { key: 'R', keyCode: 82, shiftKey: true },
            'S': { key: 'S', keyCode: 83, shiftKey: true }, 'T': { key: 'T', keyCode: 84, shiftKey: true },
            'U': { key: 'U', keyCode: 85, shiftKey: true }, 'V': { key: 'V', keyCode: 86, shiftKey: true },
            'W': { key: 'Z', keyCode: 87, shiftKey: true }, 'X': { key: 'X', keyCode: 88, shiftKey: true },
            'Y': { key: 'Y', keyCode: 89, shiftKey: true }, 'Z': { key: 'W', keyCode: 90, shiftKey: true },
            '1': { key: '&', keyCode: 49, shiftKey: true }, '2': { key: 'é', keyCode: 50, shiftKey: true },
            '3': { key: '"', keyCode: 51, shiftKey: true }, '4': { key: '\'', keyCode: 52, shiftKey: true },
            '5': { key: '(', keyCode: 53, shiftKey: true }, '6': { key: '§', keyCode: 54, shiftKey: true },
            '7': { key: 'è', keyCode: 55, shiftKey: true }, '8': { key: '!', keyCode: 56, shiftKey: true },
            '9': { key: 'ç', keyCode: 57, shiftKey: true }, '0': { key: 'à', keyCode: 48, shiftKey: true },
            '=': { key: '=', keyCode: 187 }, '(': { key: '(', keyCode: 53, },
            ')': { key: '-', keyCode: 189, shiftKey: false }, '&': { key: '&', keyCode: 49,},
            ';': { key: ',', keyCode: 188 }, '"': { key: '"', keyCode: 51, },
            '+': { key: '+', keyCode: 187, shiftKey: true }, '_': { key: '_', keyCode: 56 },
            '*': { key: '\\', keyCode: 220}, '-': { key: '^', keyCode: 219 },
            '/': { key: '.', keyCode: 188, shiftKey: true }, '!': { key: '/', keyCode: 186 },
            '\'': { key: '$', keyCode: 221 }, ',': { key: 'm', keyCode: 186 },
            '?': { key: 'm', keyCode: 186, shiftKey: true }, '@': { key: '0', keyCode: 48, altKey: true },
            '[': { key: '5', keyCode: 219, altKey: true }, ']': { key: '-', keyCode: 189, altKey: true },
            '{': { key: '4', keyCode: 52, altKey: true }, '}': { key: '+', keyCode: 187, altKey: true },
            '#': { key: '#', keyCode: 51, altKey: true }, '€': { key: 'e', keyCode: 69, altKey: true },
            'é': { key: '2', keyCode: 50, shiftKey: false }, 'à': { key: '0', keyCode: 48, shiftKey: false },
            'ç': { key: '9', keyCode: 57, shiftKey: false }, 'è': { key: '7', keyCode: 55, shiftKey: false },
            '°': { key: '_', keyCode: 189, shiftKey: true }, ':': { key: '>', keyCode: 190, shiftKey: false },
            '.': { key: ',', keyCode: 188, shiftKey: true }, '<': { key: '<', keyCode: 188 },
            '|': { key: '|', keyCode: 54, altKey: true }, '˜': { key: '˜', keyCode: 50, altKey: true },
            '^': { key: '^', keyCode: 57, altKey: true }, '\\': { key: '\\', keyCode: 56, altKey: true },
    
            // '%': { key: '%', keyCode: 192, shiftKey: true }, // shift + 5
            '$': { key: '$', keyCode: 52, shiftKey: true }, // shift + 4
            '`': { key: '`', keyCode: 192, shiftKey: false }, // alt + ` (en haut à gauche)
            '§': { key: '§', keyCode: 22 }, // shift + !
            'ù': { key: 'ù', keyCode: 219, shiftKey: false }, // directement sur la touche ù
            '£': { key: '£', keyCode: 51, altKey: true }, // alt + 3
            '¨': { key: '¨', keyCode: 222, shiftKey: true }, // shift + ^
            '>': { key: '>', keyCode: 50 }
    
        };
    
        function sendKey(el, key, keyCode, shiftKey = false, altKey = false) {
            let evt;
            if (shiftKey) {
                evt = new KeyboardEvent("keydown", { key: "Shift", keyCode: 16 });
                el.dispatchEvent(evt);
            }
            if (altKey) {
                evt = new KeyboardEvent("keydown", { key: "AltGraph", keyCode: 225 });
                el.dispatchEvent(evt);
            }
            evt = new KeyboardEvent("keydown", { key: key, keyCode: keyCode, shiftKey: shiftKey, altKey: altKey });
            el.dispatchEvent(evt);
            evt = new KeyboardEvent("keyup", { key: key, keyCode: keyCode, shiftKey: shiftKey, altKey: altKey });
            el.dispatchEvent(evt);
            if (altKey) {
                evt = new KeyboardEvent("keyup", { key: "AltGraph", keyCode: 225 });
                el.dispatchEvent(evt);
            }
            if (shiftKey) {
                evt = new KeyboardEvent("keyup", { key: "Shift", keyCode: 16 });
                el.dispatchEvent(evt);
            }
        }
    
        window.sendString = function(text) {
            var el = document.querySelector("canvas");
            text.split("").forEach((x, index) => {
                setTimeout(() => {
                    if (keyMap[x]) {
                        sendKey(el, keyMap[x].key, keyMap[x].keyCode, keyMap[x].shiftKey, keyMap[x].altKey);
                    } else {
                        sendKey(el, x, x.charCodeAt(0));
                    }
                }, delay * index);
            });
        };
    
        setTimeout(() => {
            console.log("Starting up noVNC Copy/Paste (for Proxmox)");
    
            document.querySelector("canvas").addEventListener("mousedown", (e) => {
                if (e.button == 2) { // Right Click
                    navigator.clipboard.readText().then(text =>{
                        if (text != null) window.sendString(text);
                    });
                }
            });
        }, 1000);
    
    })();
}
