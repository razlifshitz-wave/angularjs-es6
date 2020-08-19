import {ENVELOPE_SELECT_OPTIONS} from '../envelope.constants'

function EnvelopeItemController () {
    var ctrl = this;

    ctrl.someConstant = ENVELOPE_SELECT_OPTIONS.ALL
}

export const EnvelopeItem = {
    bindings: {
        envelope: '<'
    },
    controller: EnvelopeItemController,
    template: require('./envelope-item.html')
}