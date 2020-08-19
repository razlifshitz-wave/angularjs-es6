import angular from "angular";
import {personComponent} from "./components/person";

const mod = angular.module('people', []);
mod.component('person', personComponent)

export default mod.name;