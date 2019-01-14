import { Pandemic } from './pandemic.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import germIcon1 from './images/germs1.jpeg';
import germIcon2 from './images/germs2.jpeg';
import germIcon3 from './images/germs3.jpeg';


let germImg1 = document.getElementById('germ1');
germImg1.src = germIcon1;
let germImg2 = document.getElementById('germ2');
germImg2.src = germIcon2;

let germImg3 = document.getElementById('germ3');
germImg3.src = germIcon3;



$(document).ready(function () {




    setInterval(populate, 1000);

    function populate() {
        // let random = Math.floor(Math.random() * 31);
        var elements = document.getElementsByClassName('invisible');
        let rand = Math.floor(Math.random() * 4);
        elements[rand].removeAttribute("class", "invisible");
    }

    $("#clear").on("click", function () {
        var elements = document.getElementsByTagName("img");
        let rand = Math.floor(Math.random() * 4);
        elements[rand].setAttribute("class", "invisible");
    });
});

