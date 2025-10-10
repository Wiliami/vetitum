import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { CirclePlus } from 'lucide-react';
import { useState } from 'react';
import { CreateCampaignForm } from '@/components/campaigns/CreateCampaignForm';

export function CreateCampaignDialog() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSuccess = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <CirclePlus /> Nova campanha
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Adicionar campanha</DialogTitle>
          <DialogDescription>
            Cadastre e gerencie dados de campanhas.
          </DialogDescription>
        </DialogHeader>
        <CreateCampaignForm 
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </DialogContent>
    </Dialog>
  )
}
