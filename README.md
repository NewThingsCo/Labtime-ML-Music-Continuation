# Labtime - A continuation

## Contains
- A simple create-react-app setup with the brainJS utils pre-installed
- a simple Redux setup to separate UI from logic

## Install
Install the packages needed
```
npm install
``` 

## Run

Run with standard npm commands

``` 
npm start
```

## Training data
```training-data.js```  contains example of training data

## Next steps
1. Implement BrainJS so we can have a trained neural net that can decide between two things, the example data will train it to tell difference between a Trump tweet and a Kardashian tweet
2. Implement a feedback system, the brute force method of retraining can be used, either ditch old network and recreate with additional training data, or retrain old network with new data
3. Use the outputs of the previous setup to generate music with Magenta (we can walkthrough this step as its a bit complex)
    - VAE : this is a interpolator, it can either generate something new (interpolation between 0 and 1 with a single int as only required param), or if passed two tunes it can make a go between
    - RNN : this is a continuation model, given any tune, plus a temperature (variance between original and output), it will attempt to continue a previous piece of music
4. make sweet sweet music using your new ML tool!  Or go grab one of these: 
VAE interpolator : https://codepen.io/iansimon/full/Bxgbgz/
Latent-loops : https://teampieshop.github.io/latent-loops/
MelodyRNN : https://experiments.withgoogle.com/ai/ai-duet/view/


