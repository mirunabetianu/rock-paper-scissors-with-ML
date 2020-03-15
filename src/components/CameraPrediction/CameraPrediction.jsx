import React, { Component } from 'react';
import { doSinglePrediction } from '../../tfjs/evaluationHelpers';
import AdvancedModel from '../AdvancedModel';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';

const DETECTION_PERIOD = 2000;

class CameraPrediction extends Component {
  state = {
    webcamActive: false,
    camMessage: '',
    advancedDemo: false,
  };

  _renderAdvancedModel = () => {
    if (this.state.advancedDemo) {
      return (
        <div>
          <AdvancedModel key="advancedDemo" />
        </div>
      );
    }
  };

  componentDidMount () {
    window.tf = tf;
  }

  _renderWebcam = () => {
    if (this.state.webcamActive) {
      return (
        <div className="results">
          <div>64x64 Input</div>
          <canvas id="compVision" />
          <div>{this.state.camMessage}</div>
          <Webcam ref={this._refWeb} className="captureCam" />
        </div>
      );
    }
  };

  sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  detectWebcam = async () => {
    await this.sleep(100);
    const video = document.querySelectorAll('.captureCam');
    const feedbackCanvas = document.getElementById('compVision');
    // assure video is still shown
    if (video[0]) {
      const options = { feedbackCanvas };
      const predictions = await doSinglePrediction(
        this.model,
        video[0],
        options
      );
      const camMessage = predictions
        .map(p => ` ${p.className}: %${(p.probability * 100).toFixed(2)}`)
        .toString();
      this.setState({ camMessage });
      setTimeout(this.detectWebcam, DETECTION_PERIOD);
    }
  };

  _refWeb = webcam => {
    this.webcam = webcam;
  };

  render () {
    return (
      <>
        <button
          className="myButton"
          onClick={() => {
            this.setState(prevState => ({
              webcamActive: false,
              advancedDemo: !prevState.advancedDemo
            }));
          }}
        >
          {this.state.advancedDemo
            ? 'Stop Neural Network'
            : 'Start Neural Network'}
        </button>
        {this._renderAdvancedModel()}
      </>
    );
  }
}

export default CameraPrediction;