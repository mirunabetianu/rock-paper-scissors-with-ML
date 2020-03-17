## Project Description

Classical Game of Rock paper scissors where the user's choice is selected through webcam.


### How the game works

The application is pretty intuitive. The user has to press two buttons in the following order : **Start game** and after that **Start Neural Network**. The second button reveals a canvas with the webcam. Once the webcam appears, the neural network will start to find a hand position between the classical three: rock, paper or scissors. Once the detection is done, the score will be modified in real-time.

### Implementation details

The application is implemented using React and Redux. The machine learning part is done using tensorflowJS, a ML library for JavaScript.
The whole prediction part is done in the AdvancedModel component, where each prediction is rendered on the canvas.
