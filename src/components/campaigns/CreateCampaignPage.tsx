import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ButtonCreateCampaign } from "./ButtonCreateCampaign";
import { ButtonCancelCampaign } from "./ButtonCancelCampaign";

export function CreateCampaignForm() {
  async function handleCreateCampaign(form: FormData) {
    'user server'

    const title = form.get('title')
    console.log(title)
    const owner_client = form.get('owner_client')
    const status = form.get('status')

    if(!title || !owner_client || !status) {
      return
    }

    await fetch('https://68e532fb8e116898997ecdea.mockapi.io/api/v1/campaigns', {
      method: 'POST',
      body: JSON.stringify({
        title,
        owner_client,
        status
      })
    })

  }

  return (
     <form action={handleCreateCampaign} className="space-y-4">
      <div className="grid gap-4">
        <div className="grid gap-3">
          <Label htmlFor="name">Nome da campanha</Label>
          <Input 
            id="title" 
            name="title"
            placeholder="Ex.: Campanha Teste inicial" 
            className="border-red-500"
          />
            <span className="text-red-500 text-sm"></span>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="owner_client">Cliente da campanha</Label>
          <Input 
            id="owner_client" 
            name="owner_client"
            placeholder="Nome do cliente" 
            className="border-red-500"
          />
            <span className="text-red-500 text-sm"></span>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="status">Status</Label>
          <Input 
            id="status" 
            name="status"
            placeholder="Ex.: Ativa" 
            className="border-red-500"
          />
            <span className="text-red-500 text-sm"></span>
        </div>
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <ButtonCancelCampaign />
        <ButtonCreateCampaign />
      </div>
    </form>
  )



  
}
