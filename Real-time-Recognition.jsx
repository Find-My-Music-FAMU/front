import React, { useState } from 'react';

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioUrl, setAudioUrl] = useState('');

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        let chunks = [];
        recorder.ondataavailable = (e) => chunks.push(e.data);
        recorder.onstop = () => {
          const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);
          setAudioUrl(audioURL);
          // Blob 사용하여 shazam API 요청
        };

        recorder.start();
        setIsRecording(true);
      } catch (err) {
        console.error('An error occurred: ' + err);
      }
    } else {
      alert('브라우저 미지원!');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  return (
    <div>
      <h1>실시간 노래 인식</h1>
      <button onClick={startRecording} disabled={isRecording}>Start Recording</button>
      <button onClick={stopRecording} disabled={!isRecording}>Stop Recording</button>
      {audioUrl && <audio src={audioUrl} controls />}
    </div>
  );
}

export default App;
