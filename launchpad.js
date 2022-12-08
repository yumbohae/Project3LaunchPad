// *** LAUNCHPAD CODE ***
console.log(navigator);
let device;

// This block of functions are manage connecting the web-midi-api to your launchpad
// they also parse the incoming and outgoing signals into meaningful numbers
if (navigator.requestMIDIAccess) {
  navigator.requestMIDIAccess().then(success, failure);
}
function failure() {
  console.log("Could not connect MIDI");
}

function updateDevices(event) {
  console.log(event);
}

function success(midiAccess) {
//   console.log(midiAccess);
  midiAccess.addEventListener('statechange', updateDevices);
  let inputs = midiAccess.inputs;
//   console.log(inputs);

    for (let output of midiAccess.outputs.values()) {
        device = output;
        // console.log('Output device selected', device);
    }

  inputs.forEach((input) => {
    //   console.log(input);
      input.addEventListener('midimessage', handleInput);
  });
}

function handleInput(input) {
  // console.log(input);

  let command   = input.data[0];
  let note      = input.data[1];
  let velocity  = input.data[2];

  // console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);


  if (velocity > 0) {
    noteOn(note);
  }

  if (velocity == 0){
    noteOff(note);
  }
}


// The proceding functions are where you will impliment your own 
// custom javascript functions on the notes of the launchpad
function noteOn(note) {
  console.log(`note:${note} // on`);

  // if ( note == 99){
  //   document.getElementById('hello_tag').textContent = "GoodBye!"

  // }

  if (note == 64){
    toggle()
  }
  if (note == 65){
    document.body.style.backgroundImage = "url('dominicfike.jpg')"
  }
  if (note == 66){
    document.body.style.backgroundImage = "url('dominicfike1.jpg')"
  }
  if (note == 67){
    document.body.style.backgroundImage = "url('dominicfike2.jpg')"
  }
  if (note == 96){
    document.body.style.backgroundImage = "url('dominicfike3.jpg')"
  }
  if (note == 97){
    document.body.style.backgroundImage = "url('dominicfike4.jpg')"
  }
  if (note == 98){
    document.body.style.backgroundImage = "url('dominicfike5.jpg')"
  }
  if (note == 99){
    document.body.style.backgroundImage = "url('dominicfike6.jpg')"
  }
  
  if (note == 60){
    document.body.style.backgroundImage = "url('twice.jpg')"
  }
  if (note == 61){
    document.body.style.backgroundImage = "url('twice1.jpg')"
  }
  if (note == 62){
    document.body.style.backgroundImage = "url('twice2.jpg')"
  }
  if (note == 63){
    document.body.style.backgroundImage = "url('twice3.jpg')"
  }
  if (note == 92){
    document.body.style.backgroundImage = "url('twice4.jpg')"
  }
  if (note == 93){
    document.body.style.backgroundImage = "url('twice5.jpg')"
  }
  if (note == 94){
    document.body.style.backgroundImage = "url('twice6.jpg')"
  }
  if (note == 95){
    document.body.style.backgroundImage = "url('twice7.jpg')"
  }
  
  if (note == 56){
    document.body.style.backgroundImage = "url('audreynuna.jpg')"
  }
  if (note == 57){
    document.body.style.backgroundImage = "url('audreynuna1.jpg')"
  }
  if (note == 58){
    document.body.style.backgroundImage = "url('audreynuna2.jpg')"
  }
  if (note == 59){
    document.body.style.backgroundImage = "url('audreynuna3.jpg')"
  }
  if (note == 88){
    document.body.style.backgroundImage = "url('audreynuna4.jpg')"
  }
  if (note == 89){
    document.body.style.backgroundImage = "url('audreynuna5.jpg')"
  }
  if (note == 90){
    document.body.style.backgroundImage = "url('audreynuna6.jpg')"
  }
  if (note == 91){
    document.body.style.backgroundImage = "url('audreynuna7.jpg')"
  }
  
  if (note == 52){
    document.body.style.backgroundImage = "url('jaden.jpg')"
  }
  if (note == 53){
    document.body.style.backgroundImage = "url('jaden1.jpg')"
  }
  if (note == 54){
    document.body.style.backgroundImage = "url('jaden2.jpg')"
  }
  if (note == 55){
    document.body.style.backgroundImage = "url('jaden3.jpg')"
  }
  if (note == 84){
    document.body.style.backgroundImage = "url('jaden4.jpg')"
  }
  if (note == 85){
    document.body.style.backgroundImage = "url('jaden5.jpg')"
  }
  if (note == 86){
    document.body.style.backgroundImage = "url('jaden6.jpg')"
  }
  if (note == 87){
    document.body.style.backgroundImage = "url('jaden7.jpg')"
  }

  if (note == 48){
    document.body.style.backgroundImage = "url('hwasa.jpg')"
  }
  if (note == 49){
    document.body.style.backgroundImage = "url('hwasa1.jpg')"
  }
  if (note == 50){
    document.body.style.backgroundImage = "url('hwasa2.jpg')"
  }
  if (note == 51){
    document.body.style.backgroundImage = "url('hwasa3.jpg')"
  }
  if (note == 80){
    document.body.style.backgroundImage = "url('hwasa4.jpg')"
  }
  if (note == 81){
    document.body.style.backgroundImage = "url('hwasa5.jpg')"
  }
  if (note == 82){
    document.body.style.backgroundImage = "url('hwasa6.jpg')"
  }
  if (note == 83){
    document.body.style.backgroundImage = "url('hwasa7.jpg')"
  }
  if (note == 71){
    document.body.style.backgroundImage = "url('kate.jpg')"
  }
  if (note == 70){
    document.body.style.backgroundImage = "url('drei.jpg')"
  }
}



function noteOff(note){
    console.log(`note:${note} // off`);
    
    if ( note == 64){
      }
}

// // This function is used to change the color of the midi's LED's. 
// // It is implemented in the noteOn and noteOff functions above
// function colorM(key,clr){
//   // The color key can be found on page 11 @ https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiEjtrOurb7AhXMlokEHcjqB_0QFnoECA8QAQ&url=https%3A%2F%2Fwww.djshop.gr%2FAttachment%2FDownloadFile%3FdownloadId%3D10737&usg=AOvVaw02Njpg1AY5jOV7Z6gjcw5W
//     device && device.send([0x90,key,clr]); 
// }

