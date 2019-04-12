import {trainingData} from './data/training-data'
import {NeuralNetwork} from 'brain.js'
import {processTrainingData, encodeText} from "./encoding-tools";

const config =  {
    // Defaults values --> expected validation
iterations: 20000,    // the maximum times to iterate the training data --> number greater than 0
errorThresh: 0.005,   // the acceptable error percentage from training data --> number between 0 and 1
log: false,           // true to use console.log, when a function is supplied it is used --> Either true or a function
logPeriod: 10,        // iterations between logging out --> number greater than 0
learningRate: 0.3,    // scales with delta to effect training rate --> number between 0 and 1
momentum: 0.1,        // scales with next layer's change value --> number between 0 and 1
callback: null,       // a periodic call back that can be triggered while training --> null or function
callbackPeriod: 10,   // the number of iterations through the training data between callback calls --> number greater than 0
timeout: Infinity     // the max number of milliseconds to train for --> number greater than 0
}

function train(data) {
    const net = new NeuralNetwork();
    net.train(processTrainingData(data), config);
    return net.toFunction();
}

export function execute(input, trainedNet) {
    const results = trainedNet(encodeText(input));
    console.log(results);

    let output;
    let certainty;

    if(results.trump > results.kardashian){
        output = 'Donald Trump'
        certainty = Math.floor(results.trump * 100)
    }
    else{
        output = 'Kim Kardashian'
        certainty = Math.floor(results.kardashian * 100)
    }


    console.log(certainty);

    return ({
        output : isNaN(certainty) ? "Dont know!" : output,
        certainty: isNaN(certainty) ? 0 : certainty,
        length: input.length
    });
}


export function startTraining() {
    return train(trainingData);
}

export function update(tobeAdded) {

    trainingData.push(tobeAdded);

    return train(trainingData);
}
