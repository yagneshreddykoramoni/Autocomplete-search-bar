let availablekeywords = [
    'Gangs of Godavari',
    'Indian 2',
    'Double iSmart',
    'Kalki 2898 AD',
    'Pushpa 2:The Rule',
    'Sarpodhaa Sanivaaram',
    'OG',
    'Devara:Part 1',
    'Vishwambhara',
    'Harom Hara',
    'Bhaje Vaayu Vegam',
    'Gam Gam Ganesha',
    'Music Shop Murthy',
    'Game Changer',
    'NKR 21',
    'RT4GM',
    'Anaganagaa Oka Rowdy',
    'Manamey',
    'Satyabhama',
    'Kannappa',
    'The Indian House',
    'Lucky Bhaskhar',
    'Ustaad Bhagat Singh',
    'Goodachari 2',
    'The Raja Saab',
    'NBK 109',
    'Hari Hara Veera Mallu',
    'Gaanja Shankar'
];

const resultbox = document.getElementById("result-box");
const inputbox = document.getElementById("input-box");

inputbox.onkeyup = function(){
    let result = [];
    let input = inputbox.value;
    if(input.length){
        result = availablekeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if(!result.length){
        resultbox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectinput(this)>" + list + "</li>"
    });

    resultbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectinput(list){
    inputbox.value = list.innerHTML;
    resultbox.innerHTML = '';
}