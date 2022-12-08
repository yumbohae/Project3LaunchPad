

function apicallSpotify() {
    let playlist = [];
    playlist.push("1uJbiRwSHCMnKAMd6r0Bce?si=829f26ac21c347e4")  // statement
  
   // client_ID = "Client ID 820fa0348189458d9dc393e69c60a51b";
    accessToken = "BQDMN_pI1U1SKQH9s2CE6fCDC13SBjxG6u5aYJwqy3WpOOunwvWPYvKiNsLUa7MLjGx50xCEfyZZQBmCU71F5PmgE90GyN8MK4zchi50Z2w9adn0W4Kp1YCOlJ-LwDcpm_T49aq0B3EKS-rzuRTL4iuJ_4SQid66DGOjAPiiIPzY-kEkYw";
    playlist_id = playlist[0];
    console.log(accessToken);
    // https://developer.spotify.com/console/get-playlist/?playlist_id=540dIoYAGUzg1r76LtlZjz&market=&fields=&additional_types=
              
      $.ajax({
          //CALL SETTINGS & PARAMS
          type: 'GET',
          dataType: 'json',
          url: `https://api.spotify.com/v1/playlists/${playlist_id}`,
          async: false,
          crossDomain: true,
          headers: {'Authorization' : 'Bearer ' + accessToken},
          
          //What to do when the call finishes
          complete: function (response) {
              if (response.readyState === 4 && response.status === 200) {
                  console.log(response);
                  audioIndex = [];
                  track1 = response.responseJSON.tracks.items[0].track.name;
                  track2 = response.responseJSON.tracks.items[1].track.name;
                  track3 = response.responseJSON.tracks.items[2].track.name;
                  track4 = response.responseJSON.tracks.items[3].track.name;
                  track5 = response.responseJSON.tracks.items[4].track.name;
                  console.log(`${track1}, ${track2},`); // repeat for all
  
                  console.log(response);
                  audioIndex.push(response.responseJSON.tracks.items[0].track.preview_url);
                  audioIndex.push(response.responseJSON.tracks.items[1].track.preview_url);
                  audioIndex.push(response.responseJSON.tracks.items[2].track.preview_url);
                  audioIndex.push(response.responseJSON.tracks.items[3].track.preview_url);
                  audioIndex.push(response.responseJSON.tracks.items[4].track.preview_url);
                  console.log(`${track1}, ${track2},`); // repeat for all
  
  
                
                let audio = new Audio(audioIndex[0]);
                let current = 0;
                audio.play();
  
                audio.addEventListener('ended',function(e){
                  current++; //Your current index
                  if(current < 9){ //Check if there is other audio.
                  audio.src = audioIndex[current];
                  audio.play();
                  }
              });
  
              }
          }
      });
  }
  


    
