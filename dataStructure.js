//Object
const preman = {
  nama: "Rizki",
  umur: 77,
  isMarried: false
}
console.log(preman)

const a = { //object dengan data key mengguankan string
  "Makanan fav": "Pizza"
}
console.log(a['Makanan fav'])

// console.log(`Halo, nama saya ${preman.nama}`)

preman.nama = "Jalul"
preman.umur = 14
preman.isMarried = true

// console.log(`Halo, nama saya ${preman.nama}`)

//Array
const agent = ["sova", "killjoy", "jett", "tupai"]
console.log(agent)
agent.push("kambink") // Menambahkan data array pada urutan terakhir
console.log(agent)
agent.pop() // Menghapus array dengan index terakhir
console.log(agent)
agent.shift() // Menghapus data array pada urutan pertama
console.log(agent)
agent.unshift("cypher") //Menambahkan data pada urutan pertama
console.log(agent)

