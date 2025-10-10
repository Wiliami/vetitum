import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useDeleteCampaign } from "@/hooks/campaigns/useDeleteCampaign"
import { type Campaign } from "@/types/campaign"
import { AlertTriangle } from "lucide-react"

interface DeleteCampaignDialogProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function DeleteCampaignDialog({ 
  campaign, 
  isOpen, 
  onClose, 
  onSuccess 
}: DeleteCampaignDialogProps) {
  const { deleteCampaign, isDeleting } = useDeleteCampaign({
    onSuccess: () => {
      onSuccess?.();
      onClose();
    },
    onError: (error) => {
      console.error('Erro ao excluir campanha:', error);
    },
  });

  if (!campaign) return null;

  const handleDelete = () => {
    deleteCampaign(campaign.id);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <DialogTitle>Confirmar exclusão</DialogTitle>
          </div>
          <DialogDescription>
            Tem certeza que deseja excluir a campanha <strong>"{campaign.name}"</strong>?
            <br />
            <span className="text-red-600 font-medium">Esta ação não pode ser desfeita.</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancelar
          </Button>
          <Button 
            variant="destructive" 
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? 'Excluindo...' : 'Excluir Campanha'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
