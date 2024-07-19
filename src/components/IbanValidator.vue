<template>
  <div class="iban-validator-container">
    <div
      class="iban-image"
      role="img"
      aria-label="Image générée par une IA montrant deux robots dans un débarras."
    ></div>
    <div class="iban-validator">
      <h2>Vérifier un IBAN</h2>
      <p>
        Entrez votre IBAN ici et nous vous indiquerons si son format est valide.
      </p>
      <label for="iban-input">IBAN</label>
      <input
        id="iban-input"
        v-model="iban"
        @input="validateIBAN"
        placeholder="Tapez entre 16 et 28 caractères"
        class="iban-input"
        aria-describedby="iban-description"
        aria-invalid="ibanValid === false"
      />
      <p id="iban-description" v-if="ibanValid === true" class="valid">
        L'IBAN est valide.
      </p>
      <p id="iban-description" v-if="ibanValid === false" class="invalid">
        L'IBAN est invalide.
      </p>
    </div>
  </div>
</template>

<script>
const ibanLengths = {
  AL: 28,
  AD: 24,
  AT: 20,
  AZ: 28,
  BH: 22,
  BE: 16,
  FR: 27,
  DE: 22,
  GR: 27,
  IT: 27,
  LU: 20,
  NL: 18,
};

function letterToNumber(ch) {
  return ch.charCodeAt(0) - 55;
}

function validateIBANFormat(iban) {
  // Supprime les espaces et convertir en majuscules
  iban = iban.replace(/\s+/g, "").toUpperCase();

  // Vérifie la longueur
  const countryCode = iban.slice(0, 2);
  if (iban.length !== ibanLengths[countryCode]) {
    return false;
  }

  // Déplace les quatre premiers caractères à la fin de la chaîne
  const rearrangedIban = iban.slice(4) + iban.slice(0, 4);

  // Remplace chaque lettre par deux chiffres
  let numericIban = "";
  for (const char of rearrangedIban) {
    if (char >= "A" && char <= "Z") {
      numericIban += letterToNumber(char);
    } else {
      numericIban += char;
    }
  }

  // Vérifie si le nombre est divisible par 97
  const remainder = mod97(numericIban);
  return remainder === 1;
}

function mod97(iban) {
  let remainder = 0;
  for (let i = 0; i < iban.length; i++) {
    remainder = (remainder * 10 + parseInt(iban.charAt(i), 10)) % 97;
  }
  return remainder;
}

export default {
  data() {
    return {
      iban: "",
      ibanValid: null,
    };
  },
  methods: {
    validateIBAN() {
      this.ibanValid = validateIBANFormat(this.iban);
    },
  },
};
</script>
