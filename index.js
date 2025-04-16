const http = require('http');

http.createServer((req, res) => {
  res.end(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Servidor de aplicações do IC UFBA</title>
<style>
    body {
        width: 80em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h2>Bem vindo ao Servidor de Aplicações do Instituto de Computação da UFBA!</h2>
<p>Lembramos de antemão que o primeiro <b>push</b> da sua aplicação, deverá ser realizado com o modificador <b>-f</b> conforme a seguir:</p>
<p>$ git push <b>-f</b> dokku master</p>
<p>Para a documentação completa sobre como realizar deploy da sua aplicação no nosso servidor, siga atentamente as instruções a seguir:</p>

<a href="https://graco-ufba.github.io/app/" target=_blank>manual do usuário</a>.<br/>

<p><em>Obrigado por utilizar os nossos serviços!</em></p>
</body>
</html>
`);
}).listen(process.env.PORT || 3000);
