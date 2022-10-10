function fazerRequisicao(url: string, method: 'GET' | 'POST' ) {
  // .....
}

type RequesteDetails = {
  url: string,
  method: 'GET' | 'POST'
};

let req: RequesteDetails = { 
  url: "https://google.com.br", 
  method: 'GET' 
}

fazerRequisicao(req.url, req.method);