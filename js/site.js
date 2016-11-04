var data = {
    "name" : "Kurs JavaScript",
    "price": 60,
    "category": "internet"
};

for(var key in data){
    document.getElementById('p_'+key).innerHTML = data[key];
}