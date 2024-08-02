function countConsonantsAndVowels(str) {
         str = str.toLowerCase();
    
         const vowels = ['a', 'e', 'i', 'o', 'u'];
         const consonants = 'bcdfghjklmnpqrstvwxyz';
    
        let vowelCount = 0;
        let consonantCount = 0;
    
         for (let i = 0; i < str.length; i++) {
             let char = str[i];
    
            if (vowels.includes(char)) {
             vowelCount++;
            }
    
            if (consonants.includes(char)) {
               consonantCount++;
      }
        }
    
    
     return {
            vowels: vowelCount,
             consonants: consonantCount
         };
    }
    
    
    const str = "Hello World! This is a test string.";
    const counts = countConsonantsAndVowels(str);
    console.log("Vowel count:", counts.vowels);
    console.log("Consonant count:", counts.consonants);
    
    