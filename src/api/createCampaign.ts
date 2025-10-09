const newCampaign = {
    cliente_id: 9,
    name: "Campanha de teste",
    status: "Ativa",
    createdAt: "2025-10-09T08:49:42.993Z",
    udpatedAt: "2025-10-09T16:03:19.434Z",
    id: "6"
};

export function createCampaign() {
    fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(newCampaign)
    }).then(response => {
      if (response.ok) {
          return response.json();
      }
      return response.statusText
      
    }).then(campaign => {
      console .log(campaign)
    }).catch(error => {
      // handle error
      console.error('Erro ao tentar criar campanha: ', error)
    })
}


createCampaign()