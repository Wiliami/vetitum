import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { EditCampaignForm } from "./EditCampaignForm"
import { type Campaign } from "@/types/campaign"

interface EditCampaignDialogProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function EditCampaignDialog({ 
  campaign, 
  isOpen, 
  onClose, 
  onSuccess 
}: EditCampaignDialogProps) {
  if (!campaign) return null;

  const handleSuccess = () => {
    onSuccess?.();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Editar campanha</DialogTitle>
          <DialogDescription>
            Edite os dados da campanha "{campaign.name}".
          </DialogDescription>
        </DialogHeader>
        <EditCampaignForm 
          campaign={campaign}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      </DialogContent>
    </Dialog>
  );
}
