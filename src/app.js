import 'regenerator-runtime'

import "../styles/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import "./component/RegionItem";
import "./component/RegionList";
import "./component/SearchBar";
import "./component/ProvinceItem";

import main from "../src/view/main";

document.addEventListener("DOMContentLoaded", main);