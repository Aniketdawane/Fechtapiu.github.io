


const form = document.getElementById('myform');


const getData = (e) => {

    e.preventDefault();

    const option = document.getElementById('options').value;
   


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02830c0f45msh5e8f32f0505a7b3p19de6bjsn76320bd1ed3a',
            'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
        }
    };
    
    fetch(`https://cricbuzz-cricket.p.rapidapi.com/matches/v1/${option}`, options)
        .then(response => response.json())
        .then(response => {

            if(!response){

                alert('not found')
            }
            else{

                document.getElementById('result').innerHTML+=`
                
                    <div class="col-md-4 py-5">
                    <div class="card show" style="width: 20rem;">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">${ response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.seriesName}</li>
                      <li class="list-group-item">${response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.matchFormat}</li>
                      <li class="list-group-item">${response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.matchDesc}</li>
                      <li class="list-group-item">${response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.seriesStartDt}</li>
                      <li class="list-group-item">${response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.seriesEndDt}</li>
                      <li class="list-group-item">${response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.stateTitle}</li>
                      <li class="list-group-item">${response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.state}</li>
                    </ul>
                  </div>

                    
                    </div>
                
                `

            }

        })
        .catch(err => console.error(err));
        // response.typeMatches[0].seriesMatches[0].seriesAdWrapper.matches[0].matchInfo.seriesName


}




form.addEventListener('submit', getData)