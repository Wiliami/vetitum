import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Input } from  '@/components/ui/input'
import { createCampaign } from "@/functions/createCampaign"

export function CreateCampaignDialog() {
  return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                <Button>
                    + Nova campanha
                </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>+ Adicionar campanha</DialogTitle>
                    <DialogDescription>
                    Gerencie e cadastre dados de campanhas.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <div className="grid gap-3">
                    <Label htmlFor="name-1">Nome da campanha</Label>
                    <Input id="name-1" name="name" defaultValue="Campanha X" />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="username-1">Cliente da campanha</Label>
                    <Input id="username-1" name="username" defaultValue="Cliente 1" />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="username-1">Status</Label>
                    <Input id="username-1" name="username" defaultValue="Ativo" />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="username-1">Data criação</Label>
                    <Input id="username-1" name="username" defaultValue="10/10/2025" />
                    </div>
                    <div className="grid gap-3">
                    <Label htmlFor="username-1">Data de atualização</Label>
                    <Input id="username-1" name="username" defaultValue="10/10/2025" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                    <Button variant="outline">Cancelar</Button>
                    </DialogClose>
                    <Button type="submit" onClick={() => createCampaign}>Salvar</Button>
                </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
  )
}
