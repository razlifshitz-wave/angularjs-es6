import {EnvelopeService} from "./envelope.srv";

EnvelopeController.$inject = ['$timeout']

function EnvelopeController ($timeout) {
    var ctrl = this;

    // example of using es6 imported service
    ctrl.envelopes = EnvelopeService.getEnvelopes()

    // example of using angular injectable service
    ctrl.someAsyncData = "Loading..";
    $timeout(() => {
        ctrl.someAsyncData = "Data was loaded"
    }, 2000);
}

export const Envelope = {
    bindings: {},
    controller: EnvelopeController,
    template: require('./envelope.html')
}