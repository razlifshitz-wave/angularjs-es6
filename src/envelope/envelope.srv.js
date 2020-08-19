import {EnvelopeApi} from "./envelope.api";

let envelopes = []

function getEnvelopes() {
    envelopes = EnvelopeApi.getEnvelopes()

    return envelopes;
}

export const EnvelopeService = {
    getEnvelopes: getEnvelopes
}