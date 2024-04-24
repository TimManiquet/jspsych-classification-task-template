/* 
DEMOGRAPHICS SURVEY CONTENT
---------------------------
This file contains the content of a quick demographics survey.
It is made of parameters fit to enter a jspsych survey trial.
Modify it as you wish.
It will only be used if called upon in the main experiment (index.html).
*/

const DEMOGRAPHICS = {

    // This will be the title of your demographics questions
    Introduction : function() {
        let prompt = "Please answer the following questions:"

        return {
            type: 'html',
            prompt: prompt
        };
    },

    // Ask the participant's age
    Age : function() {
        return {
            type: 'text',
            prompt : 'What is your age?',
            name: 'age',
            input_type : 'number',
            required: true
        }
    },
    
    // Ask the participant's handedness
    Handedness: function() {
        return {
            type: 'drop-down',
            prompt: `What is your handedness?`,
            name: 'handedness', 
            options: ['Right-handed', 'Left-handed', 'Ambidextrous'], 
            required: true
        }
    },
    
    // Ask the participant's native language
    NativeLanguage : function() {
        return {
            type: 'drop-down',
            prompt: 'What is your native language?',
            //dropdown_select_prompt : dropdown_select_prompt,
            name: 'native_language',
            options: options = [{"value": "ab", "text": "Abkhazian"}, {"value": "aa", "text": "Afar"}, {"value": "af", "text": "Afrikaans"}, {"value": "ak", "text": "Akan"}, {"value": "sq", "text": "Albanian"}, {"value": "am", "text": "Amharic"}, {"value": "ar", "text": "Arabic"}, {"value": "an", "text": "Aragonese"}, {"value": "hy", "text": "Armenian"}, {"value": "as", "text": "Assamese"}, {"value": "av", "text": "Avaric"}, {"value": "ae", "text": "Avestan"}, {"value": "ay", "text": "Aymara"}, {"value": "az", "text": "Azerbaijani"}, {"value": "bm", "text": "Bambara"}, {"value": "ba", "text": "Bashkir"}, {"value": "eu", "text": "Basque"}, {"value": "be", "text": "Belarusian"}, {"value": "bn", "text": "Bengali"}, {"value": "bi", "text": "Bislama"}, {"value": "bs", "text": "Bosnian"}, {"value": "br", "text": "Breton"}, {"value": "bg", "text": "Bulgarian"}, {"value": "my", "text": "Burmese"}, {"value": "ca", "text": "Catalan"}, {"value": "km", "text": "Central Khmer"}, {"value": "ch", "text": "Chamorro"}, {"value": "ce", "text": "Chechen"}, {"value": "ny", "text": "Chichewa"}, {"value": "zh", "text": "Chinese"}, {"value": "cu", "text": "Church\u00a0Slavonic"}, {"value": "cv", "text": "Chuvash"}, {"value": "kw", "text": "Cornish"}, {"value": "co", "text": "Corsican"}, {"value": "cr", "text": "Cree"}, {"value": "hr", "text": "Croatian"}, {"value": "cs", "text": "Czech"}, {"value": "da", "text": "Danish"}, {"value": "dv", "text": "Divehi"}, {"value": "nl", "text": "Dutch"}, {"value": "dz", "text": "Dzongkha"}, {"value": "en", "text": "English"}, {"value": "eo", "text": "Esperanto"}, {"value": "et", "text": "Estonian"}, {"value": "ee", "text": "Ewe"}, {"value": "fo", "text": "Faroese"}, {"value": "fj", "text": "Fijian"}, {"value": "fi", "text": "Finnish"}, {"value": "fr", "text": "French"}, {"value": "ff", "text": "Fulah"}, {"value": "gd", "text": "Gaelic"}, {"value": "gl", "text": "Galician"}, {"value": "lg", "text": "Ganda"}, {"value": "ka", "text": "Georgian"}, {"value": "de", "text": "German"}, {"value": "el", "text": "Greek"}, {"value": "gn", "text": "Guarani"}, {"value": "gu", "text": "Gujarati"}, {"value": "ht", "text": "Haitian"}, {"value": "ha", "text": "Hausa"}, {"value": "he", "text": "Hebrew"}, {"value": "hz", "text": "Herero"}, {"value": "hi", "text": "Hindi"}, {"value": "ho", "text": "Hiri Motu"}, {"value": "hu", "text": "Hungarian"}, {"value": "is", "text": "Icelandic"}, {"value": "io", "text": "Ido"}, {"value": "ig", "text": "Igbo"}, {"value": "id", "text": "Indonesian"}, {"value": "ia", "text": "Interlingua"}, {"value": "ie", "text": "Interlingue"}, {"value": "iu", "text": "Inuktitut"}, {"value": "ik", "text": "Inupiaq"}, {"value": "ga", "text": "Irish"}, {"value": "it", "text": "Italian"}, {"value": "ja", "text": "Japanese"}, {"value": "jv", "text": "Javanese"}, {"value": "kl", "text": "Kalaallisut"}, {"value": "kn", "text": "Kannada"}, {"value": "kr", "text": "Kanuri"}, {"value": "ks", "text": "Kashmiri"}, {"value": "kk", "text": "Kazakh"}, {"value": "ki", "text": "Kikuyu"}, {"value": "rw", "text": "Kinyarwanda"}, {"value": "ky", "text": "Kirghiz"}, {"value": "kv", "text": "Komi"}, {"value": "kg", "text": "Kongo"}, {"value": "ko", "text": "Korean"}, {"value": "kj", "text": "Kuanyama"}, {"value": "ku", "text": "Kurdish"}, {"value": "lo", "text": "Lao"}, {"value": "la", "text": "Latin"}, {"value": "lv", "text": "Latvian"}, {"value": "li", "text": "Limburgan"}, {"value": "ln", "text": "Lingala"}, {"value": "lt", "text": "Lithuanian"}, {"value": "lu", "text": "Luba-Katanga"}, {"value": "lb", "text": "Luxembourgish"}, {"value": "mk", "text": "Macedonian"}, {"value": "mg", "text": "Malagasy"}, {"value": "ms", "text": "Malay"}, {"value": "ml", "text": "Malayalam"}, {"value": "mt", "text": "Maltese"}, {"value": "gv", "text": "Manx"}, {"value": "mi", "text": "Maori"}, {"value": "mr", "text": "Marathi"}, {"value": "mh", "text": "Marshallese"}, {"value": "mn", "text": "Mongolian"}, {"value": "na", "text": "Nauru"}, {"value": "nv", "text": "Navajo"}, {"value": "ng", "text": "Ndonga"}, {"value": "ne", "text": "Nepali"}, {"value": "nd", "text": "North Ndebele"}, {"value": "se", "text": "Northern Sami"}, {"value": "no", "text": "Norwegian"}, {"value": "nb", "text": "Norwegian Bokm\u00e5l"}, {"value": "nn", "text": "Norwegian Nynorsk"}, {"value": "oc", "text": "Occitan"}, {"value": "oj", "text": "Ojibwa"}, {"value": "or", "text": "Oriya"}, {"value": "om", "text": "Oromo"}, {"value": "os", "text": "Ossetian"}, {"value": "pi", "text": "Pali"}, {"value": "ps", "text": "Pashto"}, {"value": "fa", "text": "Persian"}, {"value": "pl", "text": "Polish"}, {"value": "pt", "text": "Portuguese"}, {"value": "pa", "text": "Punjabi"}, {"value": "qu", "text": "Quechua"}, {"value": "ro", "text": "Romanian"}, {"value": "rm", "text": "Romansh"}, {"value": "rn", "text": "Rundi"}, {"value": "ru", "text": "Russian"}, {"value": "sm", "text": "Samoan"}, {"value": "sg", "text": "Sango"}, {"value": "sa", "text": "Sanskrit"}, {"value": "sc", "text": "Sardinian"}, {"value": "sr", "text": "Serbian"}, {"value": "sn", "text": "Shona"}, {"value": "ii", "text": "Sichuan Yi"}, {"value": "sd", "text": "Sindhi"}, {"value": "si", "text": "Sinhala"}, {"value": "sk", "text": "Slovak"}, {"value": "sl", "text": "Slovenian"}, {"value": "so", "text": "Somali"}, {"value": "nr", "text": "South Ndebele"}, {"value": "st", "text": "Southern Sotho"}, {"value": "es", "text": "Spanish"}, {"value": "su", "text": "Sundanese"}, {"value": "sw", "text": "Swahili"}, {"value": "ss", "text": "Swati"}, {"value": "sv", "text": "Swedish"}, {"value": "tl", "text": "Tagalog"}, {"value": "ty", "text": "Tahitian"}, {"value": "tg", "text": "Tajik"}, {"value": "ta", "text": "Tamil"}, {"value": "tt", "text": "Tatar"}, {"value": "te", "text": "Telugu"}, {"value": "th", "text": "Thai"}, {"value": "bo", "text": "Tibetan"}, {"value": "ti", "text": "Tigrinya"}, {"value": "to", "text": "Tonga"}, {"value": "ts", "text": "Tsonga"}, {"value": "tn", "text": "Tswana"}, {"value": "tr", "text": "Turkish"}, {"value": "tk", "text": "Turkmen"}, {"value": "tw", "text": "Twi"}, {"value": "ug", "text": "Uighur"}, {"value": "uk", "text": "Ukrainian"}, {"value": "ur", "text": "Urdu"}, {"value": "uz", "text": "Uzbek"}, {"value": "ve", "text": "Venda"}, {"value": "vi", "text": "Vietnamese"}, {"value": "vo", "text": "Volap\u00fck"}, {"value": "wa", "text": "Walloon"}, {"value": "cy", "text": "Welsh"}, {"value": "fy", "text": "Western Frisian"}, {"value": "wo", "text": "Wolof"}, {"value": "xh", "text": "Xhosa"}, {"value": "yi", "text": "Yiddish"}, {"value": "yo", "text": "Yoruba"}, {"value": "za", "text": "Zhuang"}, {"value": "zu", "text": "Zulu"}],
        };
    },

    // Ask for the participant's gender
    Gender: function() {
        return {
            type: 'drop-down',
            prompt: `What is your gender?`,
            name: 'gender', 
            options: ['Female', 'Male', 'Other'], 
            required: true
        };
    },

    // Ask for the participant's EMS code, to give credits on the SONA system
    EMScode: function() {
        return {
            type: 'text',
            prompt : 'Please indicate your EMS code here.',
            name: 'EMScode',
            required: true
        }
    },

    // Add antything else you could want to this questionaire
    // For instance, uncomment the lines below to ask the participant's mouse type
    // MouseType: function() {
    //     return {
    //         type: 'multi-choice',
    //         prompt: `Please indicate the type of mouse you will be using during this experiment.`,
    //         name: 'mouse_type', 
    //         options: ['Mouse', 'Trackpad'], 
    //         required: true
    //     }
    // },
}

