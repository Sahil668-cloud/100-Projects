const supercars = [
    { name: "Ferrari LaFerrari", image: "Ferrari LaFerrari.jpg" },
    { name: "Bugatti Chiron", image: "Bugatti Chiron.jpg" },
    { name: "Lamborghini Aventador", image: "Lamborghini Aventador.jpg" },
    { name: "McLaren P1", image: "McLaren P1.jpg" },
    { name: "Porsche 918 Spyder", image: "Porsche 918 Spyder.jpg" },
    { name: "Koenigsegg Jesko", image: "Koenigsegg Jesko.jpg" },
    { name: "Aston Martin Valkyrie", image: "Aston Martin Valkyrie.jpg" },
    { name: "Pagani Huayra", image: "Pagani Huayra.jpg" },
    { name: "Rimac C Two", image: "Rimac C_Two.jpg" },
    { name: "Ferrari 812 Superfast", image: "Ferrari 812 Superfast.jpg" },
    { name: "Lamborghini Sián", image: "Lamborghini Sián.jpg" },
    { name: "McLaren Speedtail", image: "McLaren Speedtail.jpg" },
    { name: "Audi R8 V10", image: "Audi R8 V10.jpg" },
    { name: "Nissan GT-R Nismo", image: "Nissan GT-R Nismo.jpg" },
    { name: "Chevrolet Corvette ZR1", image: "Chevrolet Corvette ZR1.jpg" },
    { name: "Maserati MC20", image: "Maserati MC20.jpg" },
    { name: "Lotus Evija", image: "Lotus Evija.jpg" },
    { name: "BMW i8", image: "BMW i8.jpg" },
    { name: "Ford GT", image: "Ford GT.jpg" },
    { name: "Jaguar C X75", image: "Jaguar C-X75.jpg" }
];
const gallery = document.getElementById('gallery');

for (let car = 0; car < supercars.length; car++) {
    const element = supercars[car];
    gallery.innerHTML += `
        <div class="img">
            <img src="https://sahil668-cloud.github.io/100-Projects/Image%20Gallery/supercars/${element.image}" alt="${element.name}" width="300" loading="lazy">
            <h2>${element.name}</h2>
        </div>
    `;

}

