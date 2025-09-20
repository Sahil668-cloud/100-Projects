const supercars = [
    { name: "Ferrari LaFerrari", image: "ferrari laferrari.jpg" },
    { name: "Bugatti Chiron", image: "bugatti chiron.jpg" },
    { name: "Lamborghini Aventador", image: "lamborghini aventador.jpg" },
    { name: "McLaren P1", image: "mclaren p1.jpg" },
    { name: "Porsche 918 Spyder", image: "porsche 918 spyder.jpg" },
    { name: "Koenigsegg Jesko", image: "koenigsegg jesko.jpg" },
    { name: "Aston Martin Valkyrie", image: "aston martin valkyrie.jpg" },
    { name: "Pagani Huayra", image: "pagani huayra.jpg" },
    { name: "Rimac C Two", image: "rimac c_two.jpg" },
    { name: "Ferrari 812 Superfast", image: "ferrari 812 superfast.jpg" },
    { name: "Lamborghini Sián", image: "lamborghini sián.jpg" },
    { name: "McLaren Speedtail", image: "mclaren speedtail.jpg" },
    { name: "Audi R8 V10", image: "audi r8 v10.jpg" },
    { name: "Nissan GT-R Nismo", image: "Nissan GT-R Nismo.jpg" },
    { name: "Chevrolet Corvette ZR1", image: "chevrolet corvette zr1.jpg" },
    { name: "Maserati MC20", image: "maserati mc20.jpg" },
    { name: "Lotus Evija", image: "lotus evija.jpg" },
    { name: "BMW i8", image: "bmw i8.jpg" },
    { name: "Ford GT", image: "ford gt.jpg" },
    { name: "Jaguar C X75", image: "jaguar c-x75.jpg" }
];
const gallery = document.getElementById('gallery');

for (let car = 0; car < supercars.length; car++) {
    const element = supercars[car];
    gallery.innerHTML += `
        <div class="img">
            <img src="supercars/${element.image}" alt="${element.name}" width="300" loading="lazy">
            <h2>${element.name}</h2>
        </div>
    `;

}
