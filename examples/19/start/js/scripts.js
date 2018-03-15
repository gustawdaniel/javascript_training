function formatPrice(strings, ...values) {
    console.log(strings);
    console.log(values);

    let res = "";

    strings.forEach((string, index) => {
        res += string + (values[index] !== undefined ? (typeof values[index] === "number" ? `${values[index].toFixed(2)} PLN` : values[index]) : "");
    });

    return res;
}

let product = {
    name: "Płyta DVD",
    price: 1
};

let { name: pName, price: pPrice } = product;

let info = formatPrice`Dodałeś do koszyka produkt: ${pName} w cenie ${pPrice}.`;

console.log(info);