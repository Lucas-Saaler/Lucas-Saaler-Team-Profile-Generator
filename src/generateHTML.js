// Generates html file using all of the other cards put together
function generateHTML(cards){
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
        <title>Team Profiles</title>
    </head>
    <body class="bg-dark">
        <div class="h-100 text-center text-white p-3 bg-secondary bg-gradient  ">
            <h2>Team</h2>
             
          </div>
        
          <div class="container my-5">
            <div class="row d-flex justify-content-center">
            
                     ${cards}
  
            </div>
            </div>
      </body>
      </html>
            `
  }
  
  module.exports=generateHTML