'use client'

import { useFormStatus } from 'react-dom'
import { Button } from "../ui/button";

interface CreateCampaignFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export function ButtonCancelCampaign({ onCancel }: CreateCampaignFormProps) {
    const { pending } = useFormStatus()

    return (
        <Button 
          type="button" 
          variant="outline" 
          onClick={onCancel}
          disabled={pending}
        >
          Cancelar
        </Button>
    )
}