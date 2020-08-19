import angular from "angular";
import {Envelope} from "./envelope";
import {EnvelopeItem} from "./envelope-item/envelope-item";

const mod = angular.module('envelope', []);
mod.component('wvEnvelope', Envelope)
mod.component('wvEnvelopeItem', EnvelopeItem)

export default mod.name;