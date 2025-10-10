import { type ColumnDef } from "@tanstack/react-table"
import { type Campaign } from "@/types/campaign"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import { EditCampaignDialog, DeleteCampaignDialog } from "@/components/campaigns"
import { useState } from "react"

interface UseColumnsWithActionsProps {
  onEditSuccess?: () => void;
  onDeleteSuccess?: () => void;
}

export function useColumnsWithActions({ onEditSuccess, onDeleteSuccess }: UseColumnsWithActionsProps = {}) {
  const [editingCampaign, setEditingCampaign] = useState<Campaign | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [deletingCampaign, setDeletingCampaign] = useState<Campaign | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleEdit = (campaign: Campaign) => {
    setEditingCampaign(campaign);
    setIsEditDialogOpen(true);
  };

  const handleEditSuccess = () => {
    onEditSuccess?.();
    setIsEditDialogOpen(false);
    setEditingCampaign(null);
  };

  const handleEditClose = () => {
    setIsEditDialogOpen(false);
    setEditingCampaign(null);
  };

  const handleDelete = (campaign: Campaign) => {
    setDeletingCampaign(campaign);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteSuccess = () => {
    onDeleteSuccess?.();
    setIsDeleteDialogOpen(false);
    setDeletingCampaign(null);
  };

  const handleDeleteClose = () => {
    setIsDeleteDialogOpen(false);
    setDeletingCampaign(null);
  };

  const columns: ColumnDef<Campaign>[] = [
    {
      accessorKey: 'name',
      header: 'Nome da campanha' 
    },
    {
      accessorKey: 'owner_client',
      header: 'Cliente da campanha' 
    },
    {
      accessorKey: 'status',
      header: 'Status' 
    },
    {
      accessorKey: 'createdAt',
      header: 'Data criação' 
    },
    {
      accessorKey: 'updatedAt',
      header: 'Data atualização' 
    },
    {
      id: 'actions',
      header: 'Ações',
      cell: ({ row }) => {
        const campaign = row.original;
        
        return (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleEdit(campaign)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleDelete(campaign)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        );
      }
    }
  ];

  return {
    columns,
    editDialog: (
      <EditCampaignDialog
        campaign={editingCampaign}
        isOpen={isEditDialogOpen}
        onClose={handleEditClose}
        onSuccess={handleEditSuccess}
      />
    ),
    deleteDialog: (
      <DeleteCampaignDialog
        campaign={deletingCampaign}
        isOpen={isDeleteDialogOpen}
        onClose={handleDeleteClose}
        onSuccess={handleDeleteSuccess}
      />
    )
  };
}
