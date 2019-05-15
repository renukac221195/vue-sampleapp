<template>
  <div>
    <v-btn name="btn" color="success" @click="showData">Click</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
    temp: [],
      list: [
        {
          id: 1,
          city: "Machado",
          country: "Brazil",
          population: "2.24",
          currency: "Real"
        },
        {
          id: 2,
          city: "Contraalmirante Cordero",
          country: "Argentina",
          population: "6.16",
          currency: "Peso"
        },
        {
          id: 3,
          city: "Zhangatas",
          country: "Kazakhstan",
          population: "2.22",
          currency: "Tenge"
        },
        {
          id: 4,
          city: "Xinyan",
          country: "China",
          population: "7.64",
          currency: "Yuan Renminbi"
        },
        {
          id: 5,
          city: "São José do Egito",
          country: "Brazil",
          population: "2.90",
          currency: "Real"
        },
        {
          id: 6,
          city: "Gahe",
          country: "China",
          population: "5.87",
          currency: "Yuan Renminbi"
        },
        {
          id: 7,
          city: "Tulay",
          country: "Philippines",
          population: "7.88",
          currency: "Peso"
        },
        {
          id: 8,
          city: "Menanga",
          country: "Indonesia",
          population: "0.65",
          currency: "Rupiah"
        },
        {
          id: 9,
          city: "Cabinda",
          country: "Angola",
          population: "1.92",
          currency: "Kwanza"
        },
        {
          id: 10,
          city: "Paoay",
          country: "Philippines",
          population: "3.74",
          currency: "Peso"
        },
        {
          id: 11,
          city: "Jilma",
          country: "Tunisia",
          population: "7.04",
          currency: "Dinar"
        },
        {
          id: 12,
          city: "Woodstock",
          country: "Canada",
          population: "0.62",
          currency: "Dollar"
        },
        {
          id: 13,
          city: "Mzuzu",
          country: "Malawi",
          population: "6.17",
          currency: "Kwacha"
        },
        {
          id: 14,
          city: "Nybro",
          country: "Sweden",
          population: "3.28",
          currency: "Krona"
        },
        {
          id: 15,
          city: "Sūrak",
          country: "Iran",
          population: "6.33",
          currency: "Rial"
        },
        {
          id: 16,
          city: "Ivatsevichy",
          country: "Belarus",
          population: "4.98",
          currency: "Ruble"
        },
        {
          id: 17,
          city: "Aubagne",
          country: "France",
          population: "5.76",
          currency: "Euro"
        },
        {
          id: 18,
          city: "Polešovice",
          country: "Czech Republic",
          population: "7.84",
          currency: "Koruna"
        },
        {
          id: 19,
          city: "Kentau",
          country: "Kazakhstan",
          population: "0.29",
          currency: "Tenge"
        },
        {
          id: 20,
          city: "Zaragoza",
          country: "Mexico",
          population: "1.73",
          currency: "Peso"
        },
        {
          id: 21,
          city: "Akropong",
          country: "Ghana",
          population: "0.84",
          currency: "Cedi"
        },
        {
          id: 22,
          city: "New Iloilo",
          country: "Philippines",
          population: "3.49",
          currency: "Peso"
        },
        {
          id: 23,
          city: "Jaša Tomić",
          country: "Serbia",
          population: "4.33",
          currency: "Dinar"
        },
        {
          id: 24,
          city: "Sukorejo",
          country: "Indonesia",
          population: "1.89",
          currency: "Rupiah"
        },
        {
          id: 25,
          city: "Batou",
          country: "China",
          population: "5.72",
          currency: "Yuan Renminbi"
        },
        {
          id: 26,
          city: "Arroyo Seco",
          country: "Argentina",
          population: "4.31",
          currency: "Peso"
        },
        {
          id: 27,
          city: "Anyang",
          country: "China",
          population: "4.13",
          currency: "Yuan Renminbi"
        },
        {
          id: 28,
          city: "Partikan",
          country: "Indonesia",
          population: "4.23",
          currency: "Rupiah"
        },
        {
          id: 29,
          city: "Sawahan",
          country: "Indonesia",
          population: "0.66",
          currency: "Rupiah"
        },
        {
          id: 30,
          city: "Paris 17",
          country: "France",
          population: "2.95",
          currency: "Euro"
        },
        {
          id: 31,
          city: "Bochum",
          country: "Germany",
          population: "1.54",
          currency: "Euro"
        },
        {
          id: 32,
          city: "Corona",
          country: "United States",
          population: "2.16",
          currency: "Dollar"
        },
        {
          id: 33,
          city: "Huaikan",
          country: "China",
          population: "1.00",
          currency: "Yuan Renminbi"
        },
        {
          id: 34,
          city: "Kalatongke",
          country: "China",
          population: "6.69",
          currency: "Yuan Renminbi"
        },
        {
          id: 35,
          city: "Ōdachō-ōda",
          country: "Japan",
          population: "1.29",
          currency: "Yen"
        },
        {
          id: 36,
          city: "Stamford",
          country: "United States",
          population: "2.51",
          currency: "Dollar"
        },
        {
          id: 37,
          city: "Las Breñas",
          country: "Argentina",
          population: "5.65",
          currency: "Peso"
        },
        {
          id: 38,
          city: "Weekombaka",
          country: "Indonesia",
          population: "1.71",
          currency: "Rupiah"
        },
        {
          id: 39,
          city: "Colonia Elisa",
          country: "Argentina",
          population: "4.98",
          currency: "Peso"
        },
        {
          id: 40,
          city: "Santa Rita",
          country: "Mexico",
          population: "7.30",
          currency: "Peso"
        },
        {
          id: 41,
          city: "Qingshui",
          country: "China",
          population: "7.51",
          currency: "Yuan Renminbi"
        },
        {
          id: 42,
          city: "Guandukou",
          country: "China",
          population: "7.03",
          currency: "Yuan Renminbi"
        },
        {
          id: 43,
          city: "Biryulëvo",
          country: "Russia",
          population: "1.24",
          currency: "Ruble"
        },
        {
          id: 44,
          city: "‘Afak",
          country: "Iraq",
          population: "6.20",
          currency: "Dinar"
        },
        {
          id: 45,
          city: "Etinan",
          country: "Nigeria",
          population: "2.10",
          currency: "Naira"
        },
        {
          id: 46,
          city: "Olavarría",
          country: "Argentina",
          population: "3.24",
          currency: "Peso"
        },
        {
          id: 47,
          city: "Little Current",
          country: "Canada",
          population: "4.45",
          currency: "Dollar"
        },
        {
          id: 48,
          city: "Al Jarādīyah",
          country: "Saudi Arabia",
          population: "2.57",
          currency: "Rial"
        },
        {
          id: 49,
          city: "Novo-Peredelkino",
          country: "Russia",
          population: "6.98",
          currency: "Ruble"
        },
        {
          id: 50,
          city: "Qingyun",
          country: "China",
          population: "6.56",
          currency: "Yuan Renminbi"
        }
      ]
    };
  },
  methods: {
    //   Get all data with population greater than 8 million. [all data]
      showData() {
      this.temp = this.list.filter(f => {
          if(f.population > 8.00)
          return f;
          else
          console.log('no data with population greater than 8 million');
      });
    },
    //  Get all data for the country “Argentina”. [all data]
    // showData() {
    //   this.temp = this.list.filter(f => {
    //       if(f.country === 'Argentina')
    //       return f;
    //   });
    //   console.log("list", this.temp);           
    // }
  }
};
</script>


<style scoped>

</style>
